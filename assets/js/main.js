/* ==========================================================================
   Earkart — progressive enhancement (vanilla JS, no dependencies)
   ========================================================================== */
(function () {
  "use strict";
  var doc = document;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- Sticky header shadow --------------------------------------------- */
  var header = doc.getElementById("siteHeader");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---- Mega menu (desktop) ---------------------------------------------- */
  var triggers = Array.prototype.slice.call(doc.querySelectorAll(".nav__trigger"));
  function closeAllMega(except) {
    triggers.forEach(function (t) {
      if (t !== except) t.setAttribute("aria-expanded", "false");
    });
  }
  triggers.forEach(function (trigger) {
    trigger.addEventListener("click", function (e) {
      e.preventDefault();
      var open = trigger.getAttribute("aria-expanded") === "true";
      closeAllMega(trigger);
      trigger.setAttribute("aria-expanded", open ? "false" : "true");
    });
  });
  doc.addEventListener("click", function (e) {
    if (!e.target.closest(".has-mega")) closeAllMega(null);
  });
  doc.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeAllMega(null);
      closeMobile();
    }
  });

  /* ---- Mobile navigation ------------------------------------------------ */
  var mobileNav = doc.getElementById("mobileNav");
  var scrim = doc.getElementById("menuScrim");
  var menuToggle = doc.getElementById("menuToggle");
  var menuClose = doc.getElementById("menuClose");

  function openMobile() {
    if (!mobileNav) return;
    mobileNav.classList.add("is-open");
    mobileNav.setAttribute("aria-hidden", "false");
    if (scrim) { scrim.hidden = false; requestAnimationFrame(function () { scrim.classList.add("is-open"); }); }
    if (menuToggle) menuToggle.setAttribute("aria-expanded", "true");
    doc.body.style.overflow = "hidden";
  }
  function closeMobile() {
    if (!mobileNav) return;
    mobileNav.classList.remove("is-open");
    mobileNav.setAttribute("aria-hidden", "true");
    if (scrim) { scrim.classList.remove("is-open"); setTimeout(function () { scrim.hidden = true; }, 300); }
    if (menuToggle) menuToggle.setAttribute("aria-expanded", "false");
    doc.body.style.overflow = "";
  }
  if (menuToggle) menuToggle.addEventListener("click", openMobile);
  if (menuClose) menuClose.addEventListener("click", closeMobile);
  if (scrim) scrim.addEventListener("click", closeMobile);

  /* ---- Mobile accordions ------------------------------------------------ */
  Array.prototype.slice.call(doc.querySelectorAll(".m-acc__trigger")).forEach(function (btn) {
    btn.addEventListener("click", function () {
      var panel = btn.nextElementSibling;
      var open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", open ? "false" : "true");
      if (panel) panel.classList.toggle("is-open", !open);
    });
  });

  /* ---- Reveal on scroll ------------------------------------------------- */
  var reveals = Array.prototype.slice.call(doc.querySelectorAll(".reveal"));
  if (reduceMotion || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ---- Blog category filter --------------------------------------------- */
  var filterBtns = Array.prototype.slice.call(doc.querySelectorAll(".chip--filter"));
  var blogItems = Array.prototype.slice.call(doc.querySelectorAll("[data-blog-grid] > [data-category]"));
  if (filterBtns.length && blogItems.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        filterBtns.forEach(function (b) { b.classList.remove("is-active"); });
        btn.classList.add("is-active");
        var f = btn.getAttribute("data-filter");
        blogItems.forEach(function (item) {
          var show = f === "all" || item.getAttribute("data-category") === f;
          item.style.display = show ? "" : "none";
        });
      });
    });
  }

  /* ---- Forms (front-end demo) ------------------------------------------- */
  Array.prototype.slice.call(doc.querySelectorAll("form[data-form]")).forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var valid = true;
      Array.prototype.slice.call(form.querySelectorAll("[required]")).forEach(function (field) {
        var ok = field.value && field.value.trim().length > 0;
        field.classList.toggle("is-invalid", !ok);
        if (!ok && valid) { field.focus(); valid = false; }
      });
      if (!valid) return;
      var success = form.querySelector(".form__success");
      if (success) {
        success.hidden = false;
        success.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
      }
      form.reset();
      if (form.getAttribute("data-form") === "finder") {
        window.alert("Center search is a front-end demo. Connect a live centers directory to enable results.");
      }
    });
  });

  /* ---- Footer year ------------------------------------------------------ */
  Array.prototype.slice.call(doc.querySelectorAll("[data-year]")).forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
