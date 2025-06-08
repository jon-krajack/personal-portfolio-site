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

// ===== FAQ Toggle Functionality ===== //

// Select all question button in the FAQ section //
const faqQuestions = document.querySelectorAll('.faq-question');

// Add click event listener to each question //
// Close all answers first //
faqQuestions.forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    const isVisible = answer.style.display === 'block';
    document.querySelectorAll('.faq-answer').forEach(ans => {
      ans.style.display = 'none';
    });

    // Toggle only if the answer was not already visible //
    if (!isVisible) {
      answer.style.display = 'block';
    }
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