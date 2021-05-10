import { Variable } from './variable';

function i(i: number) : number {
    return 42 + i*i;
}

export function sum(a: number, b: number): number {
    return a + b
}

export abstract class Formula {
    inputVariables: Variable[];
    outputVariable: Variable;

    constructor(outputVariable: Variable, inputVariables: Variable[]) {
        this.outputVariable = outputVariable;
        this.inputVariables = inputVariables;
    }

    canCalculate() : boolean {
        for (var inputVar of this.inputVariables) {
            if (!inputVar.hasVal()) { return false; }
        }
        return true;
    }

    abstract calculate(): number;
}
