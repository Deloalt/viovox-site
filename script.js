const $ = (s) => document.querySelector(s);

$("#year").textContent = new Date().getFullYear();

$("#waitlistForm").addEventListener("submit", (e) => {
	e.preventDefault();
	const email = e.target.email.value.trim();
	const consent = e.target.consent.checked;
	if (!email || !consent) return;

	const list = JSON.parse(localStorage.getItem("viovox_waitlist") || "[]");
	list.push({ email, at: new Date().toISOString() });
	localStorage.setItem("viovox_waitlist", JSON.stringify(list));

	$("#waitlistMsg").textContent = "Thanks! You’re on the waitlist.";
	e.target.reset();
});

$("#contactForm").addEventListener("submit", (e) => {
	e.preventDefault();
	const payload = {
		email: e.target.email.value.trim(),
		message: e.target.message.value.trim(),
		at: new Date().toISOString(),
	};
	console.log("CONTACT_FORM_DEMO:", payload);
	$("#contactMsg").textContent = "Message saved (demo).";
	e.target.reset();
});
