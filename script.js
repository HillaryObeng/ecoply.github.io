<script>
  window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      const img = document.createElement('img');
      img.src = 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg';
      img.alt = 'Business Team';
      img.className = 'extra-hero';
      document.querySelector('.hero-content').appendChild(img);

      // trigger fade-in
      setTimeout(() => img.classList.add('visible'), 50);
    }, 2000);
  });
</script>
