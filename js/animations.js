/**
 * IrrationaL Portfolio - Animations & Theme Engine
 * - Cursor-following ambient spotlight
 * - Scroll-driven reveal observers (respects prefers-reduced-motion)
 * - Accent color switcher (Amber <-> Cyan/Blue) with persistent localStorage
 * - YouTube trailer video modal / embed toggle
 */

(function () {
  'use strict';

  // 1. Accent Theme Switcher (Amber <-> Cyan)
  const THEME_STORAGE_KEY = 'irrational-accent-theme';
  const htmlEl = document.documentElement;

  function initTheme() {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) || 'amber';
    applyTheme(savedTheme);
  }

  function applyTheme(theme) {
    htmlEl.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
    
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    if (themeToggleBtn) {
      const themeLabel = themeToggleBtn.querySelector('.theme-label');
      if (themeLabel) {
        themeLabel.textContent = theme === 'amber' ? 'Amber Accent' : 'Cyan Accent';
      }
      const indicator = themeToggleBtn.querySelector('.theme-color-indicator');
      if (indicator) {
        indicator.style.backgroundColor = theme === 'amber' ? '#f59e0b' : '#38bdf8';
        indicator.style.boxShadow = theme === 'amber' ? '0 0 8px rgba(245, 158, 11, 0.6)' : '0 0 8px rgba(56, 189, 248, 0.6)';
      }
    }
  }

  function toggleTheme() {
    const currentTheme = htmlEl.getAttribute('data-theme') || 'amber';
    const newTheme = currentTheme === 'amber' ? 'cyan' : 'amber';
    applyTheme(newTheme);
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
    const modal = document.getElementById('video-modal');
    const modalIframe = document.getElementById('video-modal-iframe');
    const closeBtn = document.getElementById('video-modal-close');
    const backdrop = document.getElementById('video-modal-backdrop');

    if (!playBtn || !modal || !modalIframe) return;

    const ytVideoId = 'yUVrC2nc6fQ';

    function openModal() {
      modalIframe.src = `https://www.youtube-nocookie.com/embed/${ytVideoId}?autoplay=1&rel=0&modestbranding=1`;
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      modal.classList.remove('active');
      modalIframe.src = '';
      document.body.style.overflow = '';
    }

    playBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (backdrop) backdrop.addEventListener('click', closeModal);

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });
  }

  // 5. Early Milestones Collapsible Toggle (Hybrid Experience)
  function initMilestonesToggle() {
    const toggleBtn = document.getElementById('toggle-early-milestones');
    const earlyContainer = document.getElementById('early-milestones-container');
    if (!toggleBtn || !earlyContainer) return;

    toggleBtn.addEventListener('click', () => {
      const isExpanded = earlyContainer.classList.toggle('expanded');
      const textSpan = toggleBtn.querySelector('.toggle-text');
      const iconSvg = toggleBtn.querySelector('svg');

      if (textSpan) {
        const lang = htmlEl.getAttribute('lang') || 'en';
        if (isExpanded) {
          textSpan.textContent = lang === 'vi' ? 'Ẩn các mốc khởi đầu & học vấn' : 'Hide Academic & Early Milestones';
        } else {
          textSpan.textContent = lang === 'vi' ? 'Xem các mốc học vấn & khởi đầu (2015 — 2021)' : 'View Academic & Early Milestones (2015 — 2021)';
        }
      }

      if (iconSvg) {
        iconSvg.style.transform = isExpanded ? 'rotate(180deg)' : 'rotate(0deg)';
      }
    });
  }

  // Expose / Bootstrap
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initSpotlight();
    initScrollReveal();
    initVideoPlayer();
    initMilestonesToggle();

    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', toggleTheme);
    }
  });

  window.portfolioTheme = {
    applyTheme,
    toggleTheme
  };
})();
