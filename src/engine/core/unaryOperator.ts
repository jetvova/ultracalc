import { Constant } from "./constant";
import { Expression } from "./expression";

export class UnaryOperator extends Expression {
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

    simplifyInnermost(): Expression {
        const result = this.input.getNumberIfConstant();
        if (result !== undefined) { return new Constant(this.func(result)); } 
        else { 
            return new UnaryOperator(this.symbol, this.input.simplifyInnermost() as Expression, this.func); 
        }
    }

    toString(): string { return this.symbol + this.input.toString() };
    
    toMathJax(): string { return this.symbol + this.input.toMathJax() };
}
