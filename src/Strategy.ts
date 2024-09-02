import BrewingStrategy from './BrewingStrategy';

// The `EspressoStrategy` class implements the BrewingStrategy interface and provides the specific brewing process for an espresso machine.

export  class EspressoStrategy implements BrewingStrategy {
  public brew(): string {
    return 'Brewing coffee with an espresso machine.';
  }
}

// The `FrenchPressStrategy class implements the BrewingStrategy interface and provides the specific brewing process for a french press.
export class FrenchPressStrategy implements BrewingStrategy{
  public brew(): string {
    return 'Brewing coffee with a french press.';
  }
}

export class PourOverStrategy implements BrewingStrategy{
  public brew(): string {
    return 'Brewing coffee by pouring over';
  }
}