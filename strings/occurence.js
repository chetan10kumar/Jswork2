const PromptSync=require('prompt-sync');
const prompt=PromptSync();
let occurence=(str,ch)=>{
   var count=0;
    for(let i=0;i<str.length;i++)
    {
         
        if(str[i]===ch)
        {
            count++;
        }
    }
    console.log(`Occurence of character ${ch} = ${count}`);
}
let str=prompt("Enter the String:");
let ch=prompt("Enter character you want to know occurence of:");
occurence(str,ch);
