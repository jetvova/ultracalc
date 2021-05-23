import { Expression } from './expression';
import { Variable } from './variable';

export class Formula {
    expression: Expression;
    outputVariable: Variable;

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

    toString(): string {
        return `${this.outputVariable} = ${this.expression}`;
    }
}
