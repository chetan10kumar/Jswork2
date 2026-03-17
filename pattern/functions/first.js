/*Simple functionn in js*/
// function greet(){
//     console.log("Hello World!!");
// }
// greet();

/*Doing sum with the hlp of function*/
// function sum(a,b){
//     return a+b;
// }
// let ans=sum(2,3);
// console.log("Sum of two numbers=",ans);

/*Unnamed  functions*/
// let add=function(a,b)
// {
//     return a+b;
// }
// let ans=add(2,3);
// console.log("Addition of two numbers=",ans);
/*Concept of hoisting Example*/
// console.log("When variable is not declared=",n);
// let a=()=>{
//     var n=10;
//     return n;
// }
// let ans=a();
// console.log("After calling the function=",ans);
// const PromptSync=require('prompt-sync');
// const prompt=PromptSync();
// let upperCase=(str)=>{
//     let ans=str.toUpperCase();
//     return ans;
// }
// let lowerCase=(str)=>{
//     let ans=str.toLowerCase()
//     return ans;
// }
// let str=prompt("Enter the string you want to change:");
// let ans1=upperCase(str);
// let ans2=lowerCase(str);
// console.log("String successfully changed to the  uppercase",ans1);
// console.log("String successfully changed to lowercase",ans2)

/*Single line for arrow function*/
// let add=(a,b)=> a+b;
// let ans=(2,3);
// console.log(ans);

/*Arrow function for object*/
// const getUser=()=>({
//         name:"Chetan",
//         age:20
// })
// console.log(getUser());
// const PromptSync=require('prompt-sync');
// const prompt=PromptSync();

// let linearSearch=(arr,ns,size)=>{
//     for(let i=0;i<size;i++)
//     {
//         if(arr[i]==ns)
//         {
//             return i;
//         }

//     }
// }   
// let size=prompt("Enter the size");
// let arr=new Array(size);
// for(let i=0;i<size;i++)
// {
//     arr[i]=prompt("Enter element=",i);
// }
// let ns=prompt("Enter number you want to search for:");
// let ans=linearSearch(arr,ns,size);
// console.log("Element found at index=",ans);

