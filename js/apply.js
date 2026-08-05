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

  function labelFor(selectEl){
    return selectEl.options[selectEl.selectedIndex].text;
  }

  function buildPdf(data){
    if(!window.jspdf){ return; }
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const navy = [20, 33, 56];
    const gold = [196, 144, 58];

    doc.setFillColor(navy[0], navy[1], navy[2]);
    doc.rect(0, 0, 210, 32, "F");
    doc.setTextColor(255,255,255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("Sapanja Business Group", 15, 16);
    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(gold[0], gold[1], gold[2]);
    doc.text("Fall 2026-27 Education Application Interest", 15, 24);

    doc.setTextColor(40,40,40);
    let y = 46;
    const rows = [
      ["Submitted", new Date().toLocaleString()],
      ["Full Name", data.fullName],
      ["Email", data.email],
      ["WhatsApp / Telegram", data.phone],
      ["Department", data.department],
      ["Degree Level", data.level],
      ["Preferred City", data.city],
      ["Annual Tuition Budget", data.budget]
    ];
    rows.forEach(function(row){
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.text(row[0] + ":", 15, y);
      doc.setFont("helvetica", "normal");
      doc.text(String(row[1]), 70, y);
      y += 10;
    });

    doc.setDrawColor(gold[0], gold[1], gold[2]);
    doc.line(15, y + 2, 195, y + 2);
    doc.setFontSize(9);
    doc.setTextColor(120,120,120);
    doc.text("Ankara, Turkey  |  +90 501 658 29 22  |  info@sapancabusinessgroup.com", 15, y + 10);

    const safeName = (data.fullName || "applicant").replace(/[^a-z0-9]+/gi, "-").toLowerCase();
    doc.save("sapanja-application-" + safeName + ".pdf");
  }

  applyForm.addEventListener("submit", function(e){
    e.preventDefault();
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const department = document.getElementById("department").value.trim();
    const level = labelFor(document.getElementById("level"));
    const city = labelFor(document.getElementById("city"));
    const budget = labelFor(document.getElementById("budget"));

    const lines = [
      "Hello Sapanja Business Group,",
      "I'm interested in studying in Turkey for the Fall 2026-27 intake.",
      "",
      "Full Name: " + fullName,
      "Email: " + email,
      "WhatsApp / Telegram: " + phone,
      "Department: " + department,
      "Degree Level: " + level,
      "Preferred City: " + city,
      "Annual Tuition Budget: " + budget
    ];
    const waUrl = "https://wa.me/905016582922?text=" + encodeURIComponent(lines.join("\n"));

    try{
      buildPdf({ fullName: fullName, email: email, phone: phone, department: department, level: level, city: city, budget: budget });
    } catch(err){ /* PDF is a bonus; WhatsApp delivery below is what matters */ }

    const lang = root.getAttribute("data-current-lang") || "en";
    formNote.textContent = (translations[lang] && translations[lang]["form.successNote"]) || translations.en["form.successNote"];

    window.open(waUrl, "_blank", "noopener");
    applyForm.reset();
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
