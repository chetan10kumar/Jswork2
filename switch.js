/*Switch statement in javaScript*/
/*Example program*/
// let a=10;
// let b=5;
// let result;
// let operation=1;
// switch(operation){
//     case 1:
//         result=a+b;
//         break;
//     case 2:
//         result=a-b;
//         break;
//     case 3:
//         result=a*b;
//         break;
//     case 4:
//         result=a/b;
//         break;
//     default:
//         console.log("Wrong operation");



// }
// console.log("Result:",result);
// /*Program to calculate simple intrest*/
//const PromptSync = require("prompt-sync");
// const prompt=PromptSync();
// let simpleIntrest = (p,r,t)=>{
//     let si=p*r*t/100;
//     return si;
// }
// p=prompt("Enter principle");
// r=prompt("Enter rate");
// t=prompt("Enter time");
// let ans=simpleIntrest(p,r,t);
// console.log("Simple Intrest=",ans);
// console.log(typeof(ans));
/*Greatest of three numbers*/
// const PromptSync=require('prompt-sync');
// const prompt=PromptSync();
// let greatest=(a,b,c)=>{
//     if((a>b)&&(a>c))
//         return a;
//     else if((b>a)&&(b>c))
//         return b;
//     else
//         return c; 
// }
// let a=prompt("Enter value of a:");
// let b=prompt("Enter value of b:");
// let c=prompt("Enter value of c:");
// let result=greatest(a,b,c);
// console.log("Greatest of all=",result);

/*Class practice questions*/
/*1.) Leap year or not*/
// const PromptSync=require('prompt-sync');
// const prompt=PromptSync();
// let leapYear = (year)=>{
//     if(year%4==0 && year%400==0)
//     {
//         console.log("Year is Leap year");
//     }
//     else
//     {
//         console.log("Year is not a leap year");
//     }
// }
// let year=prompt("Enter the year");
// leapYear(year);
/*Grades of a student*/
// const prompt = require('prompt-sync')();
// // const prompt = PromptSync();
// // var grade;

// let gradeStudents=(marks)=> {

//     if ((marks >= 90) && (marks <= 99)) {
//         grade = 'A';
//         return grade;
//     }
//     else if ((marks >= 80) && (marks <= 89)) {
//         grade = 'B';
//         return grade;
//     }
//     else if ((marks >= 70) && (marks <= 79)) {
//         grade = 'C';
//         return grade;
//     }
//     else if ((marks >= 60) && (marks <= 69)) {
//         grade = 'D';
//         return grade;
//     }
//     else {
//         console.log("Fail");
//     }

// }

// let marks = Number(prompt("Enter marks of student:"));

// console.log("result is ", gradeStudents(marks));

/*3-Number is lying betwwen 10-50*/
// const PromptSync=require('prompt-sync');
// const prompt=PromptSync();
// let numberLies=(num)=>{
//     if((num>=10) && (num<=50))
//     {
//         return true;
//     }
//     else
//     {
//         return false;
//     }
// }
// let num=prompt("Enter number");
// let result=numberLies(num);
// console.log(result);
/*4*/
// const PromptSync=require('prompt-sync');
// const prompt=PromptSync();
// let verify=(username,password)=>{
//     if(username=="Chetan" && password=="Chetan@10")
//     {
//         return true;
//     }
//     else
//     {
//         return false;
//     }
// }
// let username=prompt("Enter username:");
// let password=prompt("Enter password");
// let result=verify(username,password);
// console.log("result=",result);
/*5*/
// const PromptSync=require('prompt-sync');
// const prompt=PromptSync();
// let largest=(a,b,c)=>{
//     if((a>b)&&(a>c))
//     {
//         console.log("A is the largest");
//     }
//     else if((b>a)&&(b>c))
//     {
//         console.log("B is largest");
//     }
//     else
//     {
//         console.log("C is largest");
//     }
// }
// let a=prompt("Enter value of a:");
// let b=prompt("Enter value of b:");
// let c=prompt("Enter value of c:");
// largest(a,b,c);
/*6*/
/*Vowels and consonants*/
// let PromptSync=require('prompt-sync');
// let prompt=PromptSync();
// let vowelsOrConso=(ch)=>{
//     if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u')
//     {
//        console.log("It is a Vowel");
//     }
//     else
//     {
//         console.log("It is a consonant");
//     }

// }
// let char=prompt("Enter the character to check:");
// let result=vowelsOrConso(char);
// console.log(result);
/*7*/
// const PromptSync=require('prompt-sync');
// const prompt=PromptSync();
// let checkNumber=(num)=>{
//     if(num==0)
//     {
//         console.log("Number is Zero");
//     }
//     else if(num>0)
//     {
//         console.log("Number is positive");
//     }
//     else
//     {
//         console.log("Number is Negative");
//     }
// }
// let num=prompt("Enter a number:");
// checkNumber(num);
/*Switch*/

