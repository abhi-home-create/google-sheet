document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Create the form URL with parameters
    const embedCode = `<iframe src="${formUrl}" width="640" height="800" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>`;

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
