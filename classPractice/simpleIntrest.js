const PromptSync=require('prompt-sync');
const prompt=PromptSync();
let si=(p,r,t)=>{
    let ans=(p*r*t)/100;
    return ans;
}
let p=prompt("Enter principle:");
let r=prompt("Enter rate");
let t=prompt("Enter time");
let ans=si(p,r,t);
console.log(`Simple Intrest with value P=${p} R=${r} T=${t}=${ans} rupees`);
