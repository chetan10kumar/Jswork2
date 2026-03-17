const PromptSync=require('prompt-sync');
const prompt=PromptSync();
let anagramString=(str1,str2)=>{
    str1=str1.split("").sort().join();
    str2=str2.split("").sort().join();
    if(str1===str2)
    {
        return 1;
    }
    return 0;
}
let str1=prompt("Enter the first String");
let str2=prompt("Enter second String");
let ans=anagramString(str1,str2);
console.log(`${ans}`);