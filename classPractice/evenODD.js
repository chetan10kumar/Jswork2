/*1.)Odd even*/
const PromptSync=require('prompt-sync');
const prompt=PromptSync();
let oddEven=(n)=>{
    if(n%2==0)
    {
        console.log("Number is Even");
    }
    else
    {
        console.log("Number is Odd");
    }
}
let n=prompt("Enter any Value of n:");
oddEven(n);