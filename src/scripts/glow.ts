document.addEventListener('DOMContentLoaded', function () {
	if (
		!navigator.userAgent
			.toLowerCase()
			.match(/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i)
	) {
		const glow = document.getElementById('glow');

		if (glow) {
			document.addEventListener('mousemove', (event) => {
				const x = event.pageX;
				const y = event.pageY - window.scrollY;

				glow.style.setProperty('--glow-x', `${x}px`);
				glow.style.setProperty('--glow-y', `${y}px`);
			});
		}
	}
});
