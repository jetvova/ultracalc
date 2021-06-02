import { Constant } from "./constant";
import { Expression } from "./expression";

export class BinaryOperator extends Expression {
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

    simplifyInnermost(): Expression {
        const leftResult = this.left.getNumberIfConstant();
        if (leftResult !== undefined) { 
            const rightResult = this.right.getNumberIfConstant();    
            if (rightResult !== undefined) { 
                return new Constant(this.func(leftResult, rightResult));
            } 
        } 
        return new BinaryOperator(this.left.simplifyInnermost() as Expression, this.symbol, this.right.simplifyInnermost() as Expression, this.func); 
    }

    toString(): string { return "(" + this.left.toString() + this.symbol + this.right.toString() + ")"; };

    toMathJax(): string { return "{" + this.left.toMathJax() + "}" + this.symbol + "{" + this.right.toMathJax() + "}"; };
}
