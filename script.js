<script>
document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero');
  const bgCurrent = hero.querySelector('.hero-bg.current');
  const bgNext = hero.querySelector('.hero-bg.next');

  const images = [
    'https://images.pexels.com/photos/7108701/pexels-photo-7108701.jpeg',
    'https://images.pexels.com/photos/1004682/pexels-photo-1004682.jpeg',
    'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg'
  ];
  let idx = 0;

  // Initialize backgrounds
  bgCurrent.style.backgroundImage = `url('${images[0]}')`;
  bgNext.style.backgroundImage = `url('${images[1]}')`;

  setInterval(() => {
    idx = (idx + 1) % images.length;
    // swap div roles
    bgNext.style.backgroundImage = `url('${images[(idx + 1) % images.length]}')`;
    bgCurrent.classList.remove('current');
    bgNext.classList.add('current');

    // rotate roles:
    [bgCurrent.className, bgNext.className] = [bgNext.className, bgCurrent.className];
    [bgCurrent, bgNext] = [bgNext, bgCurrent];
  }, 2000);
});
</script>
