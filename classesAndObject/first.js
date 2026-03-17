// class student
// {
//     constructor()
//     {
//         id=100;
//         name="Chetan";
//         console.log(this.id,+" ",this.name)
//     }
//     id=10;
//     name="Chetan Kumar";

//     display()
//     {
//         console.log(this.id,this.name);
//     }
// }
// let obj=new student();
// obj.display();

/*Inheritance*/
// class add
// {
//     display()
//     {
//         console.log("Hello Chetan");
//     }

// }
// class sub extends add
// {
//     show()
//     {
//         console.log("Hello Lavi");
//     }


// }
// let obj=new sub();
// obj.display();
// obj.show();
/*Multilevel Inheritance*/
// class add
// {

//     add(a,b)
//     {
//         this.a=a
//         this.b=b
//        let c=this.a+this.b;
//         console.log("Addition of two numbers=",c);
//     }

// }
// class sub extends add
// {

//     sub(a,b)
//     {
//         let c=this.a-this.b;
//         console.log("Subtraction of two numbers=",c);
//     }

// }
// class mul extends sub
// {

//     mul(a,b)
//     {
//        let c=this.a*this.b;
//         console.log("Multiplication of two numbers=",c);
//     }

// }
// let obj=new mul();
// obj.add(20,10);
// obj.sub(20,10);
// obj.mul(20,10);
/*Heirarchcial inheritance*/
// class A
// {
//     add(a,b)
//     {
//         this.a=a;
//         this.b=b;
//         let c=this.a+this.b;
//         console.log("Addition of two numbers=",c);
//     }

// }
// class B extends A
// {
//     sub(a,b)
//     {
//         this.a=a;
//         this.b=b;
//         let c=this.a-this.b;
//         console.log("Subtraction of two numbers=",c);
//     }
// }
// class C extends A
// {
//     mul(a,b)
//     {
//         this.a=a;
//         this.b=b;
//         let c=this.a*this.b;
//         console.log("Multiplication of two numbers=",c);

//     }
// }
// let obj1=new B();
// obj1.add(20,10);
// obj1.sub(20,10);
// let obj2=new C();
// obj2.add(40,30);
// obj2.mul(20,10);
/*Super keyword will be used in parameterized constructor*/
// class Animal
// {
//     constructor(name)
//     {
//         this.name=name;
//     }

// }
// class Dog extends Animal
// {
//     constructor(name,breed)
//     {
//         super(name);
//         this.breed=breed;
//     }
// }
// let obj1=new Dog("Dog","Brown");
// console.log(obj1.name);
// console.log(obj1.breed);
/*Super usecase for method*/
// class Animal
// {
//     sound()
//     {
//         console.log("Sound of animal")
//     }
// }
// class Dog extends Animal
// {
//     Bark()
//     {
//         super.sound();
//         console.log("Dog always Bark")
//     }
// }
// let obj1=new Dog();
// obj1.Bark();
/*Set prototype method usage see it*/
/*Set prototype helps to make relation between two objects*/
/*Method Overriding*/
// class Bank {
//     rateOfIntrest() {
//         throw new Error("Must Implement");
//     }
// }
// class sbi extends Bank {
//     basic = 5000;
//     rateOfIntrest() {

//         let intrest = (this.basic) * 10 / 100;
//         let basic = this.basic - intrest;
//         console.log(`${basic}`)
//     }

// }
// let obj1 = new sbi();
// obj1.rateOfIntrest();
/*Method overloading can be achieved by rest operator*/
class overload
{
    sum(...args)
    {
        if(args.length==2)
        {
            return args[0]+args[1];

        }
        else if(args.length==3)
        {
            return args[0]+args[1]+args[2];
        }
        else
        {
            return 0;
        }
    }
}
let obj1=new overload();
console.log(obj1.sum(10,20));
console.log(obj1.sum(10,20,30));