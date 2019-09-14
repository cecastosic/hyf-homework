const class07Students = [];
function addStudentToClass(studentName) {
     if (class07Students.includes(studentName)) {
       return `Student ${studentName} is already in the class`;
     } else if (studentName === "Queen") {
       class07Students.push("Queen");
     } else if (class07Students.length > 6){
   return "Cannot add more students to class07";
     } else if (studentName === "") {
       return "Please enter Student name";
     } else {
       class07Students.push(studentName);
     }
}

function getNumberOfStudents() {
    return class07Students.length;
}

addStudentToClass("Nina");
addStudentToClass("Maja");
addStudentToClass("Jane");
addStudentToClass("Jack");
addStudentToClass("Rasmus");
addStudentToClass("Colin");
addStudentToClass("Queen");
addStudentToClass("Queen");
console.log(addStudentToClass());
console.log(getNumberOfStudents());

