let students = [
    { name: "Arya", age: 20, marks: 85 },
    { name: "Ann", age: 21, marks: 78 },
    { name: "Roshel", age: 20, marks: 92 },
    { name: "Hanna", age: 21, marks: 88 }
];

console.log("Original student records:");
console.log(students);

// Remove the last student using pop()
let removedStudent = students.pop();

console.log("Removed student:");
console.log(removedStudent);

// Sort students by marks
students.sort((a, b) => a.marks - b.marks);

console.log("Students sorted by marks:");
console.log(students);