import { Expression } from "./expression";

export abstract class UnaryFunction extends Expression {
    public readonly name: string;
    public readonly input: Expression;
    public readonly func: (arg: number) => number;
    
    constructor(symbol: string, input: Expression, func: (arg: number) => number) {
        super();
        this.name = symbol;
        this.input = input;
        this.func = func;
    }

    canEvaluate(): boolean {
        return this.input.canEvaluate();
    }

    evaluate(): number { 
        return this.func(this.input.evaluate());
    }

    toString(): string { return this.name + "(" + this.input.toString() + ")" };
}
