document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('entry.123', document.getElementById('name').value);
    formData.append('entry.456', document.getElementById('email').value);
    formData.append('entry.789', document.getElementById('message').value);
    
    fetch('YOUR_GOOGLE_FORM_URL', {
        method: 'POST',
        mode: 'no-cors',
        body: formData
    })
    .then(() => {
        document.getElementById('contactForm').reset();
        document.getElementById('successMessage').classList.remove('hidden');
        setTimeout(() => {
            document.getElementById('successMessage').classList.add('hidden');
        }, 3000);
    });
});
