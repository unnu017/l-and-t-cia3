let students = [
    { name: "Arya", age: 20, marks: 85 },
    { name: "Ann", age: 21, marks: 78 },
    { name: "Roshel", age: 20, marks: 92 },
    { name: "Hanna", age: 21, marks: 88 }
];

// Add a new student using push()
students.push({ name: "Meera", age: 20, marks: 95 });

console.log("After adding new student:");
console.log(students);

// Find the student with the highest marks
let highestStudent = students[0];

for (let i = 1; i < students.length; i++) {
    if (students[i].marks > highestStudent.marks) {
        highestStudent = students[i];
    }
}

console.log("Student with highest marks:");
console.log(highestStudent);