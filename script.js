// Hero slideshow logic (already in place)
document.addEventListener("DOMContentLoaded", () => {
  const images = [
    // ... your 5 image URLs ...
  ];
  // ... your existing slideshow code ...

  // Scroll pager logic
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
});