// let a=prompt("Enter value of a");
// let b=prompt("Enter value of b");
// let ch=prompt("Enter the operation");
// switch(ch){
//     case '+':{
//         let c=a+b;
//         console.log("Addition of two numbers=",c);
//         break;
//     }
//     case '-':{
//         let c=a-b;
//         console.log("Subtraction of two numbers=",c);
//         break;
//     }
//     case '*':{
//         let c=a*b;
//         console.log("Multiplication of two numbers=",c);
//         break;
//     }
//     case '/':{
//         let c=a/b;
//         console.log("Divsion of two numbers=",c);
//         break;
//     }
//     default:{
//         console.log("You have entered invalid choice");
//     }
// }
/*Switch for days*/
// const PromptSync=require('prompt-sync');
//  const prompt=PromptSync();
// let day=prompt("Enter day");
// switch(day){
//     case 1:{
//         console.log("Monday");
//         break;


//     }
//     case 2:{
//         console.log("Tuesday");
//         break;
//     }
//     case 3:{
//         console.log("Wednesday");
//         break;
//     }
//     case 4:{
//         console.log("Thursday");
//         break;
//     }
//     case 5:{
//         console.log("Friday");
//         break;
//     }
//     case 6:{
//         console.log("Saturday");
//         break;
//     }
//     case 7:{
//         console.log("Sunday");
//         break;
//     }
//     default:{
//         console.log("You  have entered wrong choice");
//     }

// }
/*10*/
// const PromptSync=require('prompt-sync');
//  const prompt=PromptSync();
// let discount=(total)=>{
//     if(total>1000){
//         var result=total*20/100;
//         result=total-result;
//         return result;
//     }
//     else
//     {
//         return total;
//     }
// }
// let total=prompt("Enter total");
// let result=discount(total);
// console.log("Price after discount=",result);
/*Array*/
// let arr=[1,2,3,4,5];
// for(let x of arr)
// {
//     console.log(x);
// }
// let student={
//     Name:"Chetan",
//     age:20,
//     isPass:true
// };
// for(let x of Object.keys( student))
// {
//     console.log(student[x]);
// }
//fibonacci
//reverse
/*All even between 1 to 50*/
// let print=(initial,final)=>{
//     for(let i=initial;i<=final;i++)
//     {
//         if(i%2==0)
//         {
//             console.log(i);
//         }
//     }
// }
// print(1,50);
/*Sum of natural number*/
// const PromptSync=require('prompt-sync');
// const prompt=PromptSync();
// let sum=(n)=>{
//     let sum=0;
//     for(let i=1;i<=n;i++)
//     {
//         sum=sum+i;
//     }
//     return sum;
// }
// let n=prompt("Enter value of n");
// let result=sum(n);
// console.log(result);
/*Factorial*/
// const PromptSync=require('prompt-sync');
// const prompt=PromptSync();
// let factorial=(n)=>{
//     let f=1;

//     for(let i=1;i<=n;i++)
//     {
//         f=f*i;
//     }
//     return f;
// }
// let n=prompt("Enter number:");
// let result=factorial(n);
// console.log("Result=",result);
/*Reverse a Number*/
// const PromptSync = require('prompt-sync');
// const prompt = PromptSync();
// let reverse = (num) => {
//     console.log(num);
//     let rev = 0;
//     let r;
//     while (num > 0) {
//         r = (num % 10);
//         console.log(r);
//         rev = (rev * 10) + r;
//         num = Math.floor(num / 10);
//     }
//     return rev;
// }
// let num = Number(prompt("Enter number:"));
// let result = reverse(num);
// console.log(result);
/*Implementing linear search*/
// const PromptSync=require('prompt-sync');
// const prompt=PromptSync();
// let linearSearch=(ns)=>{
//     let arr=[1,2,3,4,5];
//     let f=0;
//     for(let i=1;i<=arr.length;i++)
//     {
//         if(arr[i]==ns)
//         {
//             f=1;
//             break;
//         }
        
//     }
//     if(f==1)
//     {
//         return true;
//     }
//     return false;
// }
// let num=prompt("Enter the number");
// let ans=linearSearch(num);
// console.log(ans);
/*1.)Practice*/
/*Prime number or not*/
// const PromptSync=require('prompt-sync');
// const prompt=PromptSync();
// let primeOrNot=(num)=>{
//     count=0;
//     for(let i=1;i<=num;i++)
//     {
//         if(i%2==0)
//         {
//             count++;
//         }
//     }
//     if(count==2)
//     {
//         console.log("Number is Prime");
//     }
//     else{
//         console.log("Number is not Prime");
//     }
// }
// let num=prompt("Enter number:");
// primeOrNot(num);

