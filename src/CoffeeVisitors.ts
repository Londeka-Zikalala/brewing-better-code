export interface Coffee {
  accept(visitor: CoffeeVisitor): void;
}

export class Espresso implements Coffee {
  accept(visitor: CoffeeVisitor): void {
    visitor.visitEspresso(this);
  }

  cost(): number {
    return 3.0;
  }

  calories(): number {
    return 50;
  }
}

export class Latte implements Coffee {
  accept(visitor: CoffeeVisitor): void {
    visitor.visitLatte(this);
  }

  cost(): number {
    return 4.5;
  }

  calories(): number {
    return 150;
  }
}

export class Cappuccino implements Coffee {
  accept(visitor: CoffeeVisitor): void {
    visitor.visitCappuccino(this);
  }

  cost(): number {
    return 4.0;
  }

  calories(): number {
    return 100;
  }
}
 
 
 export interface CoffeeVisitor {
    visitEspresso(espresso: Espresso): void;
    visitLatte(latte: Latte): void;
    visitCappuccino(cappuccino: Cappuccino): void;
  }
  
  export class DiscountVisitor implements CoffeeVisitor {
    visitEspresso(espresso: Espresso): void {
      console.log(`Espresso cost after discount: ${(espresso.cost() * 0.9).toFixed(3)}`);
    }
  
    visitLatte(latte: Latte): void {
      console.log(`Latte cost after discount: ${(latte.cost() * 0.85).toFixed(3)}`);
    }
  
    visitCappuccino(cappuccino: Cappuccino): void {
      console.log(`Cappuccino cost after discount: ${(cappuccino.cost() * 0.8).toFixed(3)}`);
    }
  }
  
  export class CalorieVisitor implements CoffeeVisitor {
    visitEspresso(espresso: Espresso): void {
      console.log(`Espresso has ${espresso.calories()} calories`);
    }
  
    visitLatte(latte: Latte): void {
      console.log(`Latte has ${latte.calories()} calories`);
    }
  
    visitCappuccino(cappuccino: Cappuccino): void {
      console.log(`Cappuccino has ${cappuccino.calories()} calories`);
    }
  }