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

    simplifyInnermost(): Expression {
        return this;
    }

    getNumberIfConstant(): number | undefined {
        return this.value;
    }

    toString(): string { 
        return this.value.toString();
    }
}
