// Exercise 2: Bank Account Management
/*
Build a simple banking system using TypeScript classes.
Implement an abstract class BankAccount with encapsulated balance and methods for deposit and withdrawal.
Create subclasses SavingsAccount and CheckingAccount with specific interest rates and overdraft limits.
*/

abstract class BankAccount {
    // abstract balance: number;
    abstract deposit(amount: number): void;
    abstract withdrawal(amount: number): void;
}

class CheckingAccount extends BankAccount {
    constructor (private balance: number) {
        super();
        this.balance = balance;
    }

    deposit(amount: number): void {
        this.balance += amount;
        console.log(`You\'ve successfully deposited funds. Your balance now is: ${this.balance}`);
    }

    withdrawal(amount: number): void {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`You\'ve successfully withdrawn funds. Your balance now is: ${this.balance}`);
        }
        else {
            console.log('You don\'t have enough money on your bank account!')
        }
    }
}

const account1 = new CheckingAccount(120.22);
console.log(account1.deposit(122));
