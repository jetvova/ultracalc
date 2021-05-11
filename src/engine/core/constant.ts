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
        return this.value; 
    }
    
    toString(): String { 
        return this.value.toString();
    }
}
