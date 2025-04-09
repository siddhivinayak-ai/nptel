// Sidebar toggle
document.getElementById("menu-button").addEventListener("click", () => {
  document.getElementById("side-nav").classList.add("active");
});

document.getElementById("close-menu-button").addEventListener("click", () => {
  document.getElementById("side-nav").classList.remove("active");
});

// Collapsibles
document.querySelectorAll('.collapsible-header').forEach(header => {
  header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      content.style.display = (content.style.display === 'block') ? 'none' : 'block';
  });
});

// Toggle Assessment section
document.getElementById("assessment-toggle").addEventListener("click", () => {
  const section = document.getElementById("assessment-details");
  section.style.display = (section.style.display === "block") ? "none" : "block";
});



document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.getElementById('menu-button');
  const closeMenuButton = document.getElementById('close-menu-button');
  const sideNav = document.getElementById('side-nav');
  const mainContent = document.querySelector('.main-content');
  const assessmentToggle = document.getElementById('assessment-toggle');
  const assessmentDetails = document.getElementById('assessment-details');
  const progressPercentage = 77.21; // Example percentage

  menuButton.addEventListener('click', function() {
      sideNav.classList.add('open');
      mainContent.classList.add('shifted'); // Optional: Shift main content
  });

  closeMenuButton.addEventListener('click', function() {
      sideNav.classList.remove('open');
      mainContent.classList.remove('shifted');
  });

  // Optional: Close side nav when clicking outside
  document.addEventListener('click', function(event) {
      if (sideNav.classList.contains('open') && !event.target.closest('.side-nav') && event.target !== menuButton) {
          sideNav.classList.remove('open');
          mainContent.classList.remove('shifted');
      }
  });

  assessmentToggle.addEventListener('click', function() {
      assessmentDetails.classList.toggle('open');
  });

  // Update Progress Circle
  const progressRingForeground = document.querySelector('.progress-ring__foreground');
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progressPercentage / 100) * circumference;
  progressRingForeground.style.strokeDasharray = circumference;
  progressRingForeground.style.strokeDashoffset = offset;
});