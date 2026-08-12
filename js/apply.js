(function(){
  "use strict";

  const root = document.documentElement;
  const LANG_KEY = "sbg-lang";
  const THEME_KEY = "sbg-theme";

  /* ---------------- Theme ---------------- */
  function applyTheme(theme){
    if(theme === "dark"){ root.setAttribute("data-theme","dark"); }
    else { root.removeAttribute("data-theme"); }
    localStorage.setItem(THEME_KEY, theme);
  }
  function initTheme(){
    const saved = localStorage.getItem(THEME_KEY);
    if(saved){ applyTheme(saved); return; }
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(prefersDark ? "dark" : "light");
  }
  document.getElementById("themeToggle").addEventListener("click", function(){
    const isDark = root.getAttribute("data-theme") === "dark";
    applyTheme(isDark ? "light" : "dark");
  });

  /* ---------------- Language ---------------- */
  function applyLang(lang){
    const dict = translations[lang] || translations.en;
    document.querySelectorAll("[data-i18n]").forEach(function(el){
      const key = el.getAttribute("data-i18n");
      if(dict[key] !== undefined){ el.textContent = dict[key]; }
    });
    root.setAttribute("lang", lang);
    root.setAttribute("data-current-lang", lang);
    document.getElementById("langLabel").textContent = lang.toUpperCase();
    document.querySelectorAll(".lang-menu li").forEach(function(li){
      li.classList.toggle("active", li.getAttribute("data-lang") === lang);
    });
    localStorage.setItem(LANG_KEY, lang);
  }
  function initLang(){
    const saved = localStorage.getItem(LANG_KEY);
    const browserLang = (navigator.language || "en").slice(0,2);
    const supported = ["en","tr","am"];
    const lang = saved || (supported.includes(browserLang) ? browserLang : "en");
    applyLang(lang);
  }

  const langSwitch = document.getElementById("langSwitch");
  const langButton = document.getElementById("langButton");
  langButton.addEventListener("click", function(e){
    e.stopPropagation();
    const open = langSwitch.classList.toggle("open");
    langButton.setAttribute("aria-expanded", open ? "true" : "false");
  });
  document.querySelectorAll(".lang-menu li").forEach(function(li){
    li.addEventListener("click", function(){
      applyLang(li.getAttribute("data-lang"));
      langSwitch.classList.remove("open");
      langButton.setAttribute("aria-expanded","false");
    });
  });
  document.addEventListener("click", function(){
    langSwitch.classList.remove("open");
    langButton.setAttribute("aria-expanded","false");
  });

  /* ---------------- Header scroll state ---------------- */
  const header = document.getElementById("siteHeader");
  const backToTop = document.getElementById("backToTop");
  function onScroll(){
    const y = window.scrollY;
    header.classList.toggle("scrolled", y > 20);
    backToTop.classList.toggle("visible", y > 500);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  backToTop.addEventListener("click", function(){
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---------------- Scroll reveal ---------------- */
  const revealEls = document.querySelectorAll(".reveal");
  if("IntersectionObserver" in window){
    const io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
    revealEls.forEach(function(el){ io.observe(el); });
  } else {
    revealEls.forEach(function(el){ el.classList.add("in"); });
  }

  /* ---------------- Application form ---------------- */
  const applyForm = document.getElementById("applyForm");
  const formNote = document.getElementById("formNote");
  const submitBtn = applyForm.querySelector(".form-submit");
  const submitLabel = submitBtn.textContent;

  const EMAIL_ENDPOINT = "https://formsubmit.co/ajax/info@sapanjabusinessgroup.com";

  const successModal = document.getElementById("successModal");
  const successModalBackdrop = document.getElementById("successModalBackdrop");
  const successModalClose = document.getElementById("successModalClose");
  const successModalTelegram = document.getElementById("successModalTelegram");
  const TELEGRAM_BOT_USERNAME = "SapanjaApp_bot";
  function openSuccessModal(telegramStart){
    if(telegramStart){
      successModalTelegram.href = "https://t.me/" + TELEGRAM_BOT_USERNAME + "?start=" + encodeURIComponent(telegramStart);
      successModalTelegram.classList.add("visible");
    } else {
      successModalTelegram.classList.remove("visible");
    }
    successModal.classList.add("open");
    successModal.setAttribute("aria-hidden", "false");
  }
  function closeSuccessModal(){
    successModal.classList.remove("open");
    successModal.setAttribute("aria-hidden", "true");
  }
  successModalBackdrop.addEventListener("click", closeSuccessModal);
  successModalClose.addEventListener("click", closeSuccessModal);
  document.addEventListener("keydown", function(e){
    if(e.key === "Escape") closeSuccessModal();
  });

  function labelFor(selectEl){
    return selectEl.options[selectEl.selectedIndex].text;
  }

  function currentDict(){
    const lang = root.getAttribute("data-current-lang") || "en";
    return translations[lang] || translations.en;
  }

  applyForm.addEventListener("submit", async function(e){
    e.preventDefault();
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const department = document.getElementById("department").value.trim();
    const level = labelFor(document.getElementById("level"));
    const city = labelFor(document.getElementById("city"));
    const budget = labelFor(document.getElementById("budget"));

    submitBtn.disabled = true;
    submitBtn.textContent = currentDict()["form.sending"] || "Sending...";
    formNote.textContent = "";
    formNote.classList.remove("form-note-error");

    const currentLang = root.getAttribute("data-current-lang") || "en";

    const telegramPromise = fetch("/api/apply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fullName, email, phone, department, level, city, budget, lang: currentLang })
    }).then(function(r){
      if(!r.ok) return { ok: false };
      return r.json().then(function(data){ return { ok: true, telegramStart: data.telegramStart }; }).catch(function(){ return { ok: true }; });
    }).catch(function(){ return { ok: false }; });

    const emailPromise = fetch(EMAIL_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({
        _subject: "New Fall 2026-27 Application: " + fullName,
        "Full Name": fullName,
        "Email": email,
        "WhatsApp / Telegram": phone,
        "Department": department,
        "Degree Level": level,
        "Preferred City": city,
        "Annual Tuition Budget": budget
      })
    }).then(function(r){ return r.ok; }).catch(function(){ return false; });

    const results = await Promise.all([telegramPromise, emailPromise]);
    const telegramResult = results[0];
    const delivered = telegramResult.ok || results[1];

    submitBtn.disabled = false;
    submitBtn.textContent = submitLabel;

    const dict = currentDict();
    if(delivered){
      formNote.textContent = "";
      applyForm.reset();
      openSuccessModal(telegramResult.telegramStart);
    } else {
      formNote.textContent = dict["form.errorNote"] || translations.en["form.errorNote"];
      formNote.classList.add("form-note-error");
    }
  });

  /* ---------------- Footer year ---------------- */
  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---------------- Preloader ---------------- */
  (function(){
    const pre = document.getElementById("preloader");
    const video = document.querySelector(".preloader-video");
    let dismissed = false;
    function dismiss(){
      if(dismissed) return;
      dismissed = true;
      pre.classList.add("done");
    }
    if(video){
      video.playbackRate = 2.0;
      video.addEventListener("ended", dismiss);
      video.addEventListener("error", dismiss);
      video.play().catch(dismiss);
      setTimeout(dismiss, 12000);
    } else {
      window.addEventListener("load", function(){ setTimeout(dismiss, 350); });
    }
  })();

  /* ---------------- Init ---------------- */
  initTheme();
  initLang();
})();
