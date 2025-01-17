document.addEventListener('DOMContentLoaded', function() {
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxtm-5Rb6AB1MlKtDIF2g7gLVf6Q8e4HBYjB7Ps8yJlsDVEIon24shBikwC298Duuymaw/exec';
  document.getElementById('contactForm').addEventListener('submit', async function(e) {
      e.preventDefault();
      const formData = {
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
          message: document.getElementById('message').value
      };
      try {
          const response = await fetch(SCRIPT_URL, {
              method: 'POST',
              mode: 'no-cors',
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
