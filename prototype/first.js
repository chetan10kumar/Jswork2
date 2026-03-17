/*Prototype is an another way to achieve inheritance*/
/*Objects can inherit the properties and method of one object to another*/
/*Accessing the properties of super classes is only due to the prototype*/
/*Inherting the properties of existing object or super object is called as protoype which automatically acees in other object*/
/*Prototype prevent use to reassigning the value for different object*/
class Employe
{
    data(id,name)
    {
        this.id=id;
        this.name=name;
        
    }
    
}
Employe.prototype.salary=5000;
let obj1=new Employe(10,"Chetan");
console.log(obj1.id,obj1.name,obj1.salary);

