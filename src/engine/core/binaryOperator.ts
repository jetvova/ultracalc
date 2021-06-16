import { Constant } from "./constant";
import { Expression } from "./expression";

export class BinaryOperator extends Expression {
    public readonly left: Expression;
    public readonly symbol: string;
    public readonly tex: string;
    public readonly right: Expression;
    public readonly func: (arg1: number, arg2: number) => number;
    public readonly prefixNotation: boolean;
    
    constructor(left: Expression, symbol: string, tex: string, right: Expression, func: (arg1: number, arg2: number) => number, prefixNotation: boolean) {
        super();
        this.left = left;
        this.symbol = symbol;
        this.tex = tex;
        this.right = right;
        this.func = func;
        this.prefixNotation = prefixNotation;
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
        return new BinaryOperator(this.left.simplifyInnermost() as Expression, this.symbol, this.tex, this.right.simplifyInnermost() as Expression, this.func, this.prefixNotation); 
    }

    toString(): string { return "(" + this.left.toString() + this.symbol + this.right.toString() + ")"; };

    toMathJax(): string { 
        if (this.prefixNotation) {
            return this.tex + "{" + this.left.toMathJax() + "}" + "{" + this.right.toMathJax() + "}"; 
        }
        return "{" + this.left.toMathJax() + "}" + this.tex + "{" + this.right.toMathJax() + "}"; 
    };
}
