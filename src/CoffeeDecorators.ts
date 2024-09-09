
export interface Coffee {
    cost(): number;
    description(): string;
  }
  
  export class SimpleCoffee implements Coffee {
    cost(): number {
      return 5; // Base price for a simple coffee
    }
  
    description(): string {
      return "Simple coffee";
    }
  }
 
 // Uses coffee interface to add a milk price to the coffee

  export class MilkDecorator implements Coffee {
    private coffee: Coffee;
  
    constructor(coffee: Coffee) {
      this.coffee = coffee;
    }
  
    cost(): number {
      return this.coffee.cost() + 1.5; // Milk adds $1.50 to the base price
    }
  
    description(): string {
      return `${this.coffee.description()}, with milk`;
    }
  }
  // Uses the coffee interface to add sugar price to the coffee
 export class SugarDecorator implements Coffee {
    private coffee: Coffee;
  
    constructor(coffee: Coffee) {
      this.coffee = coffee;
    }
  
    cost(): number {
      return this.coffee.cost() + 0.5; // Sugar adds $0.50 to the base price
    }
  
    description(): string {
      return `${this.coffee.description()}, with sugar`;
    }
  }
  
  //Uses the coffee interfaces to add cream price to the simple coffee

  export class CreamDecorator implements Coffee {
    private coffee: Coffee;
  
    constructor(coffee: Coffee) {
      this.coffee = coffee;
    }
  
    cost(): number {
      return this.coffee.cost() + 1.0; // Cream adds $1.00 to the base price
    }
  
    description(): string {
      return `${this.coffee.description()}, with cream`;
    }
  }