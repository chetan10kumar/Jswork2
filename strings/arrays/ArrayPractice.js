/*Missing Number in an Array*/
// const PromptSync=require('prompt-sync');
// const prompt=PromptSync();
// let missingNumber=(arr,size)=>{
//     let sum=0;
//     for(let i=0;i<size;i++)
//     {
//         sum=sum+arr[i];
//     }
//     let actualSum=(size+1)*(size+2)/2;
//     let missingNumber=actualSum-sum;
//     return missingNumber;

// }

// let size=Number(prompt("Enter size of an array:"));
// let arr=new Array(size);
// for(let i=0;i<size;i++)
// {
//     arr[i]=Number(prompt("Enter element in an array=",i));
// }
// let missing=missingNumber(arr,size);
// console.log(`Missing number in array =${missing}`);

/*Targest Sum*/
// const PromptSync=require('prompt-sync');
// const prompt=PromptSync();
// let targetSum=(arr,size,target)=>{
//     let result=[];
//     for(let i=0;i<size;i++)
//     {
//         for(let j=i+1;j<size;j++)
//         {
//             if(arr[i]+arr[j]==target)
//             {
//                 result.push([i,j]);
//             }
//         }
//     }
//     return result;
// }
// let size=Number(prompt("Enter size of array:"));
// let arr=new Array(size);
// for(let i=0;i<size;i++)
// {
//     arr[i]=Number(prompt("Enter elements=",i));
// }
// let target=prompt("Enter target:");
// let pairs=targetSum(arr,size,target);
// console.log(`Pairs=${pairs}`);

/*Selection sort with first and second largest number*/
// const PromptSync=require('prompt-sync');
// const prompt=PromptSync();
// let selectionSort=(arr,size)=>{
//     let final=[];
//     let temp,min;
//     for(let i=0;i<arr.length;i++)
//     {
//         min=i;
//         for(let j=i+1;j<arr.length;j++)
//         {
//             if(arr[j]<arr[min])
//             {
//                 min=j;
//             }
//         }
//         temp=arr[i];
//         arr[i]=arr[min];
//         arr[min]=temp;
//         final.push(arr[i]);
//     }
//     return final;

// }
// let size=Number(prompt("Enter size of an array"));
// let arr=new Array(size);
// for(let i=0;i<arr.length;i++)
// {
//     arr[i]=Number(prompt("Enter elements"));
// }
// let sorted=selectionSort(arr,size);
// console.log(sorted);
/*Longest word in sentence*/
// const PromptSync=require('prompt-sync');
// const prompt=PromptSync();
// let longest=(str)=>{
//     let arr=str.split(" ");
//     let maxStr=0;
//     let longestWord="";
//     for(let key of arr)
//     {
//         if(key.length>maxStr)
//         {
//             maxStr=key.length;
//             longestWord=key;
//         }
//     }
//     return longestWord;
// }
// let str=prompt("Enter the Sentence");
// let ans=longest(str);
// console.log(`Longest Word in the sentence=${ans}`); 
/*Reverse an Array*/
// const PromptSync=require('prompt-sync');
// const prompt=PromptSync();
// let reverse=(arr,size)=>{
//     for(let i=arr.length-1;i>=0;i--)
//     {
//         console.log(arr[i]," ");
//     }

// }
// let size=Number(prompt("Enter size of an array:"));
// let arr=new Array(size);
// for(let i=0;i<arr.length;i++)
// {
//     arr[i]=Number(prompt("Enter elements=",i));
// }
// reverse(arr,size);
/*Implementing linear search in array*/
// const PromptSync=require('prompt-sync');
// const prompt=PromptSync();
// let linearSearch=(arr,size,target)=>{
//     for(let i=0;i<size;i++)
//     {
//         if(arr[i]==target)
//         {
//             return i;
//         }
       
//     }
//     return -1;
// }
// let size=Number(prompt("Enter the size of an array"));
// let arr=new Array(size);
// for(let i=0;i<size;i++)
// {
//     arr[i]=Number(prompt("Enter elements=",i));
// }
// let target=Number(prompt("Enter target value"));
// let ans=linearSearch(arr,size,target);
// console.log(ans);

/*Implementing binary search functionality*/
// const PromptSync=require('prompt-sync');
// const prompt=PromptSync();
// let binarySearch=(arr,size,target)=>{
//     let min;
//     let temp;
//     for(let i=0;i<size;i++)
//     {
//         min=i;
//         for(let j=i+1;j<size;j++)
//         {
//             if(arr[j]<arr[min])
//             {
//                 min=j;
//             }
//         }
//         temp=arr[i];
//         arr[i]=arr[min];
//         arr[min]=temp
//     }
//     let start=0;
//     let end=size-1;
//     while(start<end)
//     {
//         let mid=(start+end)/2;
//         if(arr[mid]==target)
//         {
//             return mid;
//         }
//         else if(arr[mid]<target)
//         {
//             start=mid+1;
//         }
//         else {
        
        
//             right=mid-1;
//         }
        
//     }
//     return -1;
// }
// let size=Number(prompt("Enter size of an array:"));
// let arr=new Array(size);
// for(let i=0;i<arr.length;i++)
// {
//     arr[i]=Number(prompt("Enter elements=",i));
// }

// let target=Number(prompt("Enter any target"));
// let ans=binarySearch(arr,size,target);
// console.log(ans);
/*Arrays equals or not*/
const PromptSync=require('prompt-sync');
const prompt=PromptSync();
let equalOrNot=(arr1,arr2,size1,size2)=>{
    if(size1!=size2)
    {
        return -1;
    }
    for(let i=0;i<size1;i++)
    {
        for(let j=0;j<size2;j++)
        {
            
        }
    }
}