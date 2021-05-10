import { Formula } from "./formula";
import { Variable } from "./variable";

export class ProblemSolver {
    variables: Variable[];
    formulas: Formula[];    

    constructor(variables: Variable[], formulas: Formula[]) {
        this.variables = variables;
        this.formulas = formulas;
    }

    solve() {
        while (true) {
            var succeeded = false;
            for (const f of this.formulas) {
                if (!f.outputVariable.hasVal() && f.canCalculate()) {
                    f.outputVariable.setVal(f.calculate());
                    succeeded = true;
                }
            }
            if (!succeeded) {
                break;
            }
        }
    }

}
