const PromptSync=require('prompt-sync');
const prompt=PromptSync();
let lcm=(num1,num2)=>{
    let lcm=num1>num2?num1:num2;
    while(true)
    {
        if(lcm%num1==0 && lcm%num2==0)
        {
            break;
        }
        lcm++;
    }
    return lcm;


}
let num1=prompt("Enter num1:");
let num2=prompt("Enter num2:");
let ans=lcm(num1,num2);
console.log(`Lcm of ${num1} and ${num2} is= ${ans}`);