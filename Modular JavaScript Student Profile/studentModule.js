// studentModule.js

export const studentDetails = {
    name: "Jyles Jea R. Gagan",
    id: 6774,
    program: "BS in Information Technology",
    yearLevel: "2nd Year",
    schoolYear: "2026-2027"
};


export function printSummary(student, status) {
    return `Student: ${student.name} | ID: ${student.id} | Program: ${student.program} | Status: ${status}`;
}