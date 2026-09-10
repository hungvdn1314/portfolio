document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Language
  setLanguage(currentLang);
  const langToggleBtn = document.getElementById('lang-toggle');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      toggleLanguage();
    });
  }

  // 2. Navbar Scroll Style
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 3. Mobile Navigation Menu Toggle
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      mobileBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close when clicking link
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }

  // 4. Active Nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const navItem = document.querySelector(.nav-links a[href*=]);

      if (navItem) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navItem.classList.add('active');
        } else {
          navItem.classList.remove('active');
        }
      }
    });
  });

  // 5. Contact Form submission (mailto helper)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('sender-name').value;
      const email = document.getElementById('sender-email').value;
      const message = document.getElementById('sender-message').value;

      const subject = encodeURIComponent(Portfolio Inquiry from );
      const body = encodeURIComponent(Name: \nEmail: \n\nMessage:\n);

      window.location.href = mailto:dsc.hungvdn@gmail.com?subject=&body=;
    });
  }

  // 6. Discord ID Click to Copy
  const discordCopyBtn = document.getElementById('copy-discord-btn');
  if (discordCopyBtn) {
    discordCopyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('irrational_').then(() => {
        const originalText = discordCopyBtn.textContent;
        const copiedMsg = translations[currentLang]?.contact?.copied || 'Copied!';
        discordCopyBtn.textContent = copiedMsg;
        setTimeout(() => {
          discordCopyBtn.textContent = originalText;
        }, 2000);
      });
    });
  }
});
