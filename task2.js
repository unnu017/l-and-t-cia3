const fs = require('fs');
const path = require('path');

const TASKS_FILE = path.join(__dirname, 'tasks.txt');

if (!fs.existsSync(TASKS_FILE)) {
    fs.writeFileSync(TASKS_FILE, '');
}

console.log('About to read tasks.txt...');

fs.readFile(TASKS_FILE, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading tasks.txt:', err.message);
        return;
    }

    console.log('--- tasks.txt contents (read asynchronously) ---');
    console.log(data.length ? data : '(file is currently empty)');
});

console.log('...fs.readFile triggered, continuing without waiting for it.');