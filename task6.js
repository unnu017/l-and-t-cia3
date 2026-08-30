let students = [
    { name: "Arya", age: 20, marks: 85 },
    { name: "Ann", age: 21, marks: 78 },
    { name: "Roshel", age: 20, marks: 92 },
    { name: "Anna", age: 21, marks: 88 }
];

for (let i = 0; i < students.length; i++) {
    console.log(
        "Name:", students[i].name,
        "| Age:", students[i].age,
        "| Marks:", students[i].marks
    );
}