"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CoffeeMaker {
    constructor(strategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    brewCoffee() {
        return this.strategy.brew();
    }
}
exports.default = CoffeeMaker;
