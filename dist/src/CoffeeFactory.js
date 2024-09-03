"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CoffeeFactory {
    // Private constructor to prevent instantiation
    constructor() { }
    // Method to get the singleton instance
    static getInstance() {
        if (!CoffeeFactory.instance) {
            CoffeeFactory.instance = new CoffeeFactory();
        }
        return CoffeeFactory.instance;
    }
    // Example method to simulate brewing coffee
    brewCoffee(type) {
        return `Brewing a cup of ${type}`;
    }
}
exports.default = CoffeeFactory;
