// JavaScript for interactive elements and animations
document.addEventListener("DOMContentLoaded", function () {
  // Header scroll effect
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Background slideshow functionality
  const backgrounds = document.querySelectorAll(".background-slide");
  let currentIndex = 0;

  function showNextBackground() {
    // Remove active class from current background
    backgrounds[currentIndex].classList.remove("active");

    // Move to next background
    currentIndex = (currentIndex + 1) % backgrounds.length;

    // Add active class to new background
    backgrounds[currentIndex].classList.add("active");
  }

  // Change background every 4 seconds
  setInterval(showNextBackground, 4000);

  // Smooth scrolling for navigation links
  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Form submission handlers
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for your message! Our team will contact you shortly.");
    this.reset();
  });

  document.getElementById("testDriveForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert(
      "Test drive scheduled successfully! We will confirm your appointment via email."
    );
    closeModal("testDriveModal");
    this.reset();
  });

  // Add random sparkles dynamically
  function createRandomSparkle() {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.style.left = Math.random() * 100 + "%";
    sparkle.style.top = Math.random() * 100 + "%";
    sparkle.style.animationDelay = Math.random() * 5 + "s";
    document.querySelector(".floating-shapes").appendChild(sparkle);

    // Remove sparkle after animation completes
    setTimeout(() => {
      sparkle.remove();
    }, 3000);
  }

  // Create new sparkles periodically
  setInterval(createRandomSparkle, 500);

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe elements for animation
  document
    .querySelectorAll(
      ".feature-card, .car-card, .testimonial-card, .brand-card, .contact-item, .contact-form"
    )
    .forEach((el) => {
      observer.observe(el);
    });
});

// Modal functions
function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

// Close modal when clicking outside
window.onclick = function (event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
};
