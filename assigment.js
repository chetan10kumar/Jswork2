class Person{
    name;
    Age;
    constructor(name,Age){
        this.name=name;
        this.Age=Age;
    }
    static greet(){
        console.log("Welcome!")
    }
    displayInfo(){
        console.log(`Name:${this.name}, age:${this.Age}`)
    }
}
class Student extends Person{
    rollno;
    constructor(name,Age,rollno){
        super(name,Age)
        this.rollno=rollno;
    }
    displayStudent(){
        super.displayInfo();
        console.log(`Rollno: ${this.rollno}`);
    }
}
class Teacher extends Person{
    subject;
    constructor(name,Age,subject){
        super(name,Age)
        this.subject=subject
    }
    displayTeacher(){
        super.displayInfo();
        console.log(`Subject: ${this.subject}`)
    }
}
Person.greet()
let s1 = new Student("Chetan", 20, 101);
let s2 = new Student("Rahul", 21, 102);
let t1 = new Teacher("Mr. Sharma", 40, "Math");
let t2 = new Teacher("Mrs. Gupta", 38, "Science");
s1.displayStudent();
t1.displayTeacher();
s2.displayStudent();
t2.displayTeacher();