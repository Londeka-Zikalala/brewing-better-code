import assert from 'assert';
import CoffeeMaker from '../src/CoffeeMaker';
import { EspressoStrategy } from '../src/CoffeeMakingStrategies';
import { FrenchPressStrategy } from '../src/CoffeeMakingStrategies';
import { PourOverStrategy } from '../src/CoffeeMakingStrategies';

describe('CoffeeMaker Tests', function () {

  // Test Brewing Coffee with Espresso Strategy
  it('should brew coffee using the Espresso Strategy', function () {
    const espressoStrategy = new EspressoStrategy();
    const coffeeMaker = new CoffeeMaker(espressoStrategy);

    const result = coffeeMaker.brewCoffee();
    assert.equal(result, 'Brewing coffee with an espresso machine.');
  });

  // Test Brewing Coffee with French Press Strategy
  it('should brew coffee using the French Press Strategy', function () {
    const frenchPressStrategy = new FrenchPressStrategy();
    const coffeeMaker = new CoffeeMaker(frenchPressStrategy);

    const result = coffeeMaker.brewCoffee();
    assert.equal(result, 'Brewing coffee with a french press.');
  });

  // Test Brewing Coffee with Pour Over Strategy
  it('should brew coffee using the Pour Over Strategy', function () {
    const pourOverStrategy = new PourOverStrategy();
    const coffeeMaker = new CoffeeMaker(pourOverStrategy);

    const result = coffeeMaker.brewCoffee();
    assert.equal(result, 'Brewing coffee by pouring over');
  });

  // Test Switching Brewing Strategies at Runtime
  it('should switch brewing strategies at runtime', function () {
    const espressoStrategy = new EspressoStrategy();
    const frenchPressStrategy = new FrenchPressStrategy();
    const pourOverStrategy = new PourOverStrategy();

    const coffeeMaker = new CoffeeMaker(espressoStrategy);

    // Initially, it should brew using the Espresso Strategy
    let result = coffeeMaker.brewCoffee();
    assert.equal(result, 'Brewing coffee with an espresso machine.');

    // Switch to French Press Strategy
    coffeeMaker.setStrategy(frenchPressStrategy);
    result = coffeeMaker.brewCoffee();
    assert.equal(result, 'Brewing coffee with a french press.');

    // Switch to Pour Over Strategy
    coffeeMaker.setStrategy(pourOverStrategy);
    result = coffeeMaker.brewCoffee();
    assert.equal(result, 'Brewing coffee by pouring over');
  });
});
