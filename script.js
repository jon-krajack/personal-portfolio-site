// ==========================
// === Mobile Menu Toggle ===
// ==========================

// ===== Select the hamburger menu button by its ID =====
const menuBtn = document.querySelector('.menu-btn');

// ===== Select the navigation links container =====
const navLinks = document.querySelector('.nav-links');

// ===== Listen for clicks on the hamburger button =====
// ===== Toggle the 'show' class on the nav links when clicked =====
menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
})

// TO CLOSE THE MOBILE NAV LINKS AFTER SELECTIONS

// ===== Select all links inside the nav menu =====
const navItems = document.querySelectorAll('.nav-links a');

// ===== For each link, add a click listener =====
// ===== When a link is clicked, hide the nav menu =====
navItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});


// ===== LIGHT/DARK MODE TOGGLE =====

// Select the toggle button
const themeToggle = document.querySelector('.theme-toggle');

// When the button is clicked...
// Toggle the 'dark-mode' class on the <body>
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

// Switch the icon between moon and sun
  if (document.body.classList.contains('dark-mode')) {
    themeToggle.textContent = '☀️';
  } else {
    themeToggle.textContent = '🌙';
  }
});