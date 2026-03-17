const PromptSync=require('prompt-sync');
const prompt=PromptSync();
let floyds=(n)=>{
    let num=1;
    for(let i=1;i<=n;i++)
    {
        let row="";
        for(let j=1;j<=i;j++)
        {
            row=row+num+" ";
            num++;
        }
        console.log(row);
    }
}
let n=prompt("Enter value of n:");
floyds(n);
