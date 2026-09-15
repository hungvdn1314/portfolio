/**
 * IrrationaL Portfolio - Main Application Scripts
 * - Scrollspy & Active Navigation
 * - Mobile Menu Controls
 * - Discord Quick-Copy with Floating Toast
 * - Navbar Scroll Elevation
 */

(function () {
  'use strict';

  // 1. Navbar Scroll Elevation
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  // 2. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      mobileMenuBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking outside or clicking a nav link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });

    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target) && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
      }
    });
  }

  // 3. Scrollspy with IntersectionObserver
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-link');

  if (sections.length && navItems.length) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navItems.forEach(link => {
            if (link.getAttribute('href') === `#${currentId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => sectionObserver.observe(section));
  }

  // 4. Quick-Copy Discord Tag with Toast Notification
  const copyDiscordBtn = document.getElementById('copy-discord-btn');

  function showToast(message) {
    let toast = document.getElementById('portfolio-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'portfolio-toast';
      toast.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background: var(--bg-surface-elevated, #151e30);
        color: #fff;
        padding: 0.85rem 1.4rem;
        border-radius: 8px;
        border: 1px solid var(--accent, #f59e0b);
        font-family: var(--font-mono, monospace);
        font-size: 0.88rem;
        font-weight: 600;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        z-index: 9999;
        display: flex;
        align-items: center;
        gap: 0.6rem;
        transform: translateY(100px);
        opacity: 0;
        transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease;
      `;
      document.body.appendChild(toast);
    }

    const currentLang = document.documentElement.getAttribute('lang') || 'en';
    const text = message || (currentLang === 'vi' ? 'Đã sao chép Discord ID (_irrational_)!' : 'Copied Discord ID (_irrational_) to clipboard!');

    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="color:var(--accent, #f59e0b);">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span>${text}</span>
    `;

    toast.style.transform = 'translateY(0)';
    toast.style.opacity = '1';

    setTimeout(() => {
      toast.style.transform = 'translateY(100px)';
      toast.style.opacity = '0';
    }, 2800);
  }

  if (copyDiscordBtn) {
    copyDiscordBtn.addEventListener('click', () => {
      const discordTag = '_irrational_';
      navigator.clipboard.writeText(discordTag).then(() => {
        showToast();
      }).catch(() => {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = discordTag;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast();
      });
    });
  }

})();
