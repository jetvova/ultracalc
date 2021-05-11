import { Formula } from "./formula";
import { Variable } from "./variable";

export abstract class ProblemSolver {

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

    abstract get variables(): Variable[];
    abstract get formulas(): Formula[];
}
