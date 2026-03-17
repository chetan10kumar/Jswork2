const PromptSync=require('prompt-sync');
let prompt=PromptSync();
let replace=(str)=>{
    str=str.replaceAll(" ","-");
    return str;

}

let str=prompt("Enter the String");
let ans=replace(str);
console.log(`${ans}`)