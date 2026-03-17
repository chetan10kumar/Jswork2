const PromptSync=require('prompt-sync');
const prompt=PromptSync();
let reverse=(str)=>{
    let res="";
    for(let i=str.length-1;i>=0;i--)
    {
        res=res+str[i];
    }
    return res;
}
let str=prompt("Enter String:");
let ans=reverse(str.trim());
console.log(`The resultant String=${ans}`);