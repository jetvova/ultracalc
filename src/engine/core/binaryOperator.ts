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
        const result = this.func(this.left.evaluate(), this.right.evaluate());
        console.log(`${this.toString()} = ${result}`);
        return result;
    }

    toString(): string { return "(" + this.left.toString() + this.symbol + this.right.toString() + ")"; };

    toMathJax(): string { return "{" + this.left.toMathJax() + "}" + this.symbol + "{" + this.right.toMathJax() + "}"; };
}
