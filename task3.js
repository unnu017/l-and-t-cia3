const fs = require('fs');
const path = require('path');

const TASKS_FILE = path.join(__dirname, 'tasks.txt');

const task = 'Complete Node.js practical Task 3';

fs.writeFile(TASKS_FILE, task + '\n', (err) => {
    if (err) {
        console.error('Error writing task:', err.message);
        return;
    }

    console.log('Task written successfully to tasks.txt');
});