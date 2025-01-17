document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Create the form URL with parameters
    const formUrl = `https://docs.google.com/forms/d/e/1FAIpQLSc4ovtdhnknm9SLgXfkPvTeImrv4jrLlR02DXX09naToRaoxA/formResponse?usp=pp_url&entry.2005620554=${encodeURIComponent(name)}&entry.1045781291=${encodeURIComponent(email)}&entry.839337160=${encodeURIComponent(message)}&submit=Submit`;

    // Add iframe to the page
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.setAttribute('name', 'hidden_iframe');
    iframe.setAttribute('id', 'hidden_iframe');
    document.body.appendChild(iframe);

    // Create and submit form
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = formUrl;
    form.target = 'hidden_iframe';
    document.body.appendChild(form);
    form.submit();

    // Handle success
    document.getElementById('contactForm').reset();
    document.getElementById('successMessage').classList.remove('hidden');
    
    // Cleanup after 3 seconds
    setTimeout(() => {
        document.getElementById('successMessage').classList.add('hidden');
        document.body.removeChild(iframe);
        document.body.removeChild(form);
    }, 3000);
});
