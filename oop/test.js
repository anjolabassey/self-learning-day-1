import {describe, it} from 'mocha';
import chai, {assert} from 'chai';
import calcDeposit from '../oop/main.js'
import calcWithdraw from '../oop/main.js'
import calcBalance from '../oop/main.js'


describe("calcDeposit", () => {

  it("should return 11200 if argument is 1200", () =>{
    let input = calcDeposit(1200);
    assert.equal(input, 11200,);
  });
  

  it("should return 10000 if argument is 0", () =>{
    let input = calcDeposit(0);
    assert.equal(input, 10000, `Geometric`);
  });

  it("should return 20000 if argument is 10000", () =>{
    let input = calcDeposit(10000);
    assert.equal(input, 20000, `Geometric`);
  });

});
describe("calcWithraw", () => {

   it("should return 'Insufficient Balance Available' if argument is 10000", () => {
    let input = calcWithdraw(10000);
    assert.equal(input, "Insufficient Balance Available",);
   });

   it("should return 8000 if the argument is 2000", () => {
     let input = calcWithdraw(2000);
     assert.equal(input, 8000);
   });

   it("should return 5000 if the argument is 5000", () => {
      let input = calcWithdraw(5000);
      assert.equal(input, 5000);
   });

});
describe("calcBalance", () => {

  it("should return 10500 if the argument is 0.05", () =>{
    let input = calcBalance(0.05);
    assert.equal(input, 0, );
  });
  

  it("should return 1100 if the argument is 0.1", () =>{
    let input = calcBalance(0.1);
    assert.equal(input, -1, );
  });
});
