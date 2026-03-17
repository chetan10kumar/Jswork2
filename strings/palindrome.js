const PromptSync=require('prompt-sync');
const prompt=PromptSync();
let palindrome=(str)=>{
    let org=str;
    let rev="";
    for(let i=str.length-1;i>=0;i--)
    {
        rev=rev+str[i];
    }
    if(org==rev)
    {
        console.log("String is Palindrome");

    }
    else
    {
        console.log("String is not Palindrome");
    }

}
let str=String(prompt("Enter the String:"));
palindrome(str.toLowerCase());