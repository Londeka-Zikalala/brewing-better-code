import { CoffeeBuilder } from '../src/CoffeeBuilder';
import { CoffeeDirector } from '../src/CoffeeDirector';
import  assert from 'assert';

describe('CoffeeBuilder', () => {
    it('should build a simple coffee with specific properties', () => {
        const coffee = new CoffeeBuilder()
            .setType('Cappuccino')
            .setSize('Large')
            .addSugar(1)
            .addMilk()
            .build();

        assert.equal(coffee.type, 'Cappuccino');
        assert.equal(coffee.size, 'Large');
        assert.equal(coffee.sugar, 1);
        assert.equal(coffee.milk, true);
    });

    it('should build a black coffee with no milk or sugar', () => {
        const coffee = new CoffeeBuilder()
            .setType('Black Coffee')
            .setSize('Small')
            .addSugar(0)
            .build();

        assert.equal(coffee.type, 'Black Coffee');
        assert.equal(coffee.size, 'Small');
        assert.equal(coffee.sugar, 0);
        assert.equal(coffee.milk, false);
    });

    it('should use the director to create an Espresso', () => {
        const director = new CoffeeDirector(new CoffeeBuilder());
        const coffee = director.makeEspresso().build();

        assert.equal(coffee.type, 'Espresso');
        assert.equal(coffee.size, 'Small');
        assert.equal(coffee.sugar, 1);
        assert.equal(coffee.milk, true);
    });

    it('should use the director to create a Latte', () => {
        const director = new CoffeeDirector(new CoffeeBuilder());
        const coffee = director.makeLatte().build();

        assert.equal(coffee.type, 'Latte');
        assert.equal(coffee.size, 'Large');
        assert.equal(coffee.sugar, 2);
        assert.equal(coffee.milk, true);
    });
});
