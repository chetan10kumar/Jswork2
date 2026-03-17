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
let str=prompt("Enter a String");
let ans=reverse(str);
console.log(`Reverse of a String=${ans}`);
