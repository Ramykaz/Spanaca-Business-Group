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
  function renderServiceLists(lang){
    const map = { service1: "service1List", service2: "service2List", service3: "service3List", service4: "service4List" };
    Object.keys(map).forEach(function(key){
      const el = document.getElementById(map[key]);
      if(!el) return;
      const items = (SERVICE_LISTS[lang] && SERVICE_LISTS[lang][key]) || SERVICE_LISTS.en[key];
      el.innerHTML = items.map(function(txt){ return "<li>" + txt + "</li>"; }).join("");
    });
  }

  function applyLang(lang){
    const dict = translations[lang] || translations.en;

    document.querySelectorAll("[data-i18n]").forEach(function(el){
      const key = el.getAttribute("data-i18n");
      if(dict[key] !== undefined){ el.textContent = dict[key]; }
    });

    renderServiceLists(lang);

    root.setAttribute("lang", lang);
    root.setAttribute("data-current-lang", lang);
    document.getElementById("langLabel").textContent = lang.toUpperCase();

    document.querySelectorAll(".lang-menu li").forEach(function(li){
      li.classList.toggle("active", li.getAttribute("data-lang") === lang);
    });
    document.querySelectorAll(".footer-langs button").forEach(function(btn){
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
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
  document.querySelectorAll(".footer-langs button").forEach(function(btn){
    btn.addEventListener("click", function(){ applyLang(btn.getAttribute("data-lang")); });
  });
  document.addEventListener("click", function(){
    langSwitch.classList.remove("open");
    langButton.setAttribute("aria-expanded","false");
  });

  /* ---------------- Mobile nav ---------------- */
  const hamburger = document.getElementById("hamburger");
  const mainNav = document.getElementById("mainNav");
  hamburger.addEventListener("click", function(){
    const open = mainNav.classList.toggle("open");
    hamburger.classList.toggle("open", open);
    hamburger.setAttribute("aria-expanded", open ? "true" : "false");
  });
  mainNav.querySelectorAll("a").forEach(function(a){
    a.addEventListener("click", function(){
      mainNav.classList.remove("open");
      hamburger.classList.remove("open");
      hamburger.setAttribute("aria-expanded","false");
    });
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

  /* ---------------- Animated counters ---------------- */
  const counters = document.querySelectorAll("[data-count]");
  function animateCounter(el){
    const target = parseInt(el.getAttribute("data-count"), 10);
    const duration = 1600;
    const start = performance.now();
    function tick(now){
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target).toLocaleString("en-US");
      if(progress < 1){ requestAnimationFrame(tick); }
      else { el.textContent = target.toLocaleString("en-US"); }
    }
    requestAnimationFrame(tick);
  }
  if("IntersectionObserver" in window && counters.length){
    const cio = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          animateCounter(entry.target);
          cio.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(function(el){ cio.observe(el); });
  }

  /* ---------------- Contact form ---------------- */
  const contactForm = document.getElementById("contactForm");
  const formNote = document.getElementById("formNote");
  const contactSubmitBtn = contactForm.querySelector(".form-submit");
  const contactSubmitLabel = contactSubmitBtn.textContent;
  const CONTACT_EMAIL_ENDPOINT = "https://formsubmit.co/ajax/info@sapanjabusinessgroup.com";

  function contactDict(){
    const lang = root.getAttribute("data-current-lang") || "en";
    return translations[lang] || translations.en;
  }

  contactForm.addEventListener("submit", async function(e){
    e.preventDefault();
    const data = new FormData(contactForm);
    const first = (data.get("firstName") || "").toString().trim();
    const last = (data.get("lastName") || "").toString().trim();
    const email = (data.get("email") || "").toString().trim();
    const phone = (data.get("phone") || "").toString().trim();
    const interest = document.getElementById("interest");
    const interestLabel = interest.options[interest.selectedIndex].text;
    const message = (data.get("message") || "").toString().trim();
    const fullName = (first + " " + last).trim();

    contactSubmitBtn.disabled = true;
    contactSubmitBtn.textContent = contactDict()["form.sending"] || "Sending...";
    formNote.textContent = "";
    formNote.classList.remove("form-note-error");

    const telegramPromise = fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: fullName, email: email, phone: phone, interest: interestLabel, message: message })
    }).then(function(r){ return r.ok; }).catch(function(){ return false; });

    const emailPromise = fetch(CONTACT_EMAIL_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({
        _subject: "New Website Contact: " + fullName,
        "Name": fullName,
        "Email": email,
        "Phone / WhatsApp": phone,
        "Interested in": interestLabel,
        "Message": message
      })
    }).then(function(r){ return r.ok; }).catch(function(){ return false; });

    const results = await Promise.all([telegramPromise, emailPromise]);
    const delivered = results.some(function(ok){ return ok; });

    contactSubmitBtn.disabled = false;
    contactSubmitBtn.textContent = contactSubmitLabel;

    const dict = contactDict();
    if(delivered){
      formNote.textContent = dict["form.successNote"] || translations.en["form.successNote"];
      contactForm.reset();
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
