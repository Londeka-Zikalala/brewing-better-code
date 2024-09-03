// The CoffeeBuilder class provides a fluent interface to build a Coffee object step by step. 
//Each method sets a property of the Coffee object and returns the builder itself.

import Coffee from "./Coffee";

export class CoffeeBuilder {
    private coffee: Coffee;

    constructor() {
        this.coffee = new Coffee();
    }

    public setType(type: string): CoffeeBuilder {
        this.coffee.type = type;
        return this;
    }

    public setSize(size: string): CoffeeBuilder {
        this.coffee.size = size;
        return this;
    }

    public addSugar(sugar: number): CoffeeBuilder {
        this.coffee.sugar = sugar;
        return this;
    }

    public addMilk(): CoffeeBuilder {
        this.coffee.milk = true;
        return this;
    }

    public build(): Coffee {
        return this.coffee;
    }
}