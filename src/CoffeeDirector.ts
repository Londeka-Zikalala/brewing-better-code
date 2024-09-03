//The CoffeeDirector class simplifies the process of creating specific types of coffee by providing predefined configurations.

import { CoffeeBuilder } from './CoffeeBuilder';

export class CoffeeDirector {
    private builder: CoffeeBuilder;

    constructor(builder: CoffeeBuilder) {
        this.builder = builder;
    }

    public makeEspresso(): CoffeeBuilder {
        return this.builder.setType('Espresso').setSize('Small').addSugar(1).addMilk();
    }

    public makeLatte(): CoffeeBuilder {
        return this.builder.setType('Latte').setSize('Large').addSugar(2).addMilk();
    }
}