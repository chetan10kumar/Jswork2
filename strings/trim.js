const PromptSync=require('prompt-sync');
const prompt=PromptSync();
let trim=(str)=>{
    str=str.tim();
}
let str=prompt("Enter the String:");
let ans=trim(str);