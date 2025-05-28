document.addEventListener('DOMContentLoaded', () => {
  // Table toggle functionality
  const toggleButton = document.getElementById('toggleButton');
  const tableRows = document.querySelectorAll('tbody tr');

  let isExpanded = false;

  toggleButton.addEventListener('click', () => {
    isExpanded = !isExpanded;

    tableRows.forEach((row, index) => {
      if (index >= 5) {
        row.classList.toggle('hidden', !isExpanded);
      }
    });

    toggleButton.textContent = isExpanded ? 'Hide Table' : 'View Full Table';
  });

  // Modal functionality for Explore More button
  const modal = document.getElementById('premierLeagueModal');
  const exploreBtn = document.getElementById('exploreBtn');
  const closeBtn = document.querySelector('.close-btn');

  exploreBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });

  // Close modal when clicking outside of it
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
});

// Authentication modal functionality
document.addEventListener('DOMContentLoaded', () => {
  // Get modal elements
  const loginModal = document.getElementById('loginModal');
  const signupModal = document.getElementById('signupModal');
  const successModal = document.getElementById('successModal');
  
  // Get button elements
  const loginBtn = document.querySelector('.login-btn');
  const signupBtn = document.querySelector('.signup-btn');
  
  // Get close buttons
  const closeBtns = document.querySelectorAll('.auth-close-btn');
  const successCloseBtn = document.getElementById('successCloseBtn');
  
  // Get form elements
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  
  // Get toggle links
  const showSignup = document.getElementById('showSignup');
  const showLogin = document.getElementById('showLogin');

  // Open login modal
  loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  });
  
  // Open signup modal
  signupBtn.addEventListener('click', () => {
    signupModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  });
  
  // Close modals when clicking X
  closeBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      this.closest('.auth-modal').style.display = 'none';
      document.body.style.overflow = 'auto';
      clearFormErrors();
    });
  });
  
  // Close success modal
  successCloseBtn.addEventListener('click', () => {
    successModal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });
  
  // Close modals when clicking outside
  window.addEventListener('click', (event) => {
    if (event.target.classList.contains('auth-modal')) {
      event.target.style.display = 'none';
      document.body.style.overflow = 'auto';
      clearFormErrors();
    }
  });
  
  // Toggle between login and signup
  showSignup.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.style.display = 'none';
    signupModal.style.display = 'block';
    clearFormErrors();
  });
  
  showLogin.addEventListener('click', (e) => {
    e.preventDefault();
    signupModal.style.display = 'none';
    loginModal.style.display = 'block';
    clearFormErrors();
  });
  
  // Helper functions for validation
  function showError(elementId, message) {
    const element = document.getElementById(elementId);
    element.textContent = message;
    element.style.display = 'block';
  }
  
  function clearFormErrors() {
    document.querySelectorAll('.form-error').forEach(el => {
      el.textContent = '';
      el.style.display = 'none';
    });
  }
  
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  
  function showSuccess(title, message) {
    document.getElementById('successTitle').textContent = title;
    document.getElementById('successMessage').textContent = message;
    successModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
});

// Mobile Menu Enhancements
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu elements
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const navLinks = document.querySelector('.nav-links');
  const navbarWrapper = document.querySelector('.navbar-wrapper');

  if (mobileMenuButton && navLinks) {
    const toggleMenu = () => {
      navLinks.classList.toggle('show');
      mobileMenuButton.classList.toggle('active');
      document.body.classList.toggle('no-scroll');

      // Ensure menu width expands dynamically to avoid text truncation
      if (navLinks.classList.contains('show')) {
          navLinks.style.width = "auto"; // Expand width dynamically
          navLinks.style.maxHeight = navLinks.scrollHeight + "px"; // Ensure full height
      } else {
          navLinks.style.width = ""; // Reset width
          navLinks.style.maxHeight = "0px"; // Collapse height
      }
    };

    // Button click handler
    mobileMenuButton.addEventListener('click', function(event) {
      event.stopPropagation();
      toggleMenu();
    });

    // Close when clicking nav links
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
      item.addEventListener('click', toggleMenu);
    });

    // Close when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInside = event.target.closest('.navbar-wrapper') || 
                            event.target === mobileMenuButton;
      
      if (!isClickInside && navLinks.classList.contains('show')) {
        toggleMenu();
      }
    });
  }
});
