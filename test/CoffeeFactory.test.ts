import assert  from 'assert'
import CoffeeFactory from '../src/CoffeeFactory';

describe('CoffeeFactory Tests', function () {

  // Test the instance if it can be used
  it('should return the same instance of CoffeeFactory', function () {
    let CoffeeFactory1 = CoffeeFactory.getInstance();
    let CoffeeFactory2 = CoffeeFactory.getInstance();
        //Instance 1 and 2 must be the same value
    assert.strictEqual(CoffeeFactory1, CoffeeFactory2);
  });

  // Test Brewing Espresso
  it('should brew a cup of espresso', function () {
    const factory = CoffeeFactory.getInstance();
    const result = factory.brewCoffee('espresso');
    assert.strictEqual(result, 'Brewing a cup of espresso');
  });

  // Test Brewing French Press
  it('should brew a cup of french press', function () {
    const factory = CoffeeFactory.getInstance();
    const result = factory.brewCoffee('french-press');
    assert.strictEqual(result, 'Brewing a cup of french-press');
  });

  // Test Brewing Pour Over
  it('should brew a cup of pour-over', function () {
    const factory = CoffeeFactory.getInstance();
    const result = factory.brewCoffee('pour-over');
    assert.strictEqual(result, 'Brewing a cup of pour-over');
  });

  // Test Handling an empty string
  it('should throw an error for unknown coffee type', function () {
    const factory = CoffeeFactory.getInstance();
    const result = factory.brewCoffee('')
    assert.strictEqual(result, 'Brewing a cup of ');

  });
});
