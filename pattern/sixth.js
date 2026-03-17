const PromptSync=require('prompt-sync');
const prompt=PromptSync();
let print=(n)=>{
    for(let i=1;i<=n;i++)
    {
        let row="";
        for(let j=1;j<=n;j++)
        {
            row=row+"*";
        }
        console.log(row);
    }
}
let n=prompt("Enter any value of n");
print(n);