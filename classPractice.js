
// function show()
// {
//     var a=10;
//     if(a>0)
//     {
//         var b=20;        //Accessible only in the range of block parenthesis
//         console.log("It is block scoped=",b);
//     }
//     console.log("It is functional scoped=",a);
//     console.log(b)     //Accessible within the scope of function parenthesis
// }
// show();

// const a=10;
// a=20;
// console.log(a)
const student={
    Name:"Chetan",
    age:20,
    isPass:true,
    salary:2000
};
student["Name"]="Lavi";
student["salary"]=3000;

console.log(student);
console.log(student)

let a=10;
let b=console.log(a.toString());
console.log(typeof(b));

/*Function to calculate number of vowels and consonants*/
let countV=0;
let countC=0;
let countVowels=(str)=>{
    for(let i=0;i<str.length;i++)
    {
        if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u')
        {
            countV++;
        }
    }
    return countV;
}
let countConsonants=(str)=>
{
    for(let i=0;i<str.length;i++)
    {
        if(str[i]!='a' && str[i]!='e' && str[i]!='i' && str[i]!='o' && str[i]!='u')
        {
            countC++;
        }
    }
    return countC;
}
let result1=countVowels("Chetan Kumar");
let result2=countConsonants("Chetan Kumar");
console.log("Number of vowels=",result1);
console.log("Number of Consonants=",result2);
