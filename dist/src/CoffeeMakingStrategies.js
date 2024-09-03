"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PourOverStrategy = exports.FrenchPressStrategy = exports.EspressoStrategy = void 0;
// The `EspressoStrategy` class implements the BrewingStrategy interface and provides the specific brewing process for an espresso machine.
class EspressoStrategy {
    brew() {
        return 'Brewing coffee with an espresso machine.';
    }
}
exports.EspressoStrategy = EspressoStrategy;
// The `FrenchPressStrategy class implements the BrewingStrategy interface and provides the specific brewing process for a french press.
class FrenchPressStrategy {
    brew() {
        return 'Brewing coffee with a french press.';
    }
}
exports.FrenchPressStrategy = FrenchPressStrategy;
class PourOverStrategy {
    brew() {
        return 'Brewing coffee by pouring over';
    }
}
exports.PourOverStrategy = PourOverStrategy;
