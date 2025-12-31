// ========================================
// Theme Toggle
// ========================================

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = themeToggle?.querySelector('i');

// Load saved theme from localStorage
const savedTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

// Theme toggle event listener
themeToggle?.addEventListener('click', () => {
  const currentTheme = body.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
  if (!themeIcon) return;
  
  if (theme === 'dark') {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  } else {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
  }
}

// ========================================
// Smooth Scrolling
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    
    // Don't prevent default for empty hrefs
    if (href === '#' || !href) return;
    
    const target = document.querySelector(href);
    if (!target) return;
    
    e.preventDefault();
    
    const offsetTop = target.offsetTop - 70; // Account for fixed navbar
    
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
    
    // Close mobile menu if open
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse?.classList.contains('show')) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false
      });
      bsCollapse.hide();
    }
  });
});

// ========================================
// Active Navigation Highlighting
// ========================================

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

function highlightActiveSection() {
  const scrollPosition = window.scrollY + 100;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', highlightActiveSection);

// ========================================
// Animated Counters
// ========================================

const counters = document.querySelectorAll('.counter');
let countersAnimated = false;

function animateCounters() {
  if (countersAnimated) return;
  
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const step = target / (duration / 16); // 60fps
    let current = 0;
    
    const updateCounter = () => {
      current += step;
      
      if (current < target) {
        counter.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };
    
    updateCounter();
  });
  
  countersAnimated = true;
}

// ========================================
// Intersection Observer for Scroll Animations
// ========================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      
      // Trigger counter animation when stats section is visible
      if (entry.target.id === 'stats' && !countersAnimated) {
        animateCounters();
      }
    }
  });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('section, .project-card, .skill-category, .stat-card').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// ========================================
// Navbar Background on Scroll
// ========================================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar?.classList.add('scrolled');
  } else {
    navbar?.classList.remove('scrolled');
  }
});

// ========================================
// Copy Code to Clipboard (for project pages)
// ========================================

document.querySelectorAll('.code-block').forEach(block => {
  // Create copy button
  const copyButton = document.createElement('button');
  copyButton.className = 'copy-button';
  copyButton.innerHTML = '<i class="fas fa-copy"></i>';
  copyButton.setAttribute('aria-label', 'Copy code');
  
  block.style.position = 'relative';
  block.appendChild(copyButton);
  
  copyButton.addEventListener('click', async () => {
    const code = block.querySelector('code')?.textContent || block.textContent;
    
    try {
      await navigator.clipboard.writeText(code);
      copyButton.innerHTML = '<i class="fas fa-check"></i>';
      copyButton.style.color = '#10b981';
      
      setTimeout(() => {
        copyButton.innerHTML = '<i class="fas fa-copy"></i>';
        copyButton.style.color = '';
      }, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  });
});

// ========================================
// Mobile Menu Auto-Close on Outside Click
// ========================================

document.addEventListener('click', (e) => {
  const navbarCollapse = document.querySelector('.navbar-collapse');
  const navbarToggler = document.querySelector('.navbar-toggler');
  
  if (navbarCollapse?.classList.contains('show')) {
    if (!navbarCollapse.contains(e.target) && !navbarToggler?.contains(e.target)) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false
      });
      bsCollapse.hide();
    }
  }
});

// ========================================
// Form Validation (for contact page)
// ========================================

const contactForm = document.getElementById('contact-form');

contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get form data
  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData);
  
  // Basic validation
  if (!data.name || !data.email || !data.message) {
    alert('Please fill in all required fields.');
    return;
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    alert('Please enter a valid email address.');
    return;
  }
  
  // Submit form (this would normally send to a backend)
  console.log('Form submitted:', data);
  alert('Thank you for your message! I\'ll get back to you soon.');
  contactForm.reset();
});

// ========================================
// Initialize on Page Load
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  // Initial highlight
  highlightActiveSection();
  
  // Add smooth appearance to page elements
  document.body.classList.add('loaded');
  
  // Log console message
  console.log('%c👋 Welcome to my portfolio!', 'font-size: 20px; color: #2563eb; font-weight: bold;');
  console.log('%cInterested in the code? Check out the repo:', 'font-size: 14px; color: #10b981;');
  console.log('https://github.com/justin-mbca/portfolio');
});

// ========================================
// Performance: Lazy Loading Images
// ========================================

if ('loading' in HTMLImageElement.prototype) {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    img.src = img.dataset.src || img.src;
  });
} else {
  // Fallback for browsers that don't support lazy loading
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
  document.body.appendChild(script);
}

// ========================================
// Back to Top Button (optional enhancement)
// ========================================

const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTopButton.className = 'back-to-top';
backToTopButton.setAttribute('aria-label', 'Back to top');
backToTopButton.style.cssText = `
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--primary);
  color: white;
  border: none;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s, transform 0.3s;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.opacity = '1';
    backToTopButton.style.visibility = 'visible';
  } else {
    backToTopButton.style.opacity = '0';
    backToTopButton.style.visibility = 'hidden';
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

backToTopButton.addEventListener('mouseenter', () => {
  backToTopButton.style.transform = 'scale(1.1)';
});

backToTopButton.addEventListener('mouseleave', () => {
  backToTopButton.style.transform = 'scale(1)';
});
