document.addEventListener("DOMContentLoaded", () => {
  setupCarousel(
    document.getElementById("products-scroll"),
    document.getElementById("products-pager")
  );
  setupCarousel(
    document.getElementById("testimonials-scroll"),
    document.getElementById("testimonials-pager")
  );

  // Hero background switch
  const hero = document.querySelector(".hero");
  const images = [
    "https://images.pexels.com/photos/7108701/pexels-photo-7108701.jpeg",
    "https://images.pexels.com/photos/1004682/pexels-photo-1004682.jpeg",
  ];
  let index = 0;
  setInterval(() => {
    index = (index + 1) % images.length;
    hero.style.backgroundImage = `url('${images[index]}')`;
  }, 2000);

  // Extra hero image fade-in
  setTimeout(() => {
    const img = document.createElement("img");
    img.src = "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg";
    img.alt = "Business Team";
    img.className = "extra-hero";
    document.querySelector(".hero-content").appendChild(img);
    setTimeout(() => img.classList.add("visible"), 50);
  }, 2000);
});
