"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const CoffeeMaker_1 = __importDefault(require("../src/CoffeeMaker"));
const CoffeeMakingStrategies_1 = require("../src/CoffeeMakingStrategies");
const CoffeeMakingStrategies_2 = require("../src/CoffeeMakingStrategies");
const CoffeeMakingStrategies_3 = require("../src/CoffeeMakingStrategies");
describe('CoffeeMaker Tests', function () {
    // Test Brewing Coffee with Espresso Strategy
    it('should brew coffee using the Espresso Strategy', function () {
        const espressoStrategy = new CoffeeMakingStrategies_1.EspressoStrategy();
        const coffeeMaker = new CoffeeMaker_1.default(espressoStrategy);
        const result = coffeeMaker.brewCoffee();
        assert_1.default.equal(result, 'Brewing coffee with an espresso machine.');
    });
    // Test Brewing Coffee with French Press Strategy
    it('should brew coffee using the French Press Strategy', function () {
        const frenchPressStrategy = new CoffeeMakingStrategies_2.FrenchPressStrategy();
        const coffeeMaker = new CoffeeMaker_1.default(frenchPressStrategy);
        const result = coffeeMaker.brewCoffee();
        assert_1.default.equal(result, 'Brewing coffee with a french press.');
    });
    // Test Brewing Coffee with Pour Over Strategy
    it('should brew coffee using the Pour Over Strategy', function () {
        const pourOverStrategy = new CoffeeMakingStrategies_3.PourOverStrategy();
        const coffeeMaker = new CoffeeMaker_1.default(pourOverStrategy);
        const result = coffeeMaker.brewCoffee();
        assert_1.default.equal(result, 'Brewing coffee by pouring over');
    });
    // Test Switching Brewing Strategies at Runtime
    it('should switch brewing strategies at runtime', function () {
        const espressoStrategy = new CoffeeMakingStrategies_1.EspressoStrategy();
        const frenchPressStrategy = new CoffeeMakingStrategies_2.FrenchPressStrategy();
        const pourOverStrategy = new CoffeeMakingStrategies_3.PourOverStrategy();
        const coffeeMaker = new CoffeeMaker_1.default(espressoStrategy);
        // Initially, it should brew using the Espresso Strategy
        let result = coffeeMaker.brewCoffee();
        assert_1.default.equal(result, 'Brewing coffee with an espresso machine.');
        // Switch to French Press Strategy
        coffeeMaker.setStrategy(frenchPressStrategy);
        result = coffeeMaker.brewCoffee();
        assert_1.default.equal(result, 'Brewing coffee with a french press.');
        // Switch to Pour Over Strategy
        coffeeMaker.setStrategy(pourOverStrategy);
        result = coffeeMaker.brewCoffee();
        assert_1.default.equal(result, 'Brewing coffee by pouring over');
    });
});
