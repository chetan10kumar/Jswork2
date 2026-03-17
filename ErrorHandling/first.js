/*If we are writing return in finally than there is not need to write return in finally*/
// function test()
// {
//     try
//     {
//         a=10;
//         b=0;
//         let c=a/b;
//         return c;
//     }
//     catch(e)
//     {
//         console.log(e.name);
//     }
//     finally
//     {
//         a=10;
//         return a;
//     }

// }
// let ans=test();
// console.log(ans);
// /*Throw keyword helps us to create use-built in exceptions*/
// function checkAge(age)
// {
//     if(age<18)
//     {
//         throw new Error("Age must me greate than 18");
//     }
//     return "Access granted"
// }
// try
// {
//     let result=checkAge(15);
//     console.log(result);

// }
// catch(e)
// {
//     console.log("It is Custom exception");
//     console.log(e.name);
// }

/*In above example we have create custom exception*/
/*Now we create custom class exception*/
// class ValidationException extends Error
// {
//     constructor(message)
//     {
//         super(message);
        
//     }
// }
// function validate(email)
// {
//     if(!email.includes("@"))
//     {
//         throw new ValidationException("Invalid email Format");
//     }
//     return "Valid Format";
// }
// try{
//     let email="chetan123";
//     let result=validate(email);
//     console.log(result);
// }
// catch(error)
// {
//     if(error instanceof ValidationException )
//     {
//         console.log("Validation error",error.message);
//     }
//     else
//     {
//         console.log("Unknown error occured:",error.message);
//     }
// }
/*Custom class for password and username*/
// class UsernameException extends Error
// {
//     constructor(username)
//     {
//         super(username);
//     }
// }
// class PasswordException extends Error
// {
//     constructor(password)
//     {
//         super(password);
//     }
// }
// function validateUsername(username,password)
// {
//     if((username!="David") && (password!=123))
//     {
//         throw new PasswordException("Wrong Username and Password");
//     }
//     return "Correct Username and Correct Password";
// }
// try
// {
//     let username="David";
//     let password=12;
//     let result=validateUsername(username,password);
//     console.log(result);
// }
// catch(error)
// {
//     if(error instanceof PasswordException)
//     {
//         console.log("Username Error",error.name);
//     }
//     else
//     {
//         console.log("Unknown Error",error.message);
//     }
// }
/*Please maintain minimum account balance by custom class exception*/
// class  DepositException extends Error
// {
//     constructor(enteredAmount,balance)
//     {
//         super(enteredAmount,balance);
//     }
// }
// function DepositValidation(enteredAmount,balance)
// {
    
//     if(eneteredAmount==0)
//     {
//         throw new DepositException("You have enetred zero amount");
//     }
//     return "You have entred amount greater than zero";
// }
// try
// {
//     let enetredAmount=0;
//     let ans=DepositException(enetredAmount);
//     console.log(ans);
// }
// catch(error)
// {
//     if(error instanceof DepositException)
//     {
//         console.log("Username Error",username.error);
//     }
//     else
//     {
//         console.log("Unkown error",error.message);
//     }
// }
/*TimeEnd use to check performance of the loop*/
/*Debugging techniques*/
/*Custom class for user is entering amount i.e less tha zero*/
/*A breakpoint is a debugging tools that stops the execution of program at some specific line*/
// Custom Exception Class
class AmountException extends Error
{
    constructor(message)
    {
        super(message);
    }
}

function withdraw(balance, amount)
{
    if(amount > balance)
    {
        throw new AmountException("Insufficient Balance. Amount cannot be less than zero.");
    }

    balance = balance - amount;
    return "Remaining Balance: " + balance;
}

try
{
    let balance = 5000;
    let amount = 6000;

    let result = withdraw(balance, amount);
    console.log(result);
}
catch(error)
{
    if(error instanceof AmountException)
    {
        console.log("Amount Error:", error.message);
    }
    else
    {
        console.log("Unknown Error:", error.message);
    }
}
