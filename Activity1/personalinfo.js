const personalInfo = {
    studentName: "Gagan, Jyles Jea R.",
    idNum: "2026-6774",
    yearLevel: 2,
    program: "Bachelor of Science in Information Technology",

    courseEnrolled: {
        Course1: { course: "Integrative Programming", units: 3, grade: 99 },
        Course2: { course: "App Dev", units: 3, grade: 95 },
        Course3: { course: "Networking 1", units: 3, grade: 94 },
        Course4: { course: "Event Driven Programming", units: 3, grade: 95 },
        Course5: { course: "Arts Appreciation", units: 3, grade: 90 },
        Course6: { course: "Science, Technology & Society", units: 3, grade: 92 },
        Course7: { course: "PathFit 4", units: 2, grade: 95 },
    }
};

const c1 = personalInfo.courseEnrolled.Course1;
const c2 = personalInfo.courseEnrolled.Course2;
const c3 = personalInfo.courseEnrolled.Course3;
const c4 = personalInfo.courseEnrolled.Course4;
const c5 = personalInfo.courseEnrolled.Course5;
const c6 = personalInfo.courseEnrolled.Course6;
const c7 = personalInfo.courseEnrolled.Course7;

const totalUnits = c1.units + c2.units + c3.units + c4.units + c5.units + c6.units + c7.units;
const totalGrade = (c1.grade * c1.units) + (c2.grade * c2.units) + (c3.grade * c3.units) + (c4.grade * c4.units) + (c5.grade * c5.units) + (c6.grade * c6.units) + (c7.grade * c7.units);
const computedGwa = totalGrade / totalUnits.toFixed(2);

let computedLetterGrade = "F (Failed)";
if (computedGwa >= 98 && computedGwa <= 100) {
    computedLetterGrade = "A";
} else if (computedGwa >= 94 && computedGwa < 98) {
    computedLetterGrade = "A-";
} else if (computedGwa >= 90 && computedGwa < 94) {
    computedLetterGrade = "B+";
} else if (computedGwa >= 87 && computedGwa < 90) {
    computedLetterGrade = "B";
} else if (computedGwa >= 83 && computedGwa < 87) {
    computedLetterGrade = "B-";
} else if (computedGwa >= 80 && computedGwa < 83) {
    computedLetterGrade = "C";
} else if (computedGwa >= 77 && computedGwa < 80) {
    computedLetterGrade = "C-";
} else if (computedGwa >= 73 && computedGwa < 77) {
    computedLetterGrade = "D";
} else {
    computedLetterGrade = "F (Failed)";
}

personalInfo.gwa = computedGwa;
personalInfo.letterGrade = computedLetterGrade;

console.log(`Name: ${personalInfo.studentName}`);
console.log(`Student ID: ${personalInfo.idNum}`);
console.log(`Year Level: ${personalInfo.yearLevel}`);
console.log(`Program: ${personalInfo.program}`);
console.log(`Total Units: ${totalUnits}`);
console.log(`GWA: ${personalInfo.gwa.toFixed(2)}`);
console.log(`Letter Grade: ${personalInfo.letterGrade}`);

console.log("\n=== Courses Enrolled ===")
console.log(`${personalInfo.courseEnrolled.Course1.course}`)
console.log(`${personalInfo.courseEnrolled.Course2.course}`)
console.log(`${personalInfo.courseEnrolled.Course3.course}`)
console.log(`${personalInfo.courseEnrolled.Course4.course}`)
console.log(`${personalInfo.courseEnrolled.Course5.course}`)
console.log(`${personalInfo.courseEnrolled.Course6.course}`)
console.log(`${personalInfo.courseEnrolled.Course7.course}`)
