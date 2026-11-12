let studentInfo = {
    studentName: "Gagan, Jyles Jea R.",
    idNum: "2026-6774",
    yearLevel: 2,
    program: "Information Technology"
}

let courseEnrolled = [
    { course: "Integrative Programming", grade: 99 },
    { course: "App Dev", grade: 95 },
    { course: "Networking 1", grade: 90 },
    { course: "Event Driven Programming", grade: 88 }
];

let totalGrade = courseEnrolled[0].grade + courseEnrolled[1].grade + courseEnrolled[2].grade + courseEnrolled[3].grade;
let gwa = totalGrade / courseEnrolled.length;

console.log("Student Name: " + studentInfo.studentName);
console.log("Student ID: " + studentInfo.idNum);
console.log("Year Level: " + studentInfo.yearLevel);
console.log("Program: " + studentInfo.program);
console.log("Courses Enrolled: " + courseEnrolled[0].course + ", " + courseEnrolled[1].course + ", " + courseEnrolled[2].course + ", " + courseEnrolled[3].course);
console.log("Average Grade: " + gwa.toFixed(0));   // 0 so that it will not show decimals


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