/*2.)Multiplication of table*/
// const PromptSync=require('prompt-sync');
// const prompt=PromptSync();
// let table=(num)=>{

//     for(let i=1;i<=10;i++)
//     {
//     console.log(`${num} X ${i}=${num * i}`)
//     }
// }
// let num=prompt("Enter table you want to print");
// table(num);


/*3.) Break*/
// const PromptSync=require('prompt-sync');
// const prompt=PromptSync();
// let printNum=(initial,final)=>{
//     for(let i=initial;i<=final;i++)
//     {
//         console.log(i);
//         if(i==13)
//         {
//             break;
//         }
//     }
// }
// let initial=prompt("Enter initial value");
// let final=prompt("Enter final");
// printNum(initial,final);
/*Skip number using continue*/
// const PromptSync=require('prompt-sync');
// const prompt=PromptSync();
// let skip=(initial,final)=>{
//     for(let i=initial;i<=final;i++)
//     {
        
//         if(i%3==0)
//         {
            
//             continue;
//         }
//         console.log(i);
//     }
// }
// let initial=prompt("Enter initial value:");
// let final=prompt("Enter final value:");

// skip(initial,final);

/*Sum of even numbers*/
// const PromptSync=require('prompt-sync');
// const prompt=PromptSync();
// let sumNumbers=(n)=>{
//     let sum=0;
//     for(let i=1;i<=n;i++)
//     {
//         if(i%2==0)
//         {
//             sum=sum+i;
//         }
//     }
//     return sum;
// }
// let n=prompt("Enter value of n:");
// let ans=sumNumbers(n);
// console.log("Sum of even numbers=",ans);
/*Armstrong number*/
// const PromptSync=require('prompt-sync');
// const prompt=PromptSync();
// let isArmstrong=(num)=>{
//     let org=num;
//     let s=0;
//     let r;
//     while(num>0)
//     {
//         r=num%10;
//         s=s+(r*r*r);
//         num=Math.floor(num/10);
//     }
//     if(org==s)
//     {
//         return true;

//     }
//     else
//     {
//         return false;
//     }
// }
// let num=prompt("Enter number:");
// let ans=isArmstrong(num);
// console.log(ans);
/*Print all odd number from 50 to 1*/
// const PromptSync=require('prompt-sync');
// const prompt=PromptSync();
// let printOdd=(n)=>{
//     for(let i=n;i>=1;i--)
//     {
//         if(i%2!=0)
//         {
//             console.log(i);
//         }
//     }
// }
// let n=prompt("Enter number");
// printOdd(n);
/*Count digits in number*/
// const PromptSync=require('prompt-sync');
// const prompt=PromptSync();
// let countDigits=(n)=>
// {
//     let s=0;
//     let count=0;
//     let r;
//     let q;
//     while(n>0)
//     {
        
//         q=n/10;
//         r=n%10;
//         s=Math.floor(s+r);
//         n=n/10;
        
        
        
//     }
//     return count;
// }
// let number=prompt("Enter number");
// let ans=countDigits(number);
// console.log(ans);
/*Factors of a number*/
// const PromptSync=require('prompt-sync');
// const prompt=PromptSync();
// let factors=(num)=>{
//     for(let i=1;i<=num;i++)
//     {
//         if(num%i==0)
//         {
//             console.log("Factors=",i);
//         }
//     }
// }
// let num=prompt("Enter number");
// factors(num);
/*Count digits in a number*/
// const PromptSync=require('prompt-sync');
// const prompt=PromptSync();
// let count=(n)=>{
//     let count=0;
//     if(n===0)
//     {
//         return 0;
//     }
//     while(n>0)
//     {
//         n=Math.floor(n/10);
//         count++;

//     }
//     return count;
// }
// let num=prompt("Enter number");
// let ans=count(num);
// console.log(ans);
/*Swap two number*/
// const PromptSync=require('prompt-sync');
// const prompt=PromptSync();
// let swap=(a,b)=>{
//     console.log(`Before swapping value of a= ${a}`);
//     console.log(`Before swappingn value of b=${b}`);
//     let temp;
//     temp=a;
//     a=b;
//     b=temp;
//     console.log(`After swapping value of a=${a}`);
//     console.log(`After swapping value of b=${b}`)

// }
// let a=prompt("Enter value of a:");
// let b=prompt("Enter value of b");
// swap(a,b);
/*Without third variable*/
// const PromptSync=require('prompt-sync');
// const prompt=PromptSync();
// let swap=(a,b)=>{
//     console.log("Before swapping=",a,b);
//     a=a+b;    //2+3=5
//     b=a-b;    //b=5-3
//     a=a-b;
    
//     console.log("After swapping=",a,b);
// }

// swap(2,3);


