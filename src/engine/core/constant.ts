import { Expression } from "./expression";

export class Constant extends Expression {
    value: number;
    
    constructor(value: number) {
        super();
        this.value = value;
    }
    
    canEvaluate(): boolean {
        return true;
    } 

    evaluate(): number {
        // console.log(`Constant: ${this.value}`);
        return this.value;
    }
    
    toString(): String { 
        return this.value.toString();
    }
}
