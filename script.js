const GOOGLE_SCRIPT_URL = '%%GOOGLE_SCRIPT_URL%%';

const form = document.getElementById('contact-form');
const statusMessage = document.getElementById('status-message');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Disable the submit button to prevent double submission
    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.disabled = true;

    try {
        // Create FormData object
        const formData = new FormData(form);
        
        // Convert FormData to searchParams
        const searchParams = new URLSearchParams();
        for (const [key, value] of formData) {
            searchParams.append(key, value);
        }

        // Create the request
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            redirect: 'follow',
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: searchParams.toString()
        });

        // Show success message
        statusMessage.textContent = 'Message sent successfully!';
        statusMessage.className = 'success';
        statusMessage.style.display = 'block';
        form.reset();

    } catch (error) {
        // Show error message
        statusMessage.textContent = 'Error sending message. Please try again.';
        statusMessage.className = 'error';
        statusMessage.style.display = 'block';
        console.error('Error:', error);
    } finally {
        // Re-enable the submit button
        submitButton.disabled = false;
        
        // Hide status message after 5 seconds
        setTimeout(() => {
            statusMessage.style.display = 'none';
        }, 5000);
    }
});
