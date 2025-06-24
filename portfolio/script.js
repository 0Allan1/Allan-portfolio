document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav__link');

    // Toggle navigation visibility when hamburger icon is clicked
    navToggle.addEventListener('click', () => {
        nav.classList.toggle('nav--visible');
    });

    // Close navigation when a nav link is clicked (for smooth scrolling)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Only close if the nav is currently visible (for mobile)
            if (nav.classList.contains('nav--visible')) {
                nav.classList.remove('nav--visible');
            }
        });
    });

    // --- Optional: Form Validation Example (simple) ---
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) { // Check if the form exists on the page
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '') {
                alert('Please enter your name.');
                return;
            }
            if (email === '') {
                alert('Please enter your email.');
                return;
            }
            // Basic email format check
            if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            if (message === '') {
                alert('Please enter your message.');
                return;
            }

            // If all validations pass
            alert('Form submitted successfully! (This is a demo, no actual submission)');
            this.reset(); // Clear the form
            // In a real application, you would send this data to a server
        });
    }

});