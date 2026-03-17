const PromptSync=require('prompt-sync');
let prompt=PromptSync();
let cube=(n)=>{
    let ans=n*n*n;
    return ans;
}
let n=prompt("Enter any value of n:");
let ans=cube(n);
console.log(`Cube of ${n}=${ans}`);