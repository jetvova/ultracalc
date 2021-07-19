import { Expression } from "./expression";
import { Variable } from "./variable";

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

    solveInnermost(): Expression {
        return this;
    }

    searchFor(target: Variable): number {
        return -2;
    }

    getChild(direction: number): Expression {
        console.log(`Invalid child direction to go into: ${direction}`);
        return this;
    }

    invertAndInsert(direction: number, newChild: Expression): Expression {
        throw new Error("invertAndInsert NYI");
    }

    getNumberIfConstant(): number | undefined {
        return this.value;
    }

    toString(): string { 
        return (Math.round((this.value + Number.EPSILON) * 10000) / 10000).toString();
    }
}
