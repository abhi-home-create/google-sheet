document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get the actual entry IDs from your Google Form source
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Replace with your actual Google Form URL and entry IDs
    const formUrl = `https://docs.google.com/forms/d/e/1FAIpQLSc4ovtdhnknm9SLgXfkPvTeImrv4jrLlR02DXX09naToRaoxA/formResponse?usp=pp_url&entry.1045781291=${encodeURIComponent(name)}&entry.YYYYY=${encodeURIComponent(email)}&entry.ZZZZZ=${encodeURIComponent(message)}&submit=Submit`;

    // Using iframe for submission
    const iframe = document.createElement('iframe');
    iframe.setAttribute('name', 'hidden_iframe');
    iframe.setAttribute('id', 'hidden_iframe');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);

    // Create and submit form
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = formUrl;
    form.target = 'hidden_iframe';
    document.body.appendChild(form);
    form.submit();

    // Success handling
    document.getElementById('contactForm').reset();
    document.getElementById('successMessage').classList.remove('hidden');
    setTimeout(() => {
        document.getElementById('successMessage').classList.add('hidden');
        document.body.removeChild(iframe);
        document.body.removeChild(form);
    }, 3000);
});
