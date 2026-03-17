const PromptSync=require('prompt-sync');
let prompt=PromptSync();
let largest=(a,b)=>{
    let ans=a>b?a:b;
    return ans;
}
let a=prompt("Enter value of a:");
let b=prompt("Enter value of b:");
let ans=largest(a,b);
console.log(`Largest of two is=${ans}`);