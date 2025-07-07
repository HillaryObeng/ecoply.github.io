document.addEventListener("DOMContentLoaded", () => {
  // Hero slideshow logic
  const images = [
    "https://images.pexels.com/photos/7108701/pexels-photo-7108701.jpeg",
    "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
    "https://images.pexels.com/photos/1004682/pexels-photo-1004682.jpeg",
    "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    "https://images.pexels.com/photos/3775121/pexels-photo-3775121.jpeg",
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
  setupScrollPager(
    document.querySelector(".service-cards"),
    document.getElementById("services-pager")
  );

  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_hoce1lf", "template_w439id9", this).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        document.getElementById("success-msg").style.display = "block";
      },
      function (error) {
        console.log("FAILED...", error);
        alert("Something went wrong. Please try again IN GHANA.");
      }
    );
  });
});
