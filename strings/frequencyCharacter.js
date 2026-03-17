// const frequency={};
// for(const character of string)
// {
//     frequency[character]=(fequency[character]||0)+1;
// }
const PromptSync=require('prompt-sync');
const prompt=PromptSync();
let occurence=(str)=>{
    const frequency={};
    for(const char of str)
    {
        frequency[char]=(frequency[char]||0)+1;
    }
    return frequency;
}
let str=prompt("Enter a new String:");
let ans=occurence(str);
console.log(`Occurence of each char=${ans}`);