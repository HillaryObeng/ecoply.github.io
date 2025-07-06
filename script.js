const images = [
  "https://images.pexels.com/photos/7108701/pexels-photo-7108701.jpeg",
  "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
  "https://images.pexels.com/photos/1004682/pexels-photo-1004682.jpeg",
  "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
  "https://images.pexels.com/photos/3775121/pexels-photo-3775121.jpeg",
];

let current = 0;
const hero = document.querySelector(".hero");
const [bg1, bg2] = hero.querySelectorAll(".hero-bg");

bg1.style.backgroundImage = `url('${images[0]}')`;
bg2.style.backgroundImage = `url('${images[1]}')`;

setInterval(() => {
  current = (current + 1) % images.length;
  const nextIndex = (current + 1) % images.length;

  bg1.classList.toggle("current");
  bg2.classList.toggle("current");

  if (bg1.classList.contains("current")) {
    bg2.style.backgroundImage = `url('${images[nextIndex]}')`;
  } else {
    bg1.style.backgroundImage = `url('${images[nextIndex]}')`;
  }
}, 5000);
