/* ==========================================================================
   Earkart — progressive enhancement (vanilla JS, no dependencies)
   ========================================================================== */
(function () {
  "use strict";
  var doc = document;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var slice = function (list) { return Array.prototype.slice.call(list); };

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
  var triggers = slice(doc.querySelectorAll(".nav__trigger"));
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
      // Suppress hover-opened panels until the pointer next moves (WCAG 1.4.13)
      doc.body.classList.add("nav-hover-suppressed");
      closeMobile();
    }
  });
  doc.addEventListener("mousemove", function () {
    if (doc.body.classList.contains("nav-hover-suppressed")) {
      doc.body.classList.remove("nav-hover-suppressed");
    }
  }, { passive: true });

  /* ---- Mobile navigation ------------------------------------------------ */
  var mobileNav = doc.getElementById("mobileNav");
  var scrim = doc.getElementById("menuScrim");
  var menuToggle = doc.getElementById("menuToggle");
  var menuClose = doc.getElementById("menuClose");
  var scrimTimer = null;

  // Keep the closed drawer out of the tab order / a11y tree (it is only
  // hidden via transform in CSS). `inert` covers focus + aria-hidden.
  function setNavInert(on) {
    if (!mobileNav) return;
    if ("inert" in HTMLElement.prototype) mobileNav.inert = on;
    mobileNav.setAttribute("aria-hidden", on ? "true" : "false");
  }
  if (mobileNav) setNavInert(true);

  function openMobile() {
    if (!mobileNav) return;
    if (scrimTimer) { clearTimeout(scrimTimer); scrimTimer = null; }
    mobileNav.classList.add("is-open");
    setNavInert(false);
    if (scrim) { scrim.hidden = false; requestAnimationFrame(function () { scrim.classList.add("is-open"); }); }
    if (menuToggle) menuToggle.setAttribute("aria-expanded", "true");
    doc.body.style.overflow = "hidden";
    if (menuClose) menuClose.focus();
  }
  function closeMobile() {
    if (!mobileNav) return;
    // Move focus out before hiding, so focus never sits inside an inert region.
    if (mobileNav.contains(doc.activeElement) && menuToggle) menuToggle.focus();
    mobileNav.classList.remove("is-open");
    setNavInert(true);
    if (scrim) {
      scrim.classList.remove("is-open");
      scrimTimer = setTimeout(function () { scrim.hidden = true; scrimTimer = null; }, 300);
    }
    if (menuToggle) menuToggle.setAttribute("aria-expanded", "false");
    doc.body.style.overflow = "";
  }
  if (menuToggle) menuToggle.addEventListener("click", openMobile);
  if (menuClose) menuClose.addEventListener("click", closeMobile);
  if (scrim) scrim.addEventListener("click", closeMobile);

  /* ---- Mobile accordions ------------------------------------------------ */
  slice(doc.querySelectorAll(".m-acc__trigger")).forEach(function (btn) {
    btn.addEventListener("click", function () {
      var panel = btn.nextElementSibling;
      var open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", open ? "false" : "true");
      if (panel) panel.classList.toggle("is-open", !open);
    });
  });

  /* ---- Reveal on scroll ------------------------------------------------- */
  var reveals = slice(doc.querySelectorAll(".reveal"));
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

  /* ---- Blog category filter (toggle buttons, aria-pressed) --------------- */
  var blogGrid = doc.querySelector("[data-blog-grid]");
  var filterBtns = slice(doc.querySelectorAll(".chip--filter[data-filter]"));
  var blogItems = blogGrid ? slice(blogGrid.querySelectorAll(":scope > [data-category]")) : [];
  var blogEmpty = doc.querySelector("[data-blog-empty]");
  if (filterBtns.length && blogItems.length) {
    filterBtns.forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.classList.contains("is-active") ? "true" : "false");
      btn.addEventListener("click", function () {
        filterBtns.forEach(function (b) {
          b.classList.remove("is-active");
          b.setAttribute("aria-pressed", "false");
        });
        btn.classList.add("is-active");
        btn.setAttribute("aria-pressed", "true");
        var f = btn.getAttribute("data-filter");
        var visible = 0;
        blogItems.forEach(function (item) {
          var show = f === "all" || item.getAttribute("data-category") === f;
          item.style.display = show ? "" : "none";
          if (show) visible++;
        });
        if (blogEmpty) blogEmpty.hidden = visible !== 0;
      });
    });
  }

  /* ---- Investor document filters (year / type) --------------------------- */
  slice(doc.querySelectorAll("[data-doc-filters]")).forEach(function (bar) {
    var group = bar.getAttribute("data-doc-filters"); // "year" | "type"
    var buttons = slice(bar.querySelectorAll(".chip--filter"));
    buttons.forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.classList.contains("is-active") ? "true" : "false");
      btn.addEventListener("click", function () {
        buttons.forEach(function (b) { b.classList.remove("is-active"); b.setAttribute("aria-pressed", "false"); });
        btn.classList.add("is-active");
        btn.setAttribute("aria-pressed", "true");
        applyDocFilters();
      });
    });
  });
  function activeDocFilter(group) {
    var bar = doc.querySelector('[data-doc-filters="' + group + '"]');
    if (!bar) return "";
    var active = bar.querySelector(".chip--filter.is-active");
    return active ? active.getAttribute("data-filter") : "";
  }
  function applyDocFilters() {
    var year = activeDocFilter("year");
    var type = activeDocFilter("type");
    var docs = slice(doc.querySelectorAll(".doc[data-doc-year]"));
    if (!docs.length) return;
    docs.forEach(function (d) {
      var okY = !year || year === "all" || d.getAttribute("data-doc-year") === year;
      var okT = !type || type === "all" || d.getAttribute("data-doc-type") === type;
      d.style.display = okY && okT ? "" : "none";
    });
    // hide group blocks with no visible documents
    slice(doc.querySelectorAll(".doc-group")).forEach(function (g) {
      var any = slice(g.querySelectorAll(".doc")).some(function (d) { return d.style.display !== "none"; });
      g.style.display = any ? "" : "none";
    });
    var empty = doc.querySelector("[data-docs-empty]");
    if (empty) {
      var anyVisible = docs.some(function (d) { return d.style.display !== "none"; });
      empty.hidden = anyVisible;
    }
  }

  /* ---- Center finder (client-side over rendered directory) --------------- */
  var finder = doc.querySelector('form[data-form="finder"]');
  if (finder) {
    var centersEls = slice(doc.querySelectorAll("[data-center]"));
    var emptyEl = doc.querySelector("[data-center-empty]");
    var noticeEl = finder.querySelector("[data-finder-notice]");
    var runSearch = function () {
      var city = (finder.querySelector("#f-city").value || "").trim().toLowerCase();
      var state = finder.querySelector("#f-state").value || "";
      var service = finder.querySelector("#f-service").value || "";
      var pin = (finder.querySelector("#f-pin").value || "").trim();
      var visible = 0;
      centersEls.forEach(function (el) {
        var ok = true;
        if (city && el.getAttribute("data-city").indexOf(city) === -1) ok = false;
        if (state && el.getAttribute("data-state") !== state) ok = false;
        if (service && el.getAttribute("data-services").split("|").indexOf(service) === -1) ok = false;
        if (pin && el.getAttribute("data-pin").indexOf(pin) !== 0) ok = false;
        el.style.display = ok ? "" : "none";
        if (ok) visible++;
      });
      if (emptyEl) emptyEl.hidden = visible !== 0;
      if (noticeEl) {
        noticeEl.hidden = false;
        noticeEl.textContent = visible === centersEls.length
          ? "Showing all " + visible + " partner centers."
          : "Showing " + visible + " of " + centersEls.length + " partner centers.";
      }
    };
    finder.addEventListener("submit", function (e) { e.preventDefault(); runSearch(); });
    slice(finder.querySelectorAll("select")).forEach(function (s) { s.addEventListener("change", runSearch); });
  }

  /* ---- Lead forms: validation + endpoint submission (or demo mode) ------- */
  slice(doc.querySelectorAll('form[data-form="appointment"], form[data-form="contact"]')).forEach(function (form) {
    var successEl = form.querySelector(".form__success");
    var errorEl = form.querySelector(".form__error");
    var submitBtn = form.querySelector('button[type="submit"]');

    function setFieldState(field, ok) {
      field.classList.toggle("is-invalid", !ok);
      field.setAttribute("aria-invalid", ok ? "false" : "true");
      var err = doc.getElementById(field.id + "-error");
      if (err) err.hidden = ok;
    }
    slice(form.querySelectorAll("[required]")).forEach(function (field) {
      field.addEventListener("input", function () { setFieldState(field, true); });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (successEl) successEl.hidden = true;
      if (errorEl) errorEl.hidden = true;

      // honeypot: silently drop bot submissions
      var hp = form.querySelector(".hp-field");
      if (hp && hp.value) return;

      var valid = true;
      var firstInvalid = null;
      slice(form.querySelectorAll("[required]")).forEach(function (field) {
        var value = (field.value || "").trim();
        var ok = value.length > 0;
        if (ok && field.type === "tel") {
          // Allow +, spaces, hyphens and brackets, but require 8–15 actual
          // digits (E.164 max) so punctuation-only input is rejected.
          var digits = value.replace(/\D/g, "").length;
          ok = /^[+()\-\s\d]{8,20}$/.test(value) && digits >= 8 && digits <= 15;
        }
        setFieldState(field, ok);
        if (!ok && !firstInvalid) firstInvalid = field;
        if (!ok) valid = false;
      });
      if (!valid) { if (firstInvalid) firstInvalid.focus(); return; }

      var endpoint = form.getAttribute("data-endpoint");
      var showSuccess = function () {
        if (successEl) {
          successEl.hidden = false;
          successEl.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
        }
        form.reset();
      };

      if (!endpoint) { showSuccess(); return; } // demo mode

      var payload = { form: form.getAttribute("data-form"), page: location.pathname };
      slice(form.querySelectorAll("input[name], select[name], textarea[name]")).forEach(function (f) {
        if (f.name !== "company_website") payload[f.name] = f.value;
      });
      if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = "Sending…"; }
      fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).then(function (res) {
        if (!res.ok) throw new Error("HTTP " + res.status);
        showSuccess();
      }).catch(function () {
        if (errorEl) {
          errorEl.hidden = false;
          errorEl.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
        }
      }).finally(function () {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = submitBtn.getAttribute("data-submit-label") || "Submit";
        }
      });
    });
  });

  /* ---- Footer year ------------------------------------------------------ */
  slice(doc.querySelectorAll("[data-year]")).forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
