// let marks=[96,78,56,43,23];
// console.log(marks);
// console.log(marks.length);
// console.log(typeof(marks));
/*Linear search*/
// let key=50;
// let nums=[20,30,40,3,50];
// let index=-1;
// for(let i=1;i<nums.length;i++)
// {
//     if(nums[i]==key)
//     {
//         index=i;
//         break;

//     }
    
// }
// console.log(index);


/*Printing elements of array*/
// let names=["Alex","Prince","Chetan","Finn"];
// for(let i=1;i<=names.length;i++)
// {
//     console.log(names[i]);
// }
// let cities=["delhi","mumbai","hyderabed","gurgaon"];
// for (let city of cities)
// {
//     console.log(city.toUpperCase());
// }
/*Finding Average Marks of class*/
// let sum=0;
// let marks=[85,97,44,37,76,60];
// for(let val of marks)
// {
//     sum=sum+val;
// }
// console.log("Sum of number=",sum);
// let average=sum/6;
// console.log("Average marks of whole class=",average);

/*Finding average of marks of students*/
// let sum=0;
// let average;
// let marks=[56,87,90,43,90];
// for(let i of marks)
// {
//     sum=sum+i;
// }
// let av=marks.length;
// average=sum/av;
// console.log("Average marks of class=",average);
/*Practice question for prices before and after discount*/
// let prices=[250,645,300,900,50];
// for(let i=1;i<=prices.length;i++)
// {
//     console.log("Before before discount=",prices[i],'\n');

// }
// let offer;
// for(let val of prices)
// {
//     offer=val/10;
//     val=val-offer;
//     console.log("Prices after giving discount=",val);
    
// }
/*Array methods*/
// let foodItems=["potato","apple","litchi","tomato"];
// console.log(foodItems.toString());
// let marvel_heros=["thor","spiderman","ironman"];
// let dc_heros=["superman","batman"];
// let heros=marvel_heros.concat(dc_heros);
// console.log(heros);
// console.log(heros.length);
// let marvel_heros=["thor","spiderman","ironman"];
// let dc_heros=["superman","batman"];
// marvel_heros.unshift("Chetan");
// console.log(marvel_heros);
// marvel_heros.shift();
// console.log(marvel_heros);
/*Slice method return a piece of the array*/
/*This method doesnt make changes in the original array*/
// let marvelHeros=["thor","ironman","spiderman","antman","Dr.Strange"];
// console.log(marvelHeros);
// console.log(marvelHeros.slice(1,3));
/*Splice makes changes in the original array*/
// let nums=[1,2,3,4,5,6,7];
// console.log(nums.splice(2,2,101,102))
// console.log(nums);