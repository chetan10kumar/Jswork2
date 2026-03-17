/*let name="Chetan Kumar";
console.log(name);
let age=24;
let totalPrice=1000;
console.log(age);
console.log(totalPrice);*/
/*In var-We can redeclare the varaible and the update */

// var age=10;
// var age=20;
// var age=30;
// console.log(age);
/*In let-We cannot redeclare the value but can update the value*/
// let age=10;
//  age=20;
//  age=30;
// console.log(age);
// /*Const we cannot redeclare or re update*/
// const age1=10;
// age1=20;

// let age=20;
// console.log(typeof(age));
// const student={
//     fullName:"Chetan Kumar",
//     age:20,
//     isStudent:true,
//     CGPA:7.16

// }
// let marks=67;
// let grade;
// if((marks>=80)&&(marks<=100))
//     grade='A';
// else if((marks>=70)&&(marks<=89))
//     grade='B';
// else if((marks>=60) && (marks<=69))
//     grade='C';
// else if((marks>=50) && (marks<=59))
//     grade=='D';
// else
//     console.log("Fail");
//     console.log(grade);// console.log(student);
// console.log(typeof(student));
// console.log(student.fullName);
//Arithmetic Operators
// let a=5;
// let b=2;
// console.log("a=",a,"& b=",b);
// console.log("a+b=",a+b);
// console.log("a-b=",a-b);
// console.log("a*b=",a*b);
// console.log("a/b=",a/b);
/*Increment operators*/
// let a=10;
// console.log(++a);
// let b=10;
// console.log(--b);
//Pre-Increment vs Post Increment
/*Pre-Increment*/
// let a=10;
// console.log("++a=",++a);
// /*Post-Increment*/
// let b=10;
// console.log("b++=",b++);
// console.log("Fianlly value updated=",b);
/*Assigment Operator*/
// let a=10;
// a+=4;
// console.log(a);
// let a=5;
// a**=4;
// console.log(a);
//comparison operator
// let a=5;
// let b=2;
// console.log("5==2",a==b);
// console.log("5!=2",a!=b);
//type of data comparison
// let a=5;
// let b="5";
// console.log(a!==b);
// console.log(a===b);
/*Conditional statements*/
//let a=18;
// if(a>=18)
//     console.log("Eligible for voting");
// else
//     console.log("Not eligible for voting");

/*Conditional statement example 2*/
// let a=20;
// if(a%2==0)
//     console.log("Number is even");
// else
//     console.log("Number is odd");
//conditional statements
// let mode="dark";
// if(mode=="dark")
// {
//     color="black";
// }
// if(mode=="light")
// {
//     color="white";
// }
// console.log(color);
/*Else if statements*/
// age=45;
// if(age<18)
// {
//     console.log("He is an adult");

// }
// else if(age>60)
// {
//     console.log("Senior");
// }
// else
// {
//     console.log("Veteran");
// }
/*Ternary*/
// let number=17;
// let status=number%2==0 ? "even":"non even";
// console.log(status);

// let number=prompt("Enter a number:");
// if(number%5==0)
// {
//     console.log("It is multiple of 5");
// }
// else
// {
//     console.log("It is not multiple of 5");
// }
/*Let cannot be re declared but can be updated*/
/*Var can be re declared and can be re updated*/
/*Const cannot be re declared or re updated*/
/* Creating a student object*/
// const student={
//     name:"Chetan Kumar",
//     age:20,
//     isPlaced:true,

// };
// console.log(student);
// console.log(student.name);
// console.log(student.age);
// console.log(student.isPlaced);
/*Using ternary orperator*/
// let num=19;
// let status=num%2==0 ? "even" : "odd";
// console.log(status);
// let age=21;
// let status=age>=18 ? "eligible" : "not eligible";
// console.log(status);
/*Template literals are used to add embedded expressions with in the sentence*/
// let obj={
//     Name:"Chetan Kumar",
//     Age:20
// };
// let result=`Name of the student is ${obj.Name} and his age is only ${obj.Age} years`;
// console.log(result); /*This is an example of template literal*/
/*Now example of string interpolation*/
/*String interpolation means adding an expression whose value is calculated at the run time*/
// let result=`My Name is Chetan Kumar ${5+5}`;
// console.log(result);
// function add(a,b)
// {
//     let c=a+b;
//     console.log("Addition of two numbers=",c);
// }
// add(2,3);
// let add=(a,b)=>
// {
//     let c=a+b;
//     console.log(c);
// }
// add(2,3);