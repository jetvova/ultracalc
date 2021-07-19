import { Formula } from "./formula";
import { Variable } from "./variable";

export abstract class Solver {
    solve(): string[] {
        for (const v of this.variables) { 
            if (!v.given) {
                v.value = undefined;
            }
        } 

        var workLog: string[] = [];
        while (true) {
            var succeeded = false;
            for (const f of this.formulas) {
                if (!f.outputVariable.canEvaluate() && f.canEvaluate()) {
                    f.outputVariable.value = f.evaluate();
                    // TODO: Check if variables don't conflict by comparing values

                    var equation = f.expression;
                    var workString = `$$${f.outputVariable.toMathJax()}`;
                    while (true) {
                        workString += " = " + equation.toMathJax();
                        const nextEquation = equation.solveInnermost();
                        if (equation == nextEquation) { 
                            break;
                        }
                        equation = nextEquation;
                    }
                    workLog.push(workString + "$$");

                    succeeded = true;
                }
            }
            if (!succeeded) {
                break;
            }
        }
        return workLog;
    }

    clear() {
        for (const v of this.variables) { 
            v.value = undefined;
            v.given = false;
        }
    }

    abstract get variables(): Variable[];
    abstract get formulas(): Formula[];
    abstract get id(): string;
    abstract get name(): string;
    abstract get description(): string;
    abstract get image(): string;

}
