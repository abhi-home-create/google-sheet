document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        try {
            const response = await fetch('/.netlify/functions/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            document.getElementById('contactForm').reset();
            document.getElementById('successMessage').classList.remove('hidden');
            setTimeout(() => {
                document.getElementById('successMessage').classList.add('hidden');
            }, 3000);
        } catch (error) {
            console.error('Error:', error);
        }
    });
});
