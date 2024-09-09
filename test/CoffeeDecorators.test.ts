import assert from "assert";
import { SimpleCoffee, SugarDecorator } from "../src/CoffeeDecorators";
import { CreamDecorator } from "../src/CoffeeDecorators";
import { MilkDecorator } from "../src/CoffeeDecorators";

describe("The Coffee Decorators tests", ()=>{
    //SimpleCoffee test
    it('should create a simple coffee with base cost and description', function () {
        const coffee = new SimpleCoffee();
        assert.strictEqual(coffee.cost(), 5);
        assert.strictEqual(coffee.description(), 'Simple coffee');
      });

      //Sugar decorator test
      it('should add sugar to the coffee and increase the cost', function () {
        let coffee = new SimpleCoffee();
        coffee = new SugarDecorator(coffee);
    
        assert.strictEqual(coffee.cost(), 5.5);
        assert.strictEqual(coffee.description(), 'Simple coffee, with sugar');
      });

      //Milk Decorator test
      it('should add milk to the coffee and increase the cost', function () {
        let coffee = new SimpleCoffee();
        coffee = new MilkDecorator(coffee);
    
        assert.strictEqual(coffee.cost(), 6.5);
        assert.strictEqual(coffee.description(), 'Simple coffee, with milk');
      });
    
        //Cream Decorator test
        it('should add cream to the coffee and increase the cost', function () {
            let coffee = new SimpleCoffee();
            coffee = new CreamDecorator(coffee);
        
            assert.strictEqual(coffee.cost(), 6.0);
            assert.strictEqual(coffee.description(), 'Simple coffee, with cream');
          });

          //test for all combinations
          it('should add milk, sugar, and cream to the coffee and correctly calculate the cost and description', function () {
            let coffee = new SimpleCoffee();
            coffee = new MilkDecorator(coffee);
            coffee = new SugarDecorator(coffee);
            coffee = new CreamDecorator(coffee);
        
            assert.strictEqual(coffee.cost(), 8.0);
            assert.strictEqual(coffee.description(), 'Simple coffee, with milk, with sugar, with cream');
          });
})
