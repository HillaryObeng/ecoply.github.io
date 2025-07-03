document.addEventListener('DOMContentLoaded', () => {
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    breakpoints: { 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } },
  });

  fetch('products.json')
    .then(res => res.json())
    .then(data => {
      const wrapper = document.querySelector('.swiper-wrapper');
      data.forEach(item => {
        const slide = document.createElement('div');
        slide.classList.add('swiper-slide');
        slide.innerHTML = `
          <div class="product-card">
            <img src="${item.image}" alt="${item.title}" />
            <h4>${item.title}</h4>
            <p class="price">${item.price}</p>
            <button>Add to Cart</button>
          </div>`;
        wrapper.appendChild(slide);
      });
      swiper.update();
    });
});