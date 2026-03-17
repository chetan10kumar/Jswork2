const PromptSync=require('prompt-sync');
const prompt=PromptSync();
let hcf=(num1,num2)=>{
    let hcf=0;
    for(let i=1;i<=num1 && i<=num2;i++)
    {
        if(num1%i==0 && num2%i==0)
        {
            hcf=i;
        }
    }
    return hcf;
}
let num1=prompt("Enter any value of num1");
let num2=prompt("Enter any value of num2");
let ans=hcf(num1,num2);
console.log(`HCf of two numbers i.e ${num1} and ${num2}=${ans}`);