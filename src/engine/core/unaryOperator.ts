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
        return this.func(this.input.evaluate());
    }

    toString(): string { return this.symbol + this.input.toString() };
}
