/*First Question*/
// class bankAccount
// {
//     deposit(value)
//     {
//         if(value<=0)
//         {
//             return 0;
//         }
//         this.value=value;
//         return value;
//     }
//     withdraw(value1)
//     {
//         if(value1<=0)
//         {
//             return 0;

//         }
//         this.value1=value1;
//         return value1;

//     }
//     display(finalValue)
//     {
//         if(finalValue<=0)
//         {
//             return 0;
//         }
//         this.finalValue=finalValue;
//         return finalValue;
//     }
// }
// let obj1=new bankAccount();
// let value=1000;
// let ans=obj1.deposit(value);
// console.log(`Deposited Amount=${ans}`);
// let obj2=new bankAccount();
// let value1=500;
// let ans1=obj2.withdraw(value1);
// console.log(`Withraw amount=${value1}`);
// console.log(`Balance after withdrawl=${value-value1}`);
// let finalValue=value-value1;
// let obj3=new bankAccount();
// let ans2=obj3.display(finalValue);
// console.log(`Final Amount display=${ans2}`);




/*Second Question*/
// const PromptSync=require('prompt-sync');
// const prompt=PromptSync();
// class Student
// {
//     studentDetails(name,rollno,marks)
//     {
//         this.name=name;
//         this.rollno=rollno;
//         this.marks=marks;
//         console.log(`Name of the student=${name} \n rollno of the student=${rollno} \n marks of the student=${marks}`);
//     }
//      calculateTotal(marks)
//      {
//         let sum=0;
//         for(let i=0;i<marks.length;i++)
//         {
//             sum=sum+marks[i];
//         }
//         return sum;

//      }


    
//      calculateAverage(marks)
//     {
//         let av=marks.length;
//         let sum=0;
//         for(let i=0;i<marks.length;i++)
//         {   
//             sum=sum+marks[i];

//         }
//         return sum/av;

//      }
//      calaculateGrade(ans1)
//      {
//         let grade;
//         if((ans1>90 && ans1<99))
//         {
//             grade='A';
//         }
//         else if((ans1>80 && ans1<89))
//         {
//             grade='B';
//         }
//         else if ((ans1>70) && ans1<79)
//         {
//             grade='C';
//         }
//         else
//         {
//             grade='F';
//         }
//         return grade;

//     }
// }
// let name=prompt("Enter name of the student:");
// let size=5;
// let marks=new Array(size);
// for(let i=0;i<size;i++)
// {
//     marks[i]=Number(prompt("Enter marks of student=",i));
// }
// let rollno=Number(prompt("Enter rollno:"));
// let obj1=new Student();
// obj1.studentDetails(name,rollno,marks);

// let obj2=new Student();
// let ans=obj2.calculateTotal(marks);
// console.log(`Total marks of the student=${ans}`);

// let obj3=new Student();
// let ans1=obj3.calculateAverage(marks);
// console.log(`Average marks of the student=${ans1}`);

// let obj4=new Student();
// let final=obj4.calaculateGrade(ans1)
// console.log(`Final grade of the student=${final}`);
/*4 Question*/
// class Employee
// {
//     details(name,id,basicSalary)
//     {
//         this.name=name;
//         this.id=id;
//         this.basicSalary=basicSalary;
//         console.log(`Name of the employee=${this.name}`);
//         console.log(`Id of the employee=${this.id}`);
//         console.log(`Basic salary of the employee=${this.basicSalary}`);

//     }
//     hra(basicSalary)
//     {
//         let hra=(basicSalary)*0.1;
//         return hra;
//     }
//     Da(basicSalary)
//     {
//         let da=(basicSalary)*0.15;
//         return da;
//     }
//     netsalary(basicsalary,hra,da)
//     {
//         let final=basicsalary-hra-da;
//         return final;
//     }

// }
// let obj1=new Employee();
// name="Chetan Kumar";
// id=10;
// basicSalary=1000000;
// obj1.details(name,id,basicSalary);
// let hra=obj1.hra(basicSalary);
// console.log(`Hra=${hra}`)
// let da=obj1.Da(basicSalary);
// console.log(`Da=${da}`);
// let netSalary=obj1.netsalary(basicSalary,hra,da);
// console.log(`Net Salary=${netSalary}`);
/*5.) Question Number 5*/
// class CAR
// {
//     model(name)
//     {
//         this.name=name;
//         console.log(name);
//     }
//     rentPerDay(price)
//     {
//         this.price=price;
//         console.log(price);
//     }
// }
// class Rental extends CAR
// {   
    
//     model(name)
//     {
//         return name;
//     }
//     rentPerDay(price)
//     {
//         return price;
//     }
//     totalRent(price,days)
//     {
//         let total=price*days;
//         return total;
        
//     }

// }

// let name="Volkswagen";
// let price=2000;
// let days=3;
// let obj1=new Rental();
// let ans1=obj1.model(name);
// let ans2=obj1.rentPerDay(price);
// let ans3=obj1.totalRent(price,days);

// console.log(`Total Rent=${ans3}`);
// console.log(`Model=${ans1}`);
// console.log(`Day=${ans2}`);
/*6 Question*/
const PromptSync=require('prompt-sync');
const prompt=PromptSync();
class shape
{
    Calcarea()
    {
        console.log("Area of the object");
    }

}
class circle extends shape
{
    Calcarea(r)
    {
        let ans=3.14*r*r;
        return ans;
    }
}
class triangle extends shape
{
    Calcarea(b,h)
    {
        let ans=0.5*b*h;
        return ans;
    }
}
class rectangle extends shape
{
    Calcarea(l,b)
    {
        let ans=l*b;
        return ans;

    }
}
let obj1=new circle();
let obj2=new triangle();
let obj3=new rectangle();
let r=prompt("Enter radius");
let ans1=obj1.Calcarea(r);
let b=prompt("Enter breadth");
let h=prompt("Enter height");
let ans2=obj2.Calcarea(b,h);
let l=prompt("Enter length");
let b1=prompt("Enter breadth");
let ans3=obj3.Calcarea(l,b1);
console.log(`Area of circle=${ans1}`);
console.log(`Area of traingle=${ans2}`);
console.log(`Area of rectangle=${ans3}`);


