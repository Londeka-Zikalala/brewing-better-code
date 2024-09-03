//The Coffee class contains all the properties that define a cup of coffee. These properties will be set using the builder.

export default class Coffee {
    public type: string;
    public size: string;
    public sugar: number;
    public milk: boolean;

    constructor() {
        this.type = '';
        this.size = '';
        this.sugar = 0;
        this.milk = false;
    }
}