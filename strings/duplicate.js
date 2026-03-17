const PromptSync=require('prompt-sync');
const prompt=PromptSync();
let duplicate=(str)=>{
    
    let res="";
    for(let i=0;i<str.length;i++)
    {
        let count=0;
        for(let j=i+1;j<str.length;j++)
        {
            if(str[i]==str[j])
            {
                count++;
            }
        }
        if(count>=1)
        {
           res=res+str[i];
        }

    }
    return res.split(" ");
}
let str=prompt("Enter String:");
let ans=duplicate(str.trim());
console.log(`Duplicate in String ${str} = ${ans}`);