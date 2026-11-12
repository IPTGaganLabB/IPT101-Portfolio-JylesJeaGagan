let studentInfo = {
    studentName: "Gagan, Jyles Jea R.",
    idNum: "2026-6774",
    yearLevel: 2,
    program: "Information Technology"
}

let courseEnrolled = [
    { course: "Integrative Programming", grade: 99 },
    { course: "App Dev", grade: 95 },
    { course: "Networking 1", grade: 94},
    { course: "Event Driven Programming", grade: 95 },
    { course: "Arts Appreciation", grade: 90 },
    { course: "Science, Technology & Society", grade: 92 },
    { course: "PathFit 4", grade: 95 },
];

let totalGrade = courseEnrolled[0].grade + courseEnrolled[1].grade + courseEnrolled[2].grade + courseEnrolled[3].grade + courseEnrolled[4].grade + courseEnrolled[5].grade + courseEnrolled[6].grade;
let gwa = totalGrade / courseEnrolled.length;

console.log("Student Name: " + studentInfo.studentName);
console.log("Student ID: " + studentInfo.idNum);
console.log("Year Level: " + studentInfo.yearLevel);
console.log("Program: " + studentInfo.program);
console.log("\n== Courses Enrolled: ==\n" + courseEnrolled[0].course + "\n" + courseEnrolled[1].course + "\n" + courseEnrolled[2].course + "\n" + courseEnrolled[3].course + "\n" + courseEnrolled[4].course + "\n" + courseEnrolled[5].course + "\n" + courseEnrolled[6].course);
console.log("\nAverage Grade: " + gwa.toFixed(0));   // 0 so that it will not show the decimals


if (gwa >= 98) {
    console.log("Letter Grade: A");
} else if (gwa >= 94) {
    console.log("Letter Grade: A-");
} else if (gwa >= 90) {
    console.log("Letter Grade: B+");
} else if (gwa >= 87) {
    console.log("Letter Grade: B");
} else if (gwa >= 83) {
    console.log("Letter Grade: B-");
} else if (gwa >= 80) {
    console.log("Letter Grade: C");
} else if (gwa >= 77) {
    console.log("Letter Grade: C-");
} else if (gwa >= 73) {
    console.log("Letter Grade: D");
} else {
    console.log("Letter Grade: F");
}
