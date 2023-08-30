// Exercise 2: Bank Account Management
/*
Build a simple banking system using TypeScript classes.
Implement an abstract class BankAccount with encapsulated balance and methods for deposit and withdrawal.
Create subclasses SavingsAccount and CheckingAccount with specific interest rates and overdraft limits.
*/

abstract class BankAccount {
    constructor (protected balance: number) {
        if(balance >= 0) {
            this.balance = balance
        }
        else {
            throw new Error('Initial balance cannot be negative!')
        }
    }


    public getBalance(): number {
        return this.balance;
    }

    public deposit(amount: number): void {
        if(amount > 0) {
            this.balance += amount;
            console.log(`You\'ve successfully deposited funds. Your balance now is: ${this.balance}`);
        }
        else {
            throw new Error('You can deposit only positive amount of money!')
        }
    }

    public abstract withdrawal(amount: number): void;
}





class CheckingAccount extends BankAccount {

    constructor (initialBalance: number, private overdraftLimit: number) {
        super(initialBalance);
        this.overdraftLimit = overdraftLimit;
    }

    withdrawal(amount: number): void {
        if (this.getBalance() + this.overdraftLimit >= amount && amount > 0) {
            this.balance -= amount;
            console.log(`You\'ve successfully withdrawn funds. Your balance now is: ${this.balance}`);
        }
        else {
            console.log('Insufficient funds on your bank account or you want to withdraw negative value!')
        }
    }
    }




class SavingsAccount extends BankAccount {
    constructor (initialBalance: number, private interestRate: number) {
        super(initialBalance);
        this.interestRate = interestRate;
    }

    withdrawal(amount: number): void {
        if (this.getBalance() >= amount && amount > 0) {
            this.balance -= amount;
            console.log(`You\'ve successfully withdrawn funds. Your balance now is: ${this.balance}`);
        }
        else {
            console.log('Insufficient funds on your bank account or you want to withdraw negative value!')
        }
    }


    applyInterest(): void {
        const interest = this.balance * this.interestRate /100;
        this.deposit(interest);
    }
}



const account1 = new CheckingAccount(120, 100);
account1.deposit(20)
console.log(account1.withdrawal(220));

const account2 = new SavingsAccount(190, 5);
account2.deposit(10)
account2.applyInterest();
account2.withdrawal(210)


