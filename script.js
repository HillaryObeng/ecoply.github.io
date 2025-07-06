<script>
document.addEventListener('DOMContentLoaded', () => {
	const hero = document.querySelector('.hero');
	const images = [
		'https://images.pexels.com/photos/7108701/pexels-photo-7108701.jpeg',
		'https://images.pexels.com/photos/1004682/pexels-photo-1004682.jpeg',
		'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg'
	];

	let index = 0;
	setInterval(() => {
		index = (index + 1) % images.length;
		hero.style.backgroundImage = `url('${images[index]}')`;
	}, 2000);
});
</script>
