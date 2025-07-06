document.addEventListener("DOMContentLoaded", () => {
  let bg1 = document.querySelector(".hero-bg.current");
  let bg2 = document.querySelector(".hero-bg.next");

  const images = [
    "https://images.pexels.com/photos/7108701/pexels-photo-7108701.jpeg",
    "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
    "https://images.pexels.com/photos/3183198/pexels-photo-3183198.jpeg",
    "https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg",
    "https://images.pexels.com/photos/3183171/pexels-photo-3183171.jpeg",
  ];

  let index = 0;

  // Initial backgrounds
  bg1.style.backgroundImage = `url('${images[0]}')`;
  bg2.style.backgroundImage = `url('${images[1]}')`;

  setInterval(() => {
    index = (index + 1) % images.length;

    // Swap visibility
    bg2.style.backgroundImage = `url('${images[index]}')`;
    bg2.classList.add("current");
    bg1.classList.remove("current");

    // Reassign roles
    [bg1, bg2] = [bg2, bg1];
  }, 5000);
});
