document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get your actual Google Form URL and replace the entry IDs
    const formUrl = 'https://docs.google.com/forms/d/e/1V4jbdaf_y5z12VWPtqBJYgpkfLLxYyYRhfVUXEYrjq0/formResponse';
    
    const formData = new FormData();
    formData.append('entry.123456789', document.getElementById('name').value);
    formData.append('entry.987654321', document.getElementById('email').value);
    formData.append('entry.456789123', document.getElementById('message').value);
    
    // Using iframe to submit the form
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = formUrl;
    
    // Convert FormData to hidden inputs
    for (let pair of formData.entries()) {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = pair[0];
        input.value = pair[1];
        form.appendChild(input);
    }
    
    iframe.contentDocument.body.appendChild(form);
    form.submit();
    
    // Clean up
    setTimeout(() => {
        document.body.removeChild(iframe);
    }, 1000);
    
    // Reset form and show success message
    document.getElementById('contactForm').reset();
    document.getElementById('successMessage').classList.remove('hidden');
    setTimeout(() => {
        document.getElementById('successMessage').classList.add('hidden');
    }, 3000);
});
