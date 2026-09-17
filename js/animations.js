/**
 * IrrationaL Portfolio - Animations & Day/Night Theme Engine
 * - Day / Night Accent Auto-Detection:
 *   - Day (06:00 - 18:00): Amber Accent (#f59e0b)
 *   - Night (18:00 - 06:00): Cyan Accent (#38bdf8)
 * - Manual override with localStorage persistence
 * - Cursor-following ambient spotlight
 * - Scroll-driven reveal observers
 * - YouTube trailer video modal
 */

(function () {
  'use strict';

  const THEME_STORAGE_KEY = 'irrational-accent-theme';
  const htmlEl = document.documentElement;

  // 1. Day / Night Theme Engine
  function getAutoTimeTheme() {
    const currentHour = new Date().getHours();
    // Day between 6 AM (06:00) and 6 PM (18:00) -> Amber
    // Night between 6 PM (18:00) and 6 AM (06:00) -> Cyan
    return (currentHour >= 6 && currentHour < 18) ? 'amber' : 'cyan';
  }

  function initTheme() {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    const initialTheme = savedTheme || getAutoTimeTheme();
    applyTheme(initialTheme, !savedTheme);
  }

  function applyTheme(theme, isAuto = false) {
    htmlEl.setAttribute('data-theme', theme);
    if (!isAuto) {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    }
    
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    if (themeToggleBtn) {
      const sunIcon = themeToggleBtn.querySelector('.icon-sun');
      const moonIcon = themeToggleBtn.querySelector('.icon-moon');
      const labelSpan = themeToggleBtn.querySelector('.theme-label');

      if (theme === 'amber') {
        if (sunIcon) sunIcon.style.display = 'block';
        if (moonIcon) moonIcon.style.display = 'none';
        if (labelSpan) labelSpan.textContent = 'Day';
        themeToggleBtn.setAttribute('title', 'Switch to Night Theme (Cyan Accent)');
        themeToggleBtn.setAttribute('aria-label', 'Current: Day Theme (Amber). Switch to Night Theme.');
      } else {
        if (sunIcon) sunIcon.style.display = 'none';
        if (moonIcon) moonIcon.style.display = 'block';
        if (labelSpan) labelSpan.textContent = 'Night';
        themeToggleBtn.setAttribute('title', 'Switch to Day Theme (Amber Accent)');
        themeToggleBtn.setAttribute('aria-label', 'Current: Night Theme (Cyan). Switch to Day Theme.');
      }
    }
  }

  function toggleTheme() {
    const currentTheme = htmlEl.getAttribute('data-theme') || 'amber';
    const newTheme = currentTheme === 'amber' ? 'cyan' : 'amber';
    applyTheme(newTheme, false);
  }

  // 2. Cursor Spotlight Tracking
  function initSpotlight() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let ticking = false;
    window.addEventListener('pointermove', (e) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          htmlEl.style.setProperty('--mouse-x', `${e.clientX}px`);
          htmlEl.style.setProperty('--mouse-y', `${e.clientY}px`);
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // 3. Scroll-Driven Reveal Observer
  function initScrollReveal() {
    const revealEls = document.querySelectorAll('.reveal-on-scroll');
    if (!revealEls.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      revealEls.forEach(el => el.classList.add('is-revealed'));
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.08
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealEls.forEach(el => observer.observe(el));
  }

  // 4. Video Trailer Modal / Player
  function initVideoPlayer() {
    const playBtn = document.getElementById('play-puzzlestrike-trailer');
    const playBtnLink = document.getElementById('play-puzzlestrike-trailer-link');
    const modal = document.getElementById('video-modal');
    const modalIframe = document.getElementById('video-modal-iframe');
    const closeBtn = document.getElementById('video-modal-close');
    const backdrop = document.getElementById('video-modal-backdrop');

    if (!modal || !modalIframe) return;

    const ytVideoId = 'yUVrC2nc6fQ';

    function openModal(e) {
      if (e) e.preventDefault();
      modalIframe.src = `https://www.youtube-nocookie.com/embed/${ytVideoId}?autoplay=1&rel=0&modestbranding=1`;
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      modal.classList.remove('active');
      modalIframe.src = '';
      document.body.style.overflow = '';
    }

    if (playBtn) playBtn.addEventListener('click', openModal);
    if (playBtnLink) playBtnLink.addEventListener('click', openModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (backdrop) backdrop.addEventListener('click', closeModal);

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });
  }

  // 5. CV Document Viewer Modal
  function initCvModal() {
    const modal = document.getElementById('cv-modal');
    const modalIframe = document.getElementById('cv-modal-iframe');
    const closeBtn = document.getElementById('cv-modal-close');
    const backdrop = document.getElementById('cv-modal-backdrop');
    const togglePdfBtn = document.getElementById('cv-toggle-pdf');
    const toggleHtmlBtn = document.getElementById('cv-toggle-html');

    if (!modal || !modalIframe) return;

    const cvTriggers = document.querySelectorAll('[data-open-cv]');
    let currentMode = 'pdf';

    function setMode(mode) {
      currentMode = mode;
      if (mode === 'html') {
        modalIframe.src = 'assets/cv.html';
        if (toggleHtmlBtn) toggleHtmlBtn.classList.add('active');
        if (togglePdfBtn) togglePdfBtn.classList.remove('active');
      } else {
        modalIframe.src = 'assets/cv.pdf#toolbar=1&view=FitH';
        if (togglePdfBtn) togglePdfBtn.classList.add('active');
        if (toggleHtmlBtn) toggleHtmlBtn.classList.remove('active');
      }
    }

    function openModal(e) {
      if (e) e.preventDefault();
      // On mobile devices where inline PDF iframes often fail (e.g. Android Chrome), default to responsive Web view
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
      setMode(isMobile ? 'html' : 'pdf');
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      modal.classList.remove('active');
      modalIframe.src = '';
      document.body.style.overflow = '';
    }

    cvTriggers.forEach(trigger => {
      trigger.addEventListener('click', openModal);
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (backdrop) backdrop.addEventListener('click', closeModal);

    if (togglePdfBtn) {
      togglePdfBtn.addEventListener('click', (e) => {
        e.preventDefault();
        setMode('pdf');
      });
    }

    if (toggleHtmlBtn) {
      toggleHtmlBtn.addEventListener('click', (e) => {
        e.preventDefault();
        setMode('html');
      });
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });
  }

  // Expose / Bootstrap
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initSpotlight();
    initScrollReveal();
    initVideoPlayer();
    initCvModal();

    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', toggleTheme);
    }
  });

  window.portfolioTheme = {
    applyTheme,
    toggleTheme,
    getAutoTimeTheme
  };
})();
