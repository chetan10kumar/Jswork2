const PromptSync=require('prompt-sync');
const prompt=PromptSync();
let truncate=(str,n)=>{
    str=str.slice(0,n);
    return str.concat("...");
}
let str=prompt("Enter any String")
let n=prompt("Enter any Value of n");
let ans=truncate(str,n);
console.log(ans);
