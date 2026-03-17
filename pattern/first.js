// const PromptSync=require('prompt-sync');
// const prompt=PromptSync();
// let printPattern=(n)=>{
//     for(let i=1;i<=n;i++)
//     {
//         let row="";
//         for(let j=1;j<=i;j++)
//         {
//             row=row+"*";
//         }
//         console.log(row);
//     }
    
// }
// let n=prompt("Enter num:");
// printPattern(n);
const PromptSync=require('prompt-sync');
const prompt=PromptSync();
let pattern=(n)=>{
    for(let i=1;i<=n;i++)
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
pattern(n);