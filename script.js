// Viovox app-like landing
// No tracking by default. Reserved for future enhancements.

// Optional: close hash in URL when clicking brand
document.addEventListener('DOMContentLoaded', () => {
	const brand = document.querySelector('.brand');
	if (brand) {
		brand.addEventListener('click', (e) => {
			// Keep it a normal link, but prevent adding extra history entries
			if (window.location.hash) {
				e.preventDefault();
				window.scrollTo({ top: 0, behavior: 'smooth' });
				history.replaceState(null, '', window.location.pathname);
			}
		});
	}
});
