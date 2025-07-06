<script>
  document.addEventListener('DOMContentLoaded', () => {
    const bg1 = document.querySelector('.hero-bg.current');
    const bg2 = document.querySelector('.hero-bg.next');

    const images = [
      'https://images.pexels.com/photos/7108701/pexels-photo-7108701.jpeg',
      'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg'
    ];

    let index = 0;

    function swapBackground() {
      index = (index + 1) % images.length;

      // Prepare next image
      bg2.style.backgroundImage = `url('${images[index]}')`;

      // Fade in next
      bg1.classList.remove('current');
      bg2.classList.add('current');

      // Swap roles
      [bg1.style.backgroundImage, bg2.style.backgroundImage] = [bg2.style.backgroundImage, bg1.style.backgroundImage];
      [bg1.className, bg2.className] = [bg2.className, bg1.className];
    }

    // Set initial image
    bg1.style.backgroundImage = `url('${images[index]}')`;
    bg2.style.backgroundImage = `url('${images[(index + 1) % images.length]}')`;

    setInterval(swapBackground, 5000); // every 5 seconds
  });
</script>
