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

    // Show/hide "Top" button
    if (window.scrollY > 200) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }

    // Show/hide "Back to Homepage" button only at the top
    if (window.scrollY === 0) {
      backHomeBtn.style.display = "block";
    } else {
      backHomeBtn.style.display = "none";
    }
  }

  window.addEventListener("scroll", handleScroll);

  window.addEventListener("load", () => {
    revealOnScroll();

    topBtn.style.display = "none"; // hidden on load
    backHomeBtn.style.display = "block"; // visible at top
  });
});
