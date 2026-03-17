let PromptSync=require('prompt-sync');
let prompt=PromptSync();
let countVowels=(str)=>{
    let countV=0;
    for(let i=0;i<str.length;i++)
    {
        if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u')
        {
            countV++;
        }
    }
    return countV;

}
let countConsonants=(str)=>{
    let countC=0;
    for(let i=0;i<str.length;i++)
    {
        if(str[i]!='a' && str[i]!='e' && str[i]!=='i' && str[i]!='o' && str[i]!='u')
        {
            countC++;
        }
    }
    return countC;


}
let str=prompt("Enter a String:");
let vowels=countVowels(str);
let conso=countConsonants(str);
console.log(`Number of vowels=${vowels}`);
console.log(`Number of consonats=${conso}`);
