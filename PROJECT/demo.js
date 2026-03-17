const prompt = require('prompt-sync')();
// const prompt = PromptSync();
// var grade;

function gradeStudents(marks) {

    if ((marks >= 90) && (marks <= 99)) {
        grade = 'A';
        return grade;
    }
    else if ((marks >= 80) && (marks <= 89)) {
        grade = 'B';
        return grade;
    }
    else if ((marks >= 70) && (marks <= 79)) {
        grade = 'C';
        return grade;
    }
    else if ((marks >= 60) && (marks <= 69)) {
        grade = 'D';
        return grade;
    }
    else {
        console.log("Fail");
    }

}

let marks = Number(prompt("Enter marks of student:"));



console.log("result is ", gradeStudents(marks));

