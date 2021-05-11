import { Expression } from "./expression";

export abstract class BinaryOperator extends Expression {
    public readonly left: Expression;
    public readonly symbol: string;
    public readonly func: (arg1: number, arg2: number) => number;
    public readonly right: Expression;
    
    constructor(left: Expression, symbol: string, right: Expression, func: (arg1: number, arg2: number) => number) {
        super();
        this.left = left;
        this.symbol = symbol;
        this.right = right;
        this.func = func;
    }

    canEvaluate(): boolean {
        return this.left.canEvaluate() && this.right.canEvaluate();
    }

    evaluate(): number { 
        return this.func(this.left.evaluate(), this.right.evaluate());
    }

    toString(): string { return "(" + this.left.toString() + this.symbol + this.right.toString() + ")"; };
}
