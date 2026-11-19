let bsit_students = {
    student1: {
        studentName: "Gagan, Jyles Jea R.",
        idNum: "2026-6774",
        yearLevel: 2,
        program: "Bachelor of Science in Information Technology"
    },
    student2: {
        studentName: "Kimayong, Shekinah Dale Q.",
        idNum: "2026-6682",
        yearLevel: 2,
        program: "Bachelor of Science in Information Technology"
    },
    student3: {
        studentName: "Dela Cruz, Shadrach Vincent D.",
        idNum: "2026-6752",
        yearLevel: 2,
        program: "Bachelor of Science in Information Technology"
    },

    courseEnrolled: {
        Course1: { course: "Integrative Programming", units: 3 },
        Course2: { course: "App Dev", units: 3 },
        Course3: { course: "Networking 1", units: 3 },
        Course4: { course: "Event Driven Programming", units: 3 },
        Course5: { course: "Arts Appreciation", units: 3 },
        Course6: { course: "Science, Technology & Society", units: 3 },
        Course7: { course: "PathFit 4", units: 2 }
    },

    studentGrades: {
        student1: {
            Course1: 96,
            Course2: 95,
            Course3: 99,
            Course4: 94,
            Course5: 93,
            Course6: 90,
            Course7: 94
        },
        student2: {
            Course1: 94,
            Course2: 93,
            Course3: 93,
            Course4: 99,
            Course5: 92,
            Course6: 98,
            Course7: 95
        },
        student3: {
            Course1: 99,
            Course2: 96,
            Course3: 95,
            Course4: 92,
            Course5: 97,
            Course6: 91,
            Course7: 90
        }
    }
};

// fixed courses
const c1 = bsit_students.courseEnrolled.Course1;
const c2 = bsit_students.courseEnrolled.Course2;
const c3 = bsit_students.courseEnrolled.Course3;
const c4 = bsit_students.courseEnrolled.Course4;
const c5 = bsit_students.courseEnrolled.Course5;
const c6 = bsit_students.courseEnrolled.Course6;
const c7 = bsit_students.courseEnrolled.Course7;

const totalUnits = c1.units + c2.units + c3.units + c4.units + c5.units + c6.units + c7.units;

// Student 1
const s1c1 = bsit_students.student1;
const s1g1 = bsit_students.studentGrades.student1;
const totalGrades1 = (s1g1.Course1 * c1.units) + (s1g1.Course2 * c2.units) + (s1g1.Course3 * c3.units) + (s1g1.Course4 * c4.units) + (s1g1.Course5 * c5.units) + (s1g1.Course6 * c6.units) + (s1g1.Course7 * c7.units);
const gwas1 = totalGrades1 / totalUnits;

let letterGrades1 = "F (Failed)";
if (gwas1 >= 98 && gwas1 <= 100) {
    letterGrades1 = "A";
} else if (gwas1 >= 94 && gwas1 < 98) {
    letterGrades1 = "A-";
} else if (gwas1 >= 90 && gwas1 < 94) {
    letterGrades1 = "B+";
} else if (gwas1 >= 87 && gwas1 < 90) {
    letterGrades1 = "B";
} else if (gwas1 >= 83 && gwas1 < 87) {
    letterGrades1 = "B-";
} else if (gwas1 >= 80 && gwas1 < 83) {
    letterGrades1 = "C";
} else if (gwas1 >= 77 && gwas1 < 80) {
    letterGrades1 = "C-";
} else if (gwas1 >= 73 && gwas1 < 77) {
    letterGrades1 = "D";
}

console.log("=== Student 1 ===");
console.log(`Name: ${s1c1.studentName}`);
console.log(`Student ID: ${s1c1.idNum}`);
console.log(`Year Level: ${s1c1.yearLevel}`);
console.log(`Program: ${s1c1.program}`);
console.log(`Total Units: ${totalUnits}`);
console.log(`GWA: ${gwas1.toFixed(2)}`);
console.log(`Letter Grade: ${letterGrades1}`);
console.log("\=== Courses Enrolled ===");
console.log(`${c1.course}`);
console.log(`${c2.course}`);
console.log(`${c3.course}`);
console.log(`${c4.course}`);
console.log(`${c5.course}`);
console.log(`${c6.course}`);
console.log(`${c7.course}\n`);

