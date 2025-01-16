// JavaScript to handle the toggle functionality
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// JavaScript to fade in functionality
window.addEventListener('load', () => {
    // Select all elements with the class 'fade-in'
    const fadeElements = document.querySelectorAll('.fade-in');

    // Add the 'visible' class to each element
    fadeElements.forEach(element => {
        element.classList.add('visible');
    });
});

// Typing effect function
function typeEffect(element, text, speed) {
    let index = 0;

    function typeChar() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(typeChar, speed);
        }
    }

    typeChar();
}

// Run the typing effect on page load
window.addEventListener('load', () => {
    const titleElement = document.querySelector('.typing');
    const titleText = "Hey, I'm Vienna Li"; // The text to type out
    const typingSpeed = 150; // Typing speed in milliseconds

    typeEffect(titleElement, titleText, typingSpeed);
});


// Light and dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Function to apply the theme
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme); // Update the data-theme attribute
  const navBar = document.querySelector('.navbar'); // Adjust the selector to match your navbar 


  if (theme === 'dark') {
    // Apply dark mode
      document.body.style.backgroundColor = '#121212';
      document.body.style.color = '#ffffff';

      document.documentElement.style.setProperty('--bullet-color', '#E2E2E2');
      document.documentElement.style.setProperty('--card-color', '#323232');
      document.documentElement.style.setProperty('--nav-color', '#ffffff');

      // Change navbar styles for night mode
      navBar.style.backgroundColor = '#323232';
      navBar.style.color = '#ffffff';

      themeIcon.classList.remove('fa-sun'); // Remove sun icon
      themeIcon.classList.add('fa-moon'); // Add moon icon
      themeIcon.style.color = '#ffffff'; // Change icon color for dark mode

      // Change bullet colors for night mode
      const bullets = document.querySelectorAll('.custom-bullet'); 
      bullets.forEach(bullet => {
        bullet.style.color = '#E2E2E2';   }); // Set color for night mode
      themeToggle.checked = true; // Ensure toggle stays in correct position
      
  } else {
    // Apply light mode

          document.body.style.backgroundColor = '#ffffff';
          document.body.style.color = '#000000';
          document.documentElement.style.setProperty('--bullet-color', '#555');
          document.documentElement.style.setProperty('--card-color', '#ffffff');
        document.documentElement.style.setProperty('--nav-color', '#000000');

          // Change navbar styles for day mode
          navBar.style.backgroundColor = '#ffffff';
          navBar.style.color = '#000000';
          // Change text color of navbar link
          
          themeIcon.classList.remove('fa-moon'); // Remove moon icon
          themeIcon.classList.add('fa-sun'); // Add sun icon
          themeIcon.style.color = '#000000'; // Change icon color for light mode
    
          // Change bullet colors for day mode
          const bullets = document.querySelectorAll('.custom-bullet'); // Target all custom bullets
          bullets.forEach(bullet => {
            bullet.style.color = '#555'; // Set color for day mode
          });

    themeToggle.checked = false; // Ensure toggle stays in correct position
  }
}

// // Event listener for theme toggle switch
// themeToggle.addEventListener('change', () => {
//   const theme = themeToggle.checked ? 'dark' : 'light';
//   localStorage.setItem('theme', theme); // Store the user's preference in localStorage
//   applyTheme(theme);
// });

// // On page load, check and apply the stored theme
// document.addEventListener('DOMContentLoaded', () => {
//   const savedTheme = localStorage.getItem('theme') || 'light'; // Default to light mode if no preference is stored
//   applyTheme(savedTheme);
// });

document.addEventListener('DOMContentLoaded', () => {

  // Load and apply the saved theme
  const savedTheme = localStorage.getItem('theme') || 'light';
  applyTheme(savedTheme);
  themeToggle.checked = savedTheme === 'dark';

  // Add event listener for the toggle
  themeToggle.addEventListener('change', () => {
    const newTheme = themeToggle.checked ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme); // Save the new theme
    applyTheme(newTheme);
  });
});