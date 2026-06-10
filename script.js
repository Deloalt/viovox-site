/**
 * Viovox landing — lightweight interactions (no external libs)
 * - Scroll reveal via IntersectionObserver
 * - Sticky header state on scroll
 * - Active nav section highlighting
 * - Brand link hash cleanup
 */

(function () {
	'use strict';

	const TALLY_URL = 'https://tally.so/r/jazje1?source=website';

	/** @returns {boolean} */
	function prefersReducedMotion() {
		return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	}

	/**
	 * Fade/slide elements into view on scroll.
	 * Elements with `.reveal` or `.reveal-stagger` get `.is-visible` when intersecting.
	 */
	function initScrollReveal() {
		const targets = document.querySelectorAll('.reveal, .reveal-stagger');
		if (!targets.length) return;

		if (prefersReducedMotion()) {
			targets.forEach((el) => el.classList.add('is-visible'));
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (!entry.isIntersecting) return;
					entry.target.classList.add('is-visible');
					observer.unobserve(entry.target);
				});
			},
			{
				root: null,
				rootMargin: '0px 0px -6% 0px',
				threshold: 0.12,
			}
		);

		targets.forEach((el) => observer.observe(el));
	}

	/** Add elevated style to header after scrolling past hero. */
	function initTopbarScroll() {
		const topbar = document.getElementById('topbar');
		if (!topbar) return;

		let ticking = false;

		const update = () => {
			topbar.classList.toggle('is-scrolled', window.scrollY > 12);
			ticking = false;
		};

		const onScroll = () => {
			if (ticking) return;
			ticking = true;
			requestAnimationFrame(update);
		};

		update();
		window.addEventListener('scroll', onScroll, { passive: true });
	}

	/** Highlight the nav link matching the section in view. */
	function initNavSpy() {
		const navLinks = document.querySelectorAll('.navLinks a[href^="#"]');
		const sections = [...navLinks]
			.map((link) => {
				const id = link.getAttribute('href')?.slice(1);
				const section = id ? document.getElementById(id) : null;
				return section ? { link, section } : null;
			})
			.filter(Boolean);

		if (!sections.length) return;

		const setActive = (id) => {
			navLinks.forEach((link) => {
				const match = link.getAttribute('href') === `#${id}`;
				link.classList.toggle('is-active', match);
				if (match) {
					link.setAttribute('aria-current', 'true');
				} else {
					link.removeAttribute('aria-current');
				}
			});
		};

		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((e) => e.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio);

				if (visible[0]) {
					setActive(visible[0].target.id);
				}
			},
			{
				root: null,
				rootMargin: '-35% 0px -55% 0px',
				threshold: [0, 0.15, 0.35, 0.55],
			}
		);

		sections.forEach(({ section }) => observer.observe(section));
	}

	/** Smooth in-page anchor navigation with header offset. */
	function initSmoothAnchors() {
		const header = document.getElementById('topbar');
		const headerOffset = () => (header ? header.offsetHeight + 8 : 72);

		document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
			anchor.addEventListener('click', (e) => {
				const href = anchor.getAttribute('href');
				if (!href || href === '#') return;

				const target = document.querySelector(href);
				if (!target) return;

				e.preventDefault();
				const top = target.getBoundingClientRect().top + window.scrollY - headerOffset();
				window.scrollTo({
					top,
					behavior: prefersReducedMotion() ? 'auto' : 'smooth',
				});

				history.pushState(null, '', href);
			});
		});
	}

	/** Prevent extra hash history when clicking brand while already at top. */
	function initBrandLink() {
		const brand = document.querySelector('.brand');
		if (!brand) return;

		brand.addEventListener('click', (e) => {
			if (!window.location.hash) return;
			e.preventDefault();
			window.scrollTo({
				top: 0,
				behavior: prefersReducedMotion() ? 'auto' : 'smooth',
			});
			history.replaceState(null, '', window.location.pathname);
		});
	}

	/** Sanity check: primary CTAs must point to Tally waitlist. */
	function verifyWaitlistLinks() {
		document.querySelectorAll('.btnPrimary').forEach((btn) => {
			const href = btn.getAttribute('href');
			if (href && !href.startsWith(TALLY_URL.split('?')[0])) {
				console.warn('Unexpected primary CTA href:', href);
			}
		});
	}

	document.addEventListener('DOMContentLoaded', () => {
		initScrollReveal();
		initTopbarScroll();
		initNavSpy();
		initSmoothAnchors();
		initBrandLink();
		verifyWaitlistLinks();
	});
})();