// Student 2
const s2c2 = bsit_students.student2;
const s2g2 = bsit_students.studentGrades.student2;
const totalGrades2 = (s2g2.Course1 * c1.units) + (s2g2.Course2 * c2.units) + (s2g2.Course3 * c3.units) + (s2g2.Course4 * c4.units) + (s2g2.Course5 * c5.units) + (s2g2.Course6 * c6.units) + (s2g2.Course7 * c7.units);
const gwas2 = totalGrades2 / totalUnits;

let letterGrades2 = "F (Failed)";
if (gwas2 >= 98 && gwas2 <= 100) {
    letterGrades2 = "A";
} else if (gwas2 >= 94 && gwas2 < 98) {
    letterGrades2 = "A-";
} else if (gwas2 >= 90 && gwas2 < 94) {
    letterGrades2 = "B+";
} else if (gwas2 >= 87 && gwas2 < 90) {
    letterGrades2 = "B";
} else if (gwas2 >= 83 && gwas2 < 87) {
    letterGrades2 = "B-";
} else if (gwas2 >= 80 && gwas2 < 83) {
    letterGrades2 = "C";
} else if (gwas2 >= 77 && gwas2 < 80) {
    letterGrades2 = "C-";
} else if (gwas2 >= 73 && gwas2 < 77) {
    letterGrades2 = "D";
}

console.log("=== Student 2 ===");
console.log(`Name: ${s2c2.studentName}`);
console.log(`Student ID: ${s2c2.idNum}`);
console.log(`Year Level: ${s2c2.yearLevel}`);
console.log(`Program: ${s2c2.program}`);
console.log(`Total Units: ${totalUnits}`);
console.log(`GWA: ${gwas2.toFixed(2)}`);
console.log(`Letter Grade: ${letterGrades2}`);
console.log("=== Courses Enrolled ===");
console.log(`${c1.course}`);
console.log(`${c2.course}`);
console.log(`${c3.course}`);
console.log(`${c4.course}`);
console.log(`${c5.course}`);
console.log(`${c6.course}`);
console.log(`${c7.course}\n`);

// Student 3
const s3c3 = bsit_students.student3;
const s3g3 = bsit_students.studentGrades.student3;
const totalGrades3 = (s3g3.Course1 * c1.units) + (s3g3.Course2 * c2.units) + (s3g3.Course3 * c3.units) + (s3g3.Course4 * c4.units) + (s3g3.Course5 * c5.units) + (s3g3.Course6 * c6.units) + (s3g3.Course7 * c7.units);
const gwas3 = totalGrades3 / totalUnits;

let letterGrades3 = "F (Failed)";
if (gwas3 >= 98 && gwas3 <= 100) {
    letterGrades3 = "A";
} else if (gwas3 >= 94 && gwas3 < 98) {
    letterGrades3 = "A-";
} else if (gwas3 >= 90 && gwas3 < 94) {
    letterGrades3 = "B+";
} else if (gwas3 >= 87 && gwas3 < 90) {
    letterGrades3 = "B";
} else if (gwas3 >= 83 && gwas3 < 87) {
    letterGrades3 = "B-";
} else if (gwas3 >= 80 && gwas3 < 83) {
    letterGrades3 = "C";
} else if (gwas3 >= 77 && gwas3 < 80) {
    letterGrades3 = "C-";
} else if (gwas3 >= 73 && gwas3 < 77) {
    letterGrades3 = "D";
}

console.log("=== Student 3 ===");
console.log(`Name: ${s3c3.studentName}`);
console.log(`Student ID: ${s3c3.idNum}`);
console.log(`Year Level: ${s3c3.yearLevel}`);
console.log(`Program: ${s3c3.program}`);
console.log(`Total Units: ${totalUnits}`);
console.log(`GWA: ${gwas3.toFixed(2)}`);
console.log(`Letter Grade: ${letterGrades3}`);
console.log("=== Courses Enrolled ===");
console.log(`${c1.course}`);
console.log(`${c2.course}`);
console.log(`${c3.course}`);
console.log(`${c4.course}`);
console.log(`${c5.course}`);
console.log(`${c6.course}`);
console.log(`${c7.course}`);