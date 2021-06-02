export abstract class Expression {
    abstract canEvaluate(): boolean;
    abstract evaluate(): number;
    abstract partialEvaluate(): Expression;
    abstract toString(): string;
    toMathJax(): string { return this.toString(); }
}
