/*Map function*/
// const PromptSync=require('prompt-sync');
// const prompt=PromptSync();
// let square=(arr,size)=>{
//     arr=arr.map(n=>n**2);
//     return arr;

// }
// let size=prompt("Enter size:");
// let arr=new Array(size);
// for(let i=0;i<size;i++)
// {
//     arr[i]=prompt("Enter elements",i);
// }
// let ans=square(arr,size)
// console.log(ans);

/*Filter*/
// const PromptSync=require('prompt-sync');
// const prompt=PromptSync();
// let filter=(arr,size)=>{
//     let newArr=arr.filter(n=>n%2==0)
//     return newArr;
// }
// let size=prompt("Enter size of an array");
// let arr=new Array(size);
// for(let i=0;i<size;i++)
// {
//     arr[i]=Number(prompt("Enter elements",i));

// }
// let ans=filter(arr,size);
// console.log(ans);
/*Some method*/
// let arr=[1,2,3,4,5];
// let ans=arr.some(n=>n>4)
// console.log(ans);
/*Every method*/
// let arr=[1,2,3,4,5];
// let ans=arr.every(n=>n>2)
// console.log(ans);
/*Flat method*/
// let arr=[1,[2,3],[4,[5]]];
// let ans=arr.flat();
// console.log(ans);
/*Sort*/
// let arr=[2,3,4,5,6];
// let ans=arr.sort((a,b)=>b-a)
// console.log(ans);
/*Push in shallow copy*/
// let [p,q]=[10,20];
// [p,q]=[q,p];
// console.log([p,q]);
// let arr1=[1,2,3,4,5];
// let arr2=[7,8,9,10];
// let newArr =[...arr1,...arr2];
//  console.log(newArr);


// /*Array can be created by .of*/
// console.log(Array.of(1,2,3));
// /*Array can be created by from also*/
// str="Chetan"
// console.log(Array.from(str));

// let arr=new Array(3).fill(0);
// console.log(arr);
// const freq={};
// const arr=[1,2,2,3,3];
// arr.forEach(val=>{
//     freq[val]=(freq[val]||0)+1;
// })
// for(let i in freq)
// {
//     console.log(`Count of ${i} is = ${freq[i]}`);
// }
/*Find vs Filter*/
// let arr=[1,2,3,4,5];
// let ans=arr.find(n=>n>3);
// console.log(ans);

// let arr=[1,2,3,4,5];
// let ans=arr.filter(n=>n>3)
// console.log(ans);
/*Second largest in array*/
// const freq={};
// const arr=[1,2,3,3];
// arr.forEach(val=>{
//     freq[val]=(freq[val]||0)+1;
// })
// for(let i in freq)
// {
//     console.log(`Count of ${i} is= ${freq[i]}`);
// }
/*Second largest in array*/
// let temp;
// let min;
// let arr=[2,5,4,3];
// for(let i=0;i<arr.length;i++)
// {
//     min=i;
//     for(let j=i+1;j<arr.length;j++)
//     {
//         if(arr[j]<arr[min])
//         {
//             min=j;
//         }
//     }
//     temp=arr[i];
//     arr[i]=arr[min];
//     arr[min]=temp;
// }
// let size=arr.length;
// console.log(arr[size-2])
