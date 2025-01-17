document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('entry.2005620554', document.getElementById('name').value);
    formData.append('entry.1045781291', document.getElementById('email').value);
    formData.append('entry.839337160', document.getElementById('message').value);
    
    fetch('https://docs.google.com/forms/d/e/1FAIpQLSc4ovtdhnknm9SLgXfkPvTeImrv4jrLlR02DXX09naToRaoxA/formResponse', {
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
