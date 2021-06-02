export abstract class Expression {
    abstract canEvaluate(): boolean;
    abstract evaluate(): number;
    abstract simplifyInnermost(): Expression;
    getNumberIfConstant(): number | undefined { return undefined; }
    abstract toString(): string;
    toMathJax(): string { return this.toString(); }
}
