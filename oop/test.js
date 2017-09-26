import {describe, it} from 'mocha';
import chai, {assert} from 'chai';
import Account from '../oop/main.js';
import SavingsAccount from '../oop/main.js';


describe("Account", () => {
  let account = new account("Anjola", 12345, 10000 );
  it("should be an instance Account class", () =>{
    assert.instance(account, Account,);
  });
  it("should return the name of the account", () =>{
    assert.equal(account.name, "Anjola");
  });
  it("should return number of the account", () =>{
    assert.equal(account.number, 12345);
  });
  it("should return balance of the account", () =>{
    assert.equal(account.balance, 10000);
  });
})

describe("SavingsAccount", () => {
  let account = new account("Anjola", 12345, 10000, 0.5);
  it("should be an instance Account class", () =>{
    assert.instance(account, Account,);
  });
  it("should return the name of the account", () =>{
    assert.equal(account.name, "Anjola");
  });
  it("should return number of the account", () =>{
    assert.equal(account.number, 12345);
  });
  it("should return interest of the account", () =>{
    assert.equal(account.balance, 0.5);
  });
  it("should return balance of the account", () =>{
    assert.equal(account.balance, 10500);
  });
})