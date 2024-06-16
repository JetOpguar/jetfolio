// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/hide the button based on scroll position
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.classList.add("show");
        scrollToTopBtn.classList.remove("hide");
    } else {
        scrollToTopBtn.classList.add("hide");
        scrollToTopBtn.classList.remove("show");
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const typingText = document.getElementById('typing-text');
    const prefixText = document.getElementById('prefix');
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

    // Initialize typing animation on page load
    type();
});
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);

    alert('Thank you for your message!');
    
    document.getElementById('contact-form').reset();
});
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(function(navLink) {
        navLink.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = navLink.getAttribute("href").substring(1); // Get the target section id
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                // Calculate the offset to account for header height and padding
                const headerHeight = document.querySelector("header").offsetHeight;
                const sectionTop = targetSection.getBoundingClientRect().top + window.scrollY - headerHeight;

                // Scroll to the adjusted position
                window.scrollTo({
                    top: sectionTop,
                    behavior: "smooth"
                });
            }
        });
    });
});


