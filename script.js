/**
 * VioVox Landing Page - JavaScript
 * Handles waitlist form submissions and localStorage management
 */

// Constants
const STORAGE_KEY = 'viovox_waitlist_emails';

/**
 * Initialize the application
 */
document.addEventListener('DOMContentLoaded', () => {
    initializeWaitlistForms();
    loadStoredEmails();
});

/**
 * Initialize all waitlist forms with event listeners
 */
function initializeWaitlistForms() {
    const heroForm = document.getElementById('waitlistFormHero');
    const contactForm = document.getElementById('waitlistFormContact');

    if (heroForm) {
        heroForm.addEventListener('submit', (e) => handleFormSubmit(e, 'hero'));
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => handleFormSubmit(e, 'contact'));
    }
}

/**
 * Handle form submission for both hero and contact forms
 * @param {Event} e - The form submission event
 * @param {string} formType - Identifier for which form submitted ('hero' or 'contact')
 */
function handleFormSubmit(e, formType) {
    e.preventDefault();

    const emailInput = document.getElementById(`email${formType.charAt(0).toUpperCase() + formType.slice(1)}`);
    const consentCheckbox = document.getElementById(`consent${formType.charAt(0).toUpperCase() + formType.slice(1)}`);
    const messageDiv = document.getElementById(`formMessage${formType.charAt(0).toUpperCase() + formType.slice(1)}`);
    const submitButton = e.target.querySelector('button[type="submit"]');

    const email = emailInput.value.trim();

    // Basic validation
    if (!email) {
        showMessage(messageDiv, 'Please enter your email.', 'error');
        return;
    }

    if (!isValidEmail(email)) {
        showMessage(messageDiv, 'Please enter a valid email.', 'error');
        return;
    }

    if (!consentCheckbox.checked) {
        showMessage(messageDiv, 'Please agree to receive updates.', 'error');
        return;
    }

    // Store email and show success
    storeEmail(email);
    showMessage(messageDiv, '✓ Thanks! Check your email for updates.', 'success');

    // Reset form
    e.target.reset();

    // Disable button briefly for UX feedback
    const originalText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = 'Joined!';
    setTimeout(() => {
        submitButton.disabled = false;
        submitButton.textContent = originalText;
    }, 2000);
}

/**
 * Validate email format using regex
 * @param {string} email - Email to validate
 * @returns {boolean} - True if valid, false otherwise
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Store email in localStorage (avoid duplicates)
 * @param {string} email - Email to store
 */
function storeEmail(email) {
    let emails = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    
    // Avoid duplicate emails
    if (!emails.includes(email.toLowerCase())) {
        emails.push(email.toLowerCase());
        localStorage.setItem(STORAGE_KEY, JSON.stringify(emails));
    }
}

/**
 * Load and display stored emails (useful for debugging in console)
 */
function loadStoredEmails() {
    const emails = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    console.log(`${emails.length} email(s) stored in waitlist:`, emails);
}

/**
 * Display success or error message in form
 * @param {HTMLElement} messageDiv - The message display element
 * @param {string} message - Message text to display
 * @param {string} type - Message type ('success' or 'error')
 */
function showMessage(messageDiv, message, type) {
    messageDiv.textContent = message;
    messageDiv.className = `form-message ${type}`;

    // Auto-clear error messages after 5 seconds
    if (type === 'error') {
        setTimeout(() => {
            messageDiv.textContent = '';
            messageDiv.className = 'form-message';
        }, 5000);
    }
}

/**
 * Smooth scroll helper (CSS handles scroll-behavior: smooth in most cases)
 * This is a fallback for older browsers if needed
 */
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}