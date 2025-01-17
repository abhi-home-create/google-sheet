// Get the Google Apps Script URL from a global variable that will be replaced during build
const GOOGLE_SCRIPT_URL = '%%GOOGLE_SCRIPT_URL%%';

const form = document.getElementById('contact-form');
const statusMessage = document.getElementById('status-message');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    try {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        // Show success message
        statusMessage.textContent = 'Message sent successfully!';
        statusMessage.className = 'success';
        statusMessage.style.display = 'block';
        form.reset();

        // Hide status message after 5 seconds
        setTimeout(() => {
            statusMessage.style.display = 'none';
        }, 5000);

    } catch (error) {
        // Show error message
        statusMessage.textContent = 'Error sending message. Please try again.';
        statusMessage.className = 'error';
        statusMessage.style.display = 'block';
        console.error('Error:', error);
    }
});
