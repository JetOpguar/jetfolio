window.onload = function() {
    // Calculate the horizontal scroll position to center the content
    var viewportWidth = window.innerWidth; // Viewport width
    var contentWidth = document.body.scrollWidth; // Total content width

    var scrollX = (contentWidth - viewportWidth) / 2; // Calculate center position

    // Use window.scroll to set the scroll position
    window.scroll(scrollX, 0); // Scroll horizontally to the calculated position
};


document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');

    function checkScroll() {
        const scrollY = window.scrollY || window.pageYOffset;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            // Calculate the bottom of the section
            const sectionBottom = sectionTop + sectionHeight;

            // Determine if the section is in the viewport vertically
            const isVisible = scrollY > sectionTop - window.innerHeight + sectionHeight / 3.4 &&
                              scrollY < sectionBottom - sectionHeight / 2.4;

            if (index === 0) {
                // Special handling for the first section
                if (scrollY < sectionBottom - sectionHeight / 2.4) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            } else {
                // For other sections
                if (isVisible) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            }
        });
    }

    // Function to scroll to the first section
    function scrollToFirstSection() {
        const firstSection = sections[0];
        if (firstSection) {
            const sectionTop = firstSection.offsetTop;
            window.scrollTo({
                top: sectionTop,
                behavior: 'smooth' // Optional: smooth scrolling
            });
        }
    }

    // Initial scroll to the first section
    scrollToFirstSection();

    window.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);

    // Check on page load after scrolling
    window.addEventListener('scroll', function onFirstScroll() {
        window.removeEventListener('scroll', onFirstScroll);
        checkScroll();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');

    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
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

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Stop the browser's default form submission

        let name = document.getElementById('name').value.trim();
        let email = document.getElementById('email').value.trim();
        let message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill in all required fields!',
            });
            return;
        }

        // Create FormData and send with fetch to Formspree
        const formData = new FormData(contactForm);

        fetch('https://formspree.io/f/mvgrkkao', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Your message has been sent successfully.',
                });
                contactForm.reset();
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'There was a problem submitting the form.',
                });
            }
        })
        .catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Something went wrong. Please try again later.',
            });
        });
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
    const words = ['Web Designing', 'Front-End Development', 'Digital Marketing', 'Visual Editor']; // Add more words as needed
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

document.addEventListener("keydown", function(event) {
    // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
    if (
        event.key === "F12" || 
        (event.ctrlKey && event.shiftKey && (event.key === "I" || event.key === "J")) || 
        (event.ctrlKey && event.key === "U")
    ) {
        event.preventDefault();
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll("a.scroll");

    navLinks.forEach(function(navLink) {
        navLink.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = navLink.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const headerHeight = document.querySelector("header")?.offsetHeight || 0;
                const sectionTop = targetSection.getBoundingClientRect().top + window.scrollY - headerHeight;

                window.scrollTo({
                    top: sectionTop,
                    behavior: "smooth"
                });
            }
        });
    });
});
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

