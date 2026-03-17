// Custom Error Class
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

// Constructor Function
function BankAccount(accountNo, balance) {
    this.accountNo = accountNo;
    this.balance = balance;
}

// Deposit Method
BankAccount.prototype.deposit = function(amount) {
    this.balance += amount;
    console.log("Deposited:", amount);
};

// Withdraw Method
BankAccount.prototype.withdraw = function(amount) {
    if (amount > this.balance) {
        throw new CustomError("Insufficient Funds");
    }
    this.balance -= amount;
    console.log("Withdrawn:", amount);
};

// Display Balance Method
BankAccount.prototype.displayBalance = function() {
    console.log("Account No:", this.accountNo);
    console.log("Current Balance:", this.balance);
};

// Creating Accounts
let account1 = new BankAccount(101, 5000);
let account2 = new BankAccount(102, 2000);

// Performing Transactions
try {
    account1.deposit(1000);
    account1.withdraw(2000);
    account1.displayBalance();

    account2.withdraw(3000); // This will throw error
} 
catch (error) {
    console.log("Error:", error.message);
}

// More operations
account2.deposit(500);
account2.displayBalance();