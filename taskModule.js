const fs = require('fs');
const path = require('path');

const TASKS_FILE = path.join(__dirname, 'tasks.txt');

function saveTask(task) {
    fs.appendFileSync(TASKS_FILE, task + '\n');
    console.log('Task saved successfully:', task);
}

module.exports = {
    saveTask
};