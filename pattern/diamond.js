const PromptSync=require('prompt-sync');
const prompt=PromptSync();
let diamond=(n)=>{
    for(let i=1;i<=n;i++)
    {
        for(let sp=1;sp<=n-i;sp++)
        {   
          process.stdout.write(" ");
            
        }
        for(let st=1;st<=2*i-1;i++)
        {
            process.stdout.write("*");
        }
        console.log();
    }
    for(let i=n-1;i>=1;i--)
    {
        for(let sp=1;sp<=n-i;sp++)
        {
            process.stdout.write(" ");
        }
        for(let st=1;st<=2*i-1;st++)
        {
            process.stdout.write("*");
        }
        console.log();
    }


}
let n=prompt("Enter value of n:");
diamond(n);