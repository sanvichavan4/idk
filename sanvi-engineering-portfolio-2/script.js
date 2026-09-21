/* ==========================================================================
   SANVI CHAVAN — ENGINEERING PORTFOLIO
   script.js — small, genuinely useful behaviors only:
   1. Mobile navigation toggle
   2. Close mobile nav after a link is clicked
   3. Auto-update the footer year
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {

  // 1. Mobile navigation toggle -------------------------------------------
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // 2. Close the menu once a section link is clicked ---------------------
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 3. Footer year ----------------------------------------------------------
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});
