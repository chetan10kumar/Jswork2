/*Print number pattern*/
const PromptSync=require('prompt-sync');
const prompt=PromptSync();
let print=(n)=>{
    for(let i=n;i>=1;i--)
    {
        let row="";
        for(let j=1;j<=i;j++)
        {
            row=row+"*";
        }
        console.log(row);
    }
}
let n=prompt("Enter n:");
print(n);