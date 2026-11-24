// profileBuilder.js

function createStudentProfile(name, id, program, yearLevel, schoolYear) {
    return {
        name: name,
        id: id,
        program: program,
        yearLevel: yearLevel,
        schoolYear: schoolYear
    };
}

const myProfile = createStudentProfile(
    "Jyles Jea R. Gagan",
    6774,
    "BS in Information Technology",
    "2nd Year",
    "2026-2027"
);

console.log(myProfile)