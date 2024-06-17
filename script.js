document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth < 1280) {
        // Optionally handle behavior for smaller viewports
    }
});

document.addEventListener('copy', function(event) {
    event.preventDefault(); // Prevent default copy behavior
});

document.addEventListener('contextmenu', function(event) {
    event.preventDefault(); // Prevent default right-click behavior
});

document.addEventListener('DOMContentLoaded', function() {
    // Function to hide the loader and show the content once loaded
    function showContent() {
        var loaderContainer = document.querySelector('.loader-container');
        var body = document.querySelector('body');
        var header = document.querySelector('header');
        var main = document.querySelector('main');
        var footer = document.querySelector('footer');

        // Smoothly fade out the loader
        loaderContainer.style.opacity = '0';
        setTimeout(function() {
            loaderContainer.style.display = 'none'; // Hide the loader after fading out
            body.classList.add('loaded'); // Mark body as loaded to show content
        }, 500); // Adjust timing to match your CSS transition duration

        // Show the content
        header.style.opacity = '1';
        main.style.opacity = '1';
        footer.style.opacity = '1';

        // Restore scrolling after loader is hidden
        body.style.overflow = 'auto';
    }

    // Simulate a delay (e.g., fetching data or loading resources)
    setTimeout(showContent, 5000); // Loader will disappear after 5 seconds (5000 milliseconds)
});

// Highlight active section in navbar on scroll
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section[id], div[id]");
    const navLinks = document.querySelectorAll(".header-right a");

    function navHighlighter() {
        let scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 400;
            const sectionId = current.getAttribute("id");

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    if (link.getAttribute("href") === `#${sectionId}`) {
                        link.classList.add("active");
                    } else {
                        link.classList.remove("active");
                    }
                });
            }
        });
    }

    navHighlighter();

    window.addEventListener("scroll", navHighlighter);
});

// Form submission handling
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;

        if (!name || !email || !message) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill in all required fields!',
            });
        } else {
            // Simulating form submission (replace with actual form submission code)
            setTimeout(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Your message has been sent successfully.',
                });
                contactForm.reset();
            }, 1000);
        }
    });
});

// Smooth scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/hide scroll-to-top button based on scroll position
window.addEventListener('scroll', function() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    scrollToTopBtn.classList.toggle("show", window.scrollY > 20);
    scrollToTopBtn.classList.toggle("hide", window.scrollY <= 20);
});

// Typing animation initialization
document.addEventListener('DOMContentLoaded', function () {
    const typingText = document.getElementById('typing-text');
    const words = ['Web Designing', 'Back-end Development', 'Web development']; // Add more words as needed
    let wordIndex = 0;
    let charIndex = 0;
    let typingTimer;

    function type() {
        if (charIndex < words[wordIndex].length) {
            typingText.textContent += words[wordIndex].charAt(charIndex);
            charIndex++;
            typingTimer = setTimeout(type, 100); // Adjust typing speed (milliseconds)
        } else {
            setTimeout(erase, 1000); // Pause after typing
        }
    }

    function erase() {
        if (charIndex > 0) {
            typingText.textContent = words[wordIndex].substring(0, charIndex - 1);
            charIndex--;
            typingTimer = setTimeout(erase, 50); // Adjust erasing speed (milliseconds)
        } else {
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500); // Pause before typing next word
        }
    }

    type();
});

// Smooth scroll to section on navbar link click
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(function(navLink) {
        navLink.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = navLink.getAttribute("href").substring(1); // Get the target section id
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                const headerHeight = document.querySelector("header").offsetHeight;
                const sectionTop = targetSection.getBoundingClientRect().top + window.scrollY - headerHeight;

                window.scrollTo({
                    top: sectionTop,
                    behavior: "smooth"
                });
            }
        });
    });
});
