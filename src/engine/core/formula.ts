import { Expression } from './expression';
import { Variable } from './variable';
import { Equation } from './equation';

export class Formula {
    outputVariable: Variable;
    expression: Expression;

    constructor(outputVariable: Variable, expression: Expression) {
        this.outputVariable = outputVariable;
        this.expression = expression;
    }

    canEvaluate() : boolean {
        return this.expression.canEvaluate();
    }

    evaluate(): number {
        console.log(`Evaluating formula: ${this.outputVariable.toString()} = ${this.expression.toString()}`);
        const result = this.expression.evaluate();
        // console.log(`${this.outputVariable.toString()} = ${this.expression.toString()} = ${result}`);
        console.log(`${this.outputVariable.toString()} = ${result}`);
        return result;
    }

    toEquation() {
        return new Equation(this.outputVariable, this.expression);
    }

    toString(): string {
        return `${this.outputVariable} = ${this.expression}`;
    }

    toMathJax(): string {
        return `$$${this.outputVariable.toMathJax()} = ${this.expression.toMathJax()}$$`;
    }
}
