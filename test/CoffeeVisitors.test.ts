import { Latte } from "../src/CoffeeVisitors";
import { Espresso } from "../src/CoffeeVisitors";
import { Cappuccino } from "../src/CoffeeVisitors";
import { DiscountVisitor } from "../src/CoffeeVisitors";
import { CalorieVisitor } from "../src/CoffeeVisitors";
import assert from "assert";
import sinon from "sinon";

describe('The CoffeeVisitors classes', ()=>{
    let consoleSpy: sinon.SinonSpy;

    // Set up the spy before each test
    beforeEach(function () {
      consoleSpy = sinon.spy(console, 'log');
    });
  
    // Restore the original console.log after each test
    afterEach(function () {
      consoleSpy.restore();
    });

   // Tests for Espresso, Cappucino and Latte classes only using the DiscountVisitor
   it('should apply the correct discount to an Espresso', function () {
    const espresso = new Espresso();
    const discountVisitor = new DiscountVisitor();

    espresso.accept(discountVisitor);

    assert.strictEqual(consoleSpy.callCount, 1);
    assert(consoleSpy.calledWithExactly('Espresso cost after discount: 2.700'));
  });

  it('should apply the correct discount to a Latte', function () {
    const latte = new Latte();
    const discountVisitor = new DiscountVisitor();

    latte.accept(discountVisitor);

    assert.strictEqual(consoleSpy.callCount, 1);
    assert(consoleSpy.calledWithExactly('Latte cost after discount: 3.825'));
  });

  it('should apply the correct discount to a Cappuccino', function () {
    const cappuccino = new Cappuccino();
    const discountVisitor = new DiscountVisitor();

    cappuccino.accept(discountVisitor);

    assert.strictEqual(consoleSpy.callCount, 1);
    assert(consoleSpy.calledWithExactly('Cappuccino cost after discount: 3.200'));
  });

  // Tests for  Espresso, Latte and Cappuccino classes using with CalorieVisitor
  it('should calculate the correct calories for an Espresso', function () {
    const espresso = new Espresso();
    const calorieVisitor = new CalorieVisitor();

    espresso.accept(calorieVisitor);

    assert(consoleSpy.calledOnce);
    assert(consoleSpy.calledWithExactly('Espresso has 50 calories'));
  });

  it('should calculate the correct calories for a Latte', function () {
    const latte = new Latte();
    const calorieVisitor = new CalorieVisitor();

    latte.accept(calorieVisitor);

    assert(consoleSpy.calledOnce);
    assert(consoleSpy.calledWithExactly('Latte has 150 calories'));
  });

  it('should calculate the correct calories for a Cappuccino', function () {
    const cappuccino = new Cappuccino();
    const calorieVisitor = new CalorieVisitor();

    cappuccino.accept(calorieVisitor);

    assert(consoleSpy.calledOnce);
    assert(consoleSpy.calledWithExactly('Cappuccino has 100 calories'));
  });

// Test for Latte, Cappuccino and Espresso classes using both CalorieVisitor and DiscountVisitor

it('should apply the DiscountVisitor and CalorieVisitor to each coffee type', function () {
    const espresso = new Espresso();
    const latte = new Latte();
    const cappuccino = new Cappuccino();
    const discountVisitor = new DiscountVisitor();
    const calorieVisitor = new CalorieVisitor();

    espresso.accept(discountVisitor);
    espresso.accept(calorieVisitor);
    assert(consoleSpy.calledWithExactly('Espresso cost after discount: 2.700'));
    assert(consoleSpy.calledWithExactly('Espresso has 50 calories'));

    latte.accept(discountVisitor);
    latte.accept(calorieVisitor)
    assert(consoleSpy.calledWithExactly('Latte cost after discount: 3.825'));
    assert(consoleSpy.calledWithExactly('Latte has 150 calories'));

    cappuccino.accept(discountVisitor);
    cappuccino.accept(calorieVisitor);
    assert(consoleSpy.calledWithExactly('Cappuccino cost after discount: 3.200'));
    assert(consoleSpy.calledWithExactly('Cappuccino has 100 calories'));
  });

})
