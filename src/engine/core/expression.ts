import { Variable } from "./variable";
export abstract class Expression {
    abstract canEvaluate(): boolean;
    abstract evaluate(): number;
    abstract solveInnermost(): Expression;
    getNumberIfConstant(): number | undefined { return undefined; }
    abstract searchFor(target: Variable): number;
    abstract getChild(direction: number): Expression;
    abstract invertAndInsert(direction: number, newChild: Expression): Expression; 
    abstract toString(): string;
    toMathJax(): string { return this.toString(); }
}
