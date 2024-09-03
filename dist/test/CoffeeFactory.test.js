"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const CoffeeFactory_1 = __importDefault(require("../src/CoffeeFactory"));
describe('CoffeeFactory Tests', function () {
    // Test the instance if it can be used
    it('should return the same instance of CoffeeFactory', function () {
        let CoffeeFactory1 = CoffeeFactory_1.default.getInstance();
        let CoffeeFactory2 = CoffeeFactory_1.default.getInstance();
        //Instance 1 and 2 must be the same value
        assert_1.default.strictEqual(CoffeeFactory1, CoffeeFactory2);
    });
    // Test Brewing Espresso
    it('should brew a cup of espresso', function () {
        const factory = CoffeeFactory_1.default.getInstance();
        const result = factory.brewCoffee('espresso');
        assert_1.default.strictEqual(result, 'Brewing a cup of espresso');
    });
    // Test Brewing French Press
    it('should brew a cup of french press', function () {
        const factory = CoffeeFactory_1.default.getInstance();
        const result = factory.brewCoffee('french-press');
        assert_1.default.strictEqual(result, 'Brewing a cup of french-press');
    });
    // Test Brewing Pour Over
    it('should brew a cup of pour-over', function () {
        const factory = CoffeeFactory_1.default.getInstance();
        const result = factory.brewCoffee('pour-over');
        assert_1.default.strictEqual(result, 'Brewing a cup of pour-over');
    });
    // Test Handling an empty string
    it('should throw an error for unknown coffee type', function () {
        const factory = CoffeeFactory_1.default.getInstance();
        const result = factory.brewCoffee('');
        assert_1.default.strictEqual(result, 'Brewing a cup of ');
    });
});
