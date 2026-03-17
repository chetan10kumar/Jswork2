/*This is the method used for id*/
// let heading=document.getElementById("heading");
// console.dir(heading);
/*Now method use for class*/
// let heading=document.getElementsByClassName("heading4");
// console.log(heading);
/*Now accessing elements by tag name*/
// let parah=document.getElementsByTagName("p");
// console.log(parah);
/*Now query selector*/
/*It helps to access the elements using tag name,class ir id*/
/*If we want one element from passed tag than we use*/
// let first=document.querySelector("p");
// console.log(first);
// console.log(first.tagName);
// let second=document.querySelectorAll("#heading1");
// console.log(second);
// console.log(second.tagName);
let button1=document.querySelector("#button1");
button1.addEventListener("click",()=>{
    console.log("Button 1 was clicked-handler1");
})
button1.addEventListener("click",()=>{
    console.log("Button 1 was clicked-handler2")
})
const handler3=()=>{
    console.log("Button 1 was clicked-handler 3");
}
button1.addEventListener("click",handler3);
button1.addEventListener("click",()=>{
    console.log("Button 1 was clicked-handler 4")
})
button1.removeEventListener("click",handler3);