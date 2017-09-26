

export  class Account { 
  constructor(accountName, accountNumber, accountBalance) {
    this.name = accountName;
    this.number = accountNumber;
    this.balance = accountBalance;
    
  }
  
  balance() {
    return "Your balance is" + this.balance;
  }
  
  
export class SavingsAccount extends Account {
    constructor (accountName, accountNumber, accountBalance, accountInterest){
        super (accountName, accountNumber, accountBalance);
        this.interest = accountInterest;
}
calcBalance() {
    return this.balance += (this.balance * interest);
  }
  
}




export default Account;
