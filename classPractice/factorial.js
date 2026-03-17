const PromptSync=require('prompt-sync');
const prompt=PromptSync();
let factorial=(n)=>{
    let f=1;
    for(let i=1;i<=n;i++)
    {
        f=f*i
    }
    return f;

}
let n=prompt("Enter any value of n:");
let ans=factorial(n);
console.log(`Factorial of a number=${ans}`);