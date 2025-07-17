// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenu && navLinks) {
    mobileMenu.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize EmailJS (replace 'YOUR_PUBLIC_KEY' with your actual public key)
emailjs.init('ZC9z_c5FUZFHl8mC8'); //done

// Connect contact form to EmailJS
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Replace with your EmailJS service ID and template ID
            emailjs.sendForm('service_utgzy4v', 'template_f81datb', this)
                .then(function() {
                    alert('Message sent successfully!');
                    contactForm.reset();
                }, function(error) {
                    alert('Failed to send message. Please try again.');
                });
        });
    }
});

// Image modal functions
function openModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    if (modal && modalImage) {
        modal.style.display = 'block';
        modalImage.src = imageSrc;
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside the image
const imageModal = document.getElementById('imageModal');
if (imageModal) {
    imageModal.addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });
}

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Animate service cards, gallery items, stat items, and partner logos on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .gallery-item, .stat-item, .partner-logo').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    observer.observe(card);
});

// Add CSS animation for observed elements if not already present
if (!document.getElementById('fadeInUp-style')) {
    const style = document.createElement('style');
    style.id = 'fadeInUp-style';
    style.textContent = `
        @keyframes fadeInUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// Parallax effect for hero background
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});
