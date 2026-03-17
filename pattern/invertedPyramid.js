const PromptSync=require('prompt-sync');
const prompt=PromptSync();
let invertedPyramid=(n)=>{
    for(let i=n;i>=1;i--)
    {
        for(let sp=1;sp<=n-1;sp++)
        {
            process.stdout.write(" ");
        }
        for(let st=1;st<=2*i-1;st++)
        {
            process.stdout.write("* ");
        }
        console.log();
    }

}
let n=prompt("Enter any value of n:");
invertedPyramid(n);