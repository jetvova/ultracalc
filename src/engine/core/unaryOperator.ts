import { Constant } from "./constant";
import { Variable } from "./variable";
import { Expression } from "./expression";

export abstract class UnaryOperator extends Expression {
    public readonly symbol: string;
    public readonly input: Expression;
    public readonly func: (arg: number) => number;

    constructor(symbol: string, input: Expression, func: (arg: number) => number) {
        super();
        this.symbol = symbol;
        this.input = input;
        this.func = func;
    }

    canEvaluate(): boolean {
        return this.input.canEvaluate();
    }

    evaluate(): number { 
        const result = this.func(this.input.evaluate());
        console.log(`${this.toString()} = ${result}`);
        return result;
    }

    abstract abstractConstruct(input: Expression): Expression;

    solveInnermost(): Expression {
        const result = this.input.getNumberIfConstant();
        if (result !== undefined) { return new Constant(this.func(result)); } 
        else { 
            return this.abstractConstruct(this.input.solveInnermost() as Expression); 
        }
    }

    searchFor(target: Variable): number {
        const result = this.input.searchFor(target); 
        if (result != -2) {
            return 0;
        }
        return -2;
    }

    getChild(direction: number): Expression {
        if (direction == 0) {
            return this.input;
        } else {
            console.log(`Invalid child direction to go into: ${direction}`);
            return this;
        }
    }

    toString(): string { return this.symbol + this.input.toString() };
    
    toMathJax(): string { return this.symbol + this.input.toMathJax() };
}
