const { saveTask } = require('./taskModule');

console.log('Task Logger Started');

const task = process.argv.slice(2).join(' ');

if (task) {
    saveTask(task);
} else {
    console.log('Please provide a task.');
}