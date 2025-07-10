document.addEventListener("DOMContentLoaded", () => {
  const blocks = document.querySelectorAll(".content-block");
  const topBtn = document.getElementById("scrollTopBtn");
  const backHomeBtn = document.getElementById("backHomeBtn");

  function revealOnScroll() {
    blocks.forEach((block) => {
      const rect = block.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        block.classList.add("reveal");
      }
    });
  }

  function handleScroll() {
    revealOnScroll();
    topBtn.style.display = window.scrollY > 200 ? "block" : "none";
    backHomeBtn.style.display = "block"; // Always visible
  }

  window.addEventListener("scroll", handleScroll);

  window.addEventListener("load", () => {
    revealOnScroll();
    topBtn.style.display = "none";
    backHomeBtn.style.display = "block";
  });
});
