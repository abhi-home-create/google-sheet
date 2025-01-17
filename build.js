const fs = require('fs');

// Create config file with environment variable
const configContent = `const CONFIG = {
    SCRIPT_URL: '${process.env.GOOGLE_APPS_SCRIPT_URL}'
};`;

fs.writeFileSync('dist/config.js', configContent);

// Copy other files
fs.copyFileSync('index.html', 'dist/index.html');
fs.copyFileSync('styles.css', 'dist/styles.css');
fs.copyFileSync('script.js', 'dist/script.js');
