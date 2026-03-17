/*Function-Block of code that performs a specific task can be invoked whenever needed*/

// function myfunction(){
//     console.log("Hello World!");
//     console.log("Learning JS");
// }
// myfunction();
/*Function->To calculate sum of two numbers*/
// function countVowels(str)
// {
//     let countV=0;
//     for(let i=0;i<str.length;i++)
//     {
//         if(str[i]=='a' || str[i]=='e' || str[i]=='i'||
//             str[i]=='o' || str[i]=='u'
//         )
//         {
//             countV++;
//         }
       
//     }
//      console.log("Count of Vowels=",countV);
// }
// let countC=0;
// function countConsonants(str)
// {
//     for(let i=0;i<str.length;i++)
//     {
//         if(str[i]!='a' && str[i]!='e' && str[i]!='i' && str[i]!='o'
//             && str[i]!='u'
//         )
//         {
//             countC++;
//         }
//     }
//     console.log("Count of consonants=",countC);
// }

// countVowels("chetan");
// countConsonants("chetan");
/*Function to calculate to calculate length of string*/
// function length(str)
// {
//     let count=0;
//     for(let i=0;i<str.length;i++)
//     {
//         count++;
//     }
//     console.log("Length of String=",count);
// }

// let name=prompt("Enter name:");
// length(name);
/*Arrow function*/
/*Arrow functions are compact(small) way of writing a function**/
// const actualSum=(a,b)=>
// {
//     console.log(a+b);
// }
// actualSum(2,3);
// const arrowMul=(a,b)=>
// {
//     return a*b;
// }
// let result=arrowMul(2,3);
// console.log(result);
/*Without input arrow function*/
// const printHello=()=>
// {
//     console.log("Hello World");
// }
// printHello();
/*Print count of Vowels and consonants in a string*/
// const countVowels=(str)=>
// {
//     let countV=0;
//     for(let i=0;i<str.length;i++)
//     {
//         if(str[i]=='a' || str[i]=='e' || str[i]=='i'|| str[i]=='o' || str[i]=='u')
//         {
//             countV++;
//         }
//     }
//     return countV;
// }
// const countConsonants=(str)=>
// {
//     let countC=0;
//     for(let i=0;i<str.length;i++)
//     {
//         if(str[i]!='a' && str[i]!='e' && str[i]!='i' && str[i]!='o' && str[i]!='u')
//         {
//             countC++;
//         }
//     }
//     return countC;
// }
// let result1=countVowels("Chetan");
// let result2=countConsonants("Chetan");
// console.log("Number of Vowels in a String=",result1);
// console.log("Number of consonants in a String=",result2)

// /*For each loop in Arrays*/
// let arr=[1,2,3,4,5];
// arr.forEach(function printVal(val){
//     console.log("Values=",val);
// })
/*Now for arrow function*/
// let arr=[1,2,3,4,5];
// arr.forEach((val)=>
// {
//     console.log(val);
// })
/*Now for cities*/
// let arr=["Delhi","Mumbai","Chennai"];
// arr.forEach((val,idx,arr)=>
// {
//     console.log(val.toUpperCase(),idx,arr);
// })
/*Sqaure of numbers*/
// let arr=[1,2,3,4,5];
// arr.forEach(function multiply(val){
//     console.log("Square of number=",val*val);
// })
/*Program to find out count of vowels and consonants in a string*/
// function countVowels(str)
// {
//     let countV=0;
//     for(let i=0;i<str.length;i++)
//     {
//         if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u')
//         {
//             countV++;
//         }
//     }
//     return countV;
// }
// function countConsonants(str)
// {
//     let countC=0;
//     for(let i=0;i<str.length;i++)
//     {
//         if(str[i]!='a' && str[i]!='e' && str[i]!='i' && str[i]!='o' && str[i]!='u')
//         {
//             countC++;
//         }
//     }
//     return countC;

// }
// let result1=countVowels("Chetan");
// let result2=countConsonants("Chetan");
// console.log("Number of vowels in a string:",result1);
// console.log("Number of consonants in a string:",result2);
/*Now doing same program with the arrow function*/
// let countVowels=(str)=>
// {
//     let countV=0;
//     for(let i=0;i<str.length;i++)
//     {
//         if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u')
//         {
//             countV++;
//         }
//     }
//     return countV;
// }
// let countConsonants=(str)=>
// {
//     let countC=0;
//     for(let i=0;i<str.length;i++)
//     {
//         if(str[i]!='a' && str[i]!='e' && str[i]!='i' &&str[i]!='o' &&str[i]!='u')
//         {
//             countC++;
//         }
//     }

//     return countC;
// }
// let result1=countVowels("Chetan");
// let result2=countConsonants("Chetan");
// console.log(result1);
// console.log(result2);
/*Callback -A function which is passed as passed as parameter to some other function is called as callback function*/
// let cities=["Delhi","Chennai","Mumbai"];
// cities.forEach(function myfunc(val,idx){
//     console.log("Name of City=",val," ","Rank of City=",idx);
// })
/*We can perform this with arrow function also*/
// let cities=["Delhi","Noida","Nangal"];
// cities.forEach()=(val)=>
// {
//     console.log(val);
// }
// let arr=["pune","delhi","mumbai"];
// arr.forEach((val,arr,idx)=>
// {
//     console.log(val.toUpperCase(),idx,arr);
// })
/*Sqaure of each number of array using for each*/
// let arr=[2,4,6,8,10];
// arr.forEach((val)=>{
//     console.log("Square of number=",val,",","is=",val*val);

// })
/*Second type of writing callback*/
// let arr=[2,3,4,5,6];
// let calcSq=(val)=>
// {
//     console.log(val**2);
// }
// arr.forEach(calcSq);
/*Map is just similar to for each but its returns a new array with some operation*/
// let nums=[67,52,39];
// nums.map((val)=>{
//     console.log(val);
// })
// let nums=[20,30,40,50];
// let newArr=nums.map((val)=>{
//     return val**2;
// })
// console.log(newArr);
/*Filter method in array*/
/*Filter method checks every element in an array and filter the elements based on some condition*/
/*For any element if the condition get true than it will filter out that element and value get stores in new array*/
// let arr=[1,4,6,7];
// let evenArray=arr.filter((val)=>{
//     return val%2==0;
// })
// console.log(evenArray);
/*Filter method checks every element of an array to filter vealues based on some condition*/
/*Program to filter out element if they are fulfiling that they are even*/
// let arr=[5,15,6,3,20];
// let newArr=arr.filter((val)=>{
//     return val%2==0;
// })
// console.log(newArr);
/*Reduce performs some operations and reduce the array to a single value.it returns the same single value*/
let arr=[1,2,3,4];

const output=arr.reduce((prev,curr)=>{
    return prev+curr;
})
console.log(output);
