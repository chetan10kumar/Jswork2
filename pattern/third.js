const PromptSync=require('prompt-sync');
const prompt=PromptSync();
let printt=(n)=>{
    for(let i=1;i<=n;i++)
    {
        let row="";
        for(let j=1;j<=i;j++)
        {
            row=row+j;
        }

        console.log(row);
    }
}
let n=Number(prompt("Enter number"));
printt(n);