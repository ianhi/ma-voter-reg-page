// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        const isExpanded = mainNav.classList.contains('active');
        mainNav.classList.toggle('active');

        // Update ARIA attributes for accessibility
        menuToggle.setAttribute('aria-expanded', !isExpanded);

        // Animate hamburger icon
        const spans = menuToggle.querySelectorAll('span');
        if (!isExpanded) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Handle keyboard navigation for menu
    menuToggle.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// Language selector
const langButtons = document.querySelectorAll('.lang-btn');
langButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update ARIA states for all language buttons
        langButtons.forEach(btn => {
            btn.classList.remove('active');
            btn.setAttribute('aria-pressed', 'false');
        });
        button.classList.add('active');
        button.setAttribute('aria-pressed', 'true');
        // In a real implementation, this would trigger language change
        console.log('Language changed to:', button.textContent);
    });
});

// Form validation and submission
const form = document.getElementById('voter-search-form');

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const birthDate = document.getElementById('birth-date').value;
        const zipCode = document.getElementById('zip-code').value;
        const agreement = document.getElementById('agreement').checked;

        // In a real implementation, this would validate and submit to the actual MA voter registration API
        // For this mockup, we skip validation and just scroll to demo links
        console.log('Form submitted with:', {
            firstName,
            lastName,
            birthDate,
            zipCode,
            agreement
        });

        // For demo purposes, scroll to the demo links section
        const demoSection = document.querySelector('.demo-links-section');
        if (demoSection) {
            demoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

            // Add a brief highlight animation to draw attention
            demoSection.style.animation = 'highlight-pulse 1.5s ease-in-out';
            setTimeout(() => {
                demoSection.style.animation = '';
            }, 1500);
        }
    });

    // Clear form
    const clearButton = form.querySelector('button[type="reset"]');
    if (clearButton) {
        clearButton.addEventListener('click', () => {
            // Uncheck the agreement checkbox (reset doesn't always clear checkboxes in all browsers)
            document.getElementById('agreement').checked = false;
        });
    }
}

// Zip code input validation
const zipInput = document.getElementById('zip-code');
if (zipInput) {
    zipInput.addEventListener('input', (e) => {
        // Only allow numbers
        e.target.value = e.target.value.replace(/[^0-9]/g, '');

        // Limit to 5 digits
        if (e.target.value.length > 5) {
            e.target.value = e.target.value.slice(0, 5);
        }
    });
}

// Smooth scroll for navigation links (optional enhancement)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (mainNav && mainNav.classList.contains('active')) {
        if (!mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
            mainNav.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    }
});

// Keyboard accessibility: Close menu on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mainNav && mainNav.classList.contains('active')) {
        mainNav.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
        menuToggle.focus(); // Return focus to menu button
    }
});
