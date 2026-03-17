/*Call Stack remember*/
/*Event loop*/
/*Event queue*/
/*Js is single threaded language than why there is term js is async*/
/*Callback is older way to achieve async*/
/*Async is a way to handle promise*/

/*Sync and Async*/


/*Showing the difference between which program will execute in call stack or web api*/
/*When we have someting like promise or setTimeoUt than the program goes into web api*/

/*This will execute in callstack*/
// console.log("Start");      //this will get executed in call stack*/
// function heavyTask()
// {
//     console.log("Hello");
// }
// heavyTask();
// console.log("End")
// 
/*With something like settimeout or promise it will get executed in web api*/
// console.log("Hello");
// function heavtTask()
// {
//     setTimeout  (()=>{
//         console.log("Hello");
//     })
// }
// heavtTask();
// console.log("Bye");
/*Call back hell*/
/*But call back hell is outdated*/

/*Solution of callback is promise*/
/*Promise example*/
// function getUser()
// {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("User Data");
//         },1000)
//     });

// }

// console.log("Before");
// console.log(getUser())
// .then(data=>console.log(data))
// .catch(data=>console.log(err));

// console.log("After");
/*In callbcak we cannot perform execution parallely but we can perform the execution parallely in promises*/
/*Learn reject case and resolved case in js with the use of promise*/
/*Learn call back function and call back hell*/

// let promise1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("promise 1 resolved");
//     },5000)
// });
// let promise2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("promise 2 resolved");
//     },6000)
// });
// promise1.then(data=>console.log(data));
// promise2.catch(data=>console.log(err));
// let promise1=new Promise((resolve,rejected)=>{
//     setTimeout(()=>{
//         resolve("promsie 1 resolved");
//     },5000)
// })
// let promise2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("promise 2 rejected");
//     },7000)
// })
// promise1.then(data=>console.log(data));
// promise2.catch(error=>console.log(error));
/*Async function*/
/*Anything we will return in js it will print promise*/
// async function test()
// {
//     return "Hello";
// }
// test().then((data)=>{
//     console.log(data);
// })
// let result=test();
// console.log(result);
//Even loop priority
// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("promise 1 resolved");
//     }, 5000);
// });

// let promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("promise 2 rejected");
//     }, 7000);
// });

// promise1
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
//     .finally(() => {
//         console.log("Promise1 finished");
//     });

// promise2
//     .then(data => console.log(data))
//     .catch(error => console.log(error))
//     .finally(() => {
//         console.log("Promise2 finished");
//     });
