import { Formula } from "./formula";
import { Variable } from "./variable";

export abstract class Solver {

    solve() {
        while (true) {
            var succeeded = false;
            for (const f of this.formulas) {
                if (!f.outputVariable.canEvaluate() && f.canEvaluate()) {
                    f.outputVariable.setValue(f.evaluate());
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
