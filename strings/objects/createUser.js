// const createUser={
//     username:"Chetan Kumar",
//     age:20,
//     Number:10
// };
// console.log(createUser);
// console.log(createUser["username"]);
// console.log(createUser["age"]);
// console.log(createUser["Number"]);
// createUser.isPass=true;
// console.log(createUser);

const { findPackageJSON } = require("module");

// const User=new Object();
// User.userName="Chetan Kumar";
// User.age=20;
// User.Number=10;
// console.log(User);
// console.log(User["userName"]);
// console.log(User["age"]);
// console.log(User["Number"]=11);

// const user1=Object.create(User);
// user1.userName="chetan";
// console.log(user1.Number);

/*Object to Json -stringify(/)
/*Json to object parse*/
/*Parse and stringify come under JSON*/
//  const UserObj={Name:"Chetan Kumar", Age:20, Number:10};
// const JsonObj=JSON.stringify(UserObj);
//  console.log(JsonObj);

// const obj=JSON.parse(JsonObj);
// console.log(obj);


/*Destructuring in Array*/
// const tester=["Chetan",20];
// const [name,age ]=tester;
// console.log(`${name}`);
// console.log(`${age}`);

/*Destructing in Object*/
// const tester1={Name:"Chetan Kumar","Age":20};
// const {Name,Age}=tester1;
// console.log(Name);
// console.log(Age);

/* Rename key*/
// const tester={Name:"Chetan Kumar",Age:20};
// const {Age:Value}= tester;
// console.log(Value);

/*Spread operator*/
// let spreadOp=(a,b,c)=>{
//     return a+b+c;
// }
// let arr1=[1,2,3];
// let ans=spreadOp(...arr1);
// console.log(ans);


/*Learn forEach loop*/
// values=[1,2,3];
// values.forEach(v=>console.log("Values of v=",v));
/*freeze to stop the modification of key values*/
/*Shallow copy and deep copy keep in mind*/
/*Structured clone means deep copy*/
/*Spread opertor is used for shallow copy*/
