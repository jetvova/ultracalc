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
        return this.expression.evaluate();
    }

    toString(): string {
        return `${this.outputVariable} = ${this.expression}`;
    }
}
