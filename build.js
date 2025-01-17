const fs = require('fs');

const script = fs.readFileSync('script.js', 'utf8');
const updatedScript = script.replace('GOOGLE_APPS_SCRIPT_URL', process.env.GOOGLE_APPS_SCRIPT_URL);
fs.writeFileSync('dist/script.js', updatedScript);
