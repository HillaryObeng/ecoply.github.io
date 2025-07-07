<script>
document.addEventListener("DOMContentLoaded", () => {
  // Hero slideshow logic
  const images = [
    "https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg",
    "https://images.pexels.com/photos/3861970/pexels-photo-3861970.jpeg",
    "https://images.pexels.com/photos/7108701/pexels-photo-7108701.jpeg",
    "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg",
    "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
    "https://images.pexels.com/photos/185576/pexels-photo-185576.jpeg",
    "https://images.pexels.com/photos/245240/pexels-photo-245240.jpeg",
    "https://images.pexels.com/photos/1004682/pexels-photo-1004682.jpeg",
    "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    "https://images.pexels.com/photos/3775121/pexels-photo-3775121.jpeg",
    "https://images.pexels.com/photos/843266/pexels-photo-843266.jpeg"
  ];

  let currentIndex = 0;
  const hero = document.querySelector(".hero");
  const [bg1, bg2] = hero.querySelectorAll(".hero-bg");

  bg1.style.backgroundImage = `url('${images[0]}')`;
  bg2.style.backgroundImage = `url('${images[1]}')`;

  bg1.classList.add("current");
  bg2.classList.remove("current");

  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    const nextIndex = (currentIndex + 1) % images.length;

    bg1.classList.toggle("current");
    bg2.classList.toggle("current");

    if (bg1.classList.contains("current")) {
      bg2.style.backgroundImage = `url('${images[nextIndex]}')`;
    } else {
      bg1.style.backgroundImage = `url('${images[nextIndex]}')`;
    }
  }, 5000);

  // Scroll pager logic for service cards
  function setupScrollPager(scrollEl, pagerEl) {
    const cards = scrollEl.querySelectorAll(".card");
    const dots = [];

    cards.forEach((card, i) => {
      const dot = document.createElement("div");
      dot.className = "dot";
      dot.addEventListener("click", () => {
        card.scrollIntoView({ behavior: "smooth", inline: "start" });
      });
      pagerEl.appendChild(dot);
      dots.push(dot);
    });

    function updateActiveDot() {
      let idx = 0;
      const scrollLeft = scrollEl.scrollLeft;
      cards.forEach((card, i) => {
        if (card.offsetLeft <= scrollLeft + 20) idx = i;
      });
      dots.forEach((dot) => dot.classList.remove("active"));
      dots[idx].classList.add("active");
    }

    scrollEl.addEventListener("scroll", () =>
      window.requestAnimationFrame(updateActiveDot)
    );
    updateActiveDot();
  }

  // Initialize the service cards pager
  const serviceCards = document.querySelector(".service-cards");
  const servicesPager = document.getElementById("services-pager");
  if (serviceCards && servicesPager) {
    setupScrollPager(serviceCards, servicesPager);
  }

  // Contact form and modal handling
  const form = document.getElementById("contact-form");
  const submitButton = form?.querySelector("button[type='submit']");
  const thankYouModal = document.getElementById("thankYouModal");

  if (form && submitButton && thankYouModal) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      submitButton.disabled = true;
      submitButton.textContent = "Sending...";

      emailjs.sendForm("service_z957ggi", "template_ke6fp2j", form).then(
        function (response) {
          console.log("✅ Email sent!", response.status, response.text);

          form.reset();
          submitButton.disabled = false;
          submitButton.textContent = "Submit Inquiry";

          thankYouModal.style.display = "block";
        },
        function (error) {
          console.error("❌ Email failed to send:", error);
          alert("Oops! Something went wrong. Please try again or contact us at info@ecoplyltd.com.");

          submitButton.disabled = false;
          submitButton.textContent = "Submit Inquiry";
        }
      );
    });

    window.closeModal = function () {
      thankYouModal.style.display = "none";
    };
  }

  // Cookie consent banner
  const cookieBanner = document.getElementById("cookieBanner");
  const acceptBtn = document.getElementById("acceptCookies");

  if (cookieBanner && acceptBtn) {
    if (!localStorage.getItem("cookiesAccepted")) {
      cookieBanner.style.display = "flex";
    }

    acceptBtn.addEventListener("click", () => {
      localStorage.setItem("cookiesAccepted", "true");
      cookieBanner.style.display = "none";
    });
  }
});
</script>
