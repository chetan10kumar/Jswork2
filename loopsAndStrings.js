/*Basic loop in java Scipt*/
// for(let i=1;i<=5;i++)
// {
//     console.log("Chetan Kumar");

// }
// let sum=0;

// for(let i=1;i<=5;i++)
// {
//     sum=sum+i;
// }
// console.log("Sum of numbers=",sum);
/*Now looping until the variable*/
// let sum=0;
// let n=100;
// for(let i=1;i<=n;i++)
// {
//     sum=sum+i;
// }
// console.log("Sum is="+sum);
/*Looping using while*/
// let i=1;
// while(i<=5)
// {
//     console.log("i=",i);
//     i++;
// }
//for-off loop-It is applicable for strings and arrays
// let str="Chetan Kumar";
// for(let val of str)
// {
//     console.log("Value=",val);

// }
/*Calculating length of the string*/
// let str="Chetan Kumar";
// let length=0;
// for(let val of str)
// {
//     length++;

// }
// console.log("Length of String="+length);
/*for-in loop*/
// let student={
//     name:"Chetan Kumar",
//     age:20,
//     cgpa:7.5,
//     isPass:true

// };
// for(let i in student)
// {
//     console.log(i);
// }
/*Printing all even numbers between 0 to 100*/
// for(let i=1;i<=100;i++)
// {
//     if(i%2==0)
//     {
//         console.log(i);
//     }
// }
/*For-off loop in js*/
// let str="Chetan";
// for(let i of str)
// {
//     console.log(i);
// }
// /*For in loop*/
// const student={
//     name:"Chetan Kumar",
//     age:20,
//     cgpa:7.17,
//     isPlaced:true,

// }
// for(let i in student)
// {
//     console.log(student[i]);
// }
/*Calculating the length of the string*/
// let str1="Chetan";
// let length=0;
// for(let i of str1)
// {
//     length++;
// }
// console.log("Length of the string=",length);
/*Calculating length using length method*/
// let str1="Chetan";
// let size=str1.length;
// console.log("Length of the string=",size);
/*Printing all even number beween 1  to 100*/
// for(let i=1;i<=100;i++)
// {
//     if(i%2==0)
//     {
//         console.log(i);
//     }
// }
/*Accessing the string indices*/
// let name="Chetan Kumar";
// for(let i of name)
// {
//     if(i=='C' || i=='K')
//     {
//         console.log(i);
//     }
// }
/*Template literals*/
// let sentence=`This is a Template literal`
// console.log(typeof(sentence));
/*Ques-If we can create a string using single quote or double quotes than why template literals*/
/*Example*/
/*This is simply printed using string which is complex*/
// let obj={
//     item:"pen",
//     price:10,
// };
// console.log("The cost of",obj.item," is",obj.price);
// /*Now doing same by tempalate literals*/
// let obj={

//     item:"pen",
//     price:10

// }
// let output=`The cost of ${obj.item} is ${obj.price} rupees`;


/*One more example of template literal*/
// let obj={
//     name:"Chetan Kumar",
//     age:20
// };
// let output=`My name is ${obj.name} and age is ${obj.age}`;
// console.log(output);
/*String interpolation*/
/*We add placeholders inside our template literals whose  values gets calculated at the run time*/
// let output=`The addition of three numbers i.e 1+2+3 = ${1+2+3}`;
// console.log(output);

/*Escape characters like tab and nexline examples*/
// let obj={
//     name:"Chetan Kumar",
//     age:20
// };
// /*For nextline*/
// let output=`My name is ${obj.name} \n My age is ${obj.age}`;
// /*For tab*/
// let output1=`My name is ${obj.name} \t My age is ${obj.age}`; 
// console.log(output);
// console.log(output1);
/*To uppercase*/
// let str="chetan kumar";
// let result=str.toUpperCase();
// console.log(result);
/*To lowercase*/
// let str="CHETAN KUMAR";
// let result=str.toLowerCase();
// console.log(result);
/*Trim method*/
// let str="  Chetan Kumar  JS     ";
// console.log(str.trim());
/*Slicing in String*/
// let str="Chetan";
// console.log(str.slice(1,3));

/*Concatenation in String*/
// let str1="Chetan";
// let str2="Kumar";
// let result=str1.concat(str2);
// console.log(result);


/*Replace method to seach a value in string and replace it with new value*/
// let str="Hello";
// console.log(str.replace("H","Y"));
/*Accessing Characters in Strings*/
let str="Chetan";
console.log(str.charAt(2));