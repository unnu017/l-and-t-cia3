let students = [
    { name: "Arya", age: 20, marks: 85 },
    { name: "Ann", age: 21, marks: 78 },
    { name: "Roshel", age: 20, marks: 92 },
    { name: "Hanna", age: 21, marks: 88 }
];

for (let i = 0; i < students.length; i++) {
    if (students[i].marks < 80) {
        continue;
    }

    console.log(
        "Name:", students[i].name,
        "| Marks:", students[i].marks
    );
}