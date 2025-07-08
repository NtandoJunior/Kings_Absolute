// Animate service cards on scroll
const cards = document.querySelectorAll(".card");

function checkCards() {
  const trigger = window.innerHeight * 0.85;
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < trigger) {
      card.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", checkCards);
window.addEventListener("load", checkCards);

// Animate gallery images on scroll
const projectItems = document.querySelectorAll(".project-item");

function checkProjects() {
  const trigger = window.innerHeight * 0.85;
  projectItems.forEach(item => {
    const top = item.getBoundingClientRect().top;
    if (top < trigger) {
      item.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", checkProjects);
window.addEventListener("load", checkProjects);

// Smooth scroll for nav links
document.querySelectorAll("a.nav-link").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Handle service selection + form
document.querySelectorAll('.service-btn').forEach(button => {
  button.addEventListener('click', () => {
    const service = button.dataset.service;
    const messageDiv = document.getElementById('service-message');
    const form = document.getElementById('service-form');
    const serviceSpan = document.getElementById('selected-service');

    messageDiv.textContent = `Thank you for choosing ${service}! Please fill out the form below and we’ll get in touch with you shortly.`;

    serviceSpan.textContent = service;
    form.classList.remove('hidden');
  });
});

// Handle form submit
document.getElementById('service-form').addEventListener('submit', e => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const details = document.getElementById('details').value;
  const service = document.getElementById('selected-service').textContent;

  alert(`Thank you, ${name}!\n\nWe've received your request for ${service}.\nWe'll contact you at ${email} soon.`);

  // Reset form
  document.getElementById('service-form').reset();
  document.getElementById('service-form').classList.add('hidden');
  document.getElementById('service-message').textContent = '';
});

document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.project-slide');
  const prevBtn = document.getElementById('prevSlide');
  const nextBtn = document.getElementById('nextSlide');
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === slides.length - 1;
  }

  prevBtn.addEventListener('click', () => {
    if (current > 0) {
      current--;
      showSlide(current);
    }
  });

  nextBtn.addEventListener('click', () => {
    if (current < slides.length - 1) {
      current++;
      showSlide(current);
    }
  });

  showSlide(current);
});
