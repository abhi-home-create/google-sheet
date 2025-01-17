document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Google Forms pre-filled URL with entry.1234567890 format
    const formUrl = `https://docs.google.com/forms/d/e/1V4jbdaf_y5z12VWPtqBJYgpkfLLxYyYRhfVUXEYrjq0/formResponse?usp=pp_url&entry.123=${name}&entry.456=${email}&entry.789=${message}&submit=Submit`;
    
    fetch(formUrl, {mode: 'no-cors'})
        .then(() => {
            document.getElementById('contactForm').reset();
            alert('Message sent!');
        });
});
