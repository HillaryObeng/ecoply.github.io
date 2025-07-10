<!-- Scroll-to-top Button -->
<button id="scrollTopBtn" onclick="window.scrollTo({ top: 0, behavior: 'smooth' })">Top</button>

<!-- Reveal Animations and Scroll Logic -->
<script>
    const blocks = document.querySelectorAll('.content-block');
    const topBtn = document.getElementById('scrollTopBtn');
    const backHomeBtn = document.getElementById('backHomeBtn');

    function revealOnScroll() {
        blocks.forEach(block => {
            const rect = block.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                block.classList.add('reveal');
            }
        });
    }

    window.addEventListener('scroll', () => {
        revealOnScroll();
        topBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
        // backHomeBtn stays visible at all times
        if (backHomeBtn) backHomeBtn.style.display = 'block';
    });

    window.addEventListener('load', () => {
        revealOnScroll();
        topBtn.style.display = 'none';
        if (backHomeBtn) backHomeBtn.style.display = 'block';
    });
</script>
 
