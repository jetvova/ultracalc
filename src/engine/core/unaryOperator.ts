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

    toString(): string { return this.symbol + this.input.toString() };
    
    toMathJax(): string { return this.symbol + this.input.toMathJax() };
}
