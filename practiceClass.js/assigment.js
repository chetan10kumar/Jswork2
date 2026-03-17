/*First*/
const PromptSync=require('prompt-sync');
const prompt=PromptSync();
class Person
{   static greet()
    {
        console.log("Hello Welcome");
    }
    displayInfo(name,age)
    {
        this.name=name;
        this.age=age;
        console.log(`Name of the person=${name}`);
        console.log(`Age of the person=${age}`);

    }    
}
class Student extends Person
{
    addRoll(rollNo)
    {

    super.displayInfo(name,age);
    console.log(`Roll Number of the peroson=${rollNo}`);
    Person.greet();
    }
}
class Teacher extends Person
{
    addSubject(subject)
    {
        super.displayInfo(name,age);
        this.subject=subject;
        console.log(`Subject=${subject}`);

    }
}
let obj1=new Student();
let name=prompt("Enter the name of person:");
let age=prompt("Enter the age of the person:");
let rollno=prompt("Enter rollno of the person:");
obj1.displayInfo(name,age);
let obj2=new Teacher();
let subject=prompt("Enter subject:");
obj2.addSubject(subject);




