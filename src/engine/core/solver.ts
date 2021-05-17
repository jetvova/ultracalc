import { Formula } from "./formula";
import { Variable } from "./variable";

export abstract class Solver {

    solve() {
        while (true) {
            var succeeded = false;
            for (const f of this.formulas) {
                if (!f.outputVariable.canEvaluate() && f.canEvaluate()) {
                    f.outputVariable.setValue(f.evaluate());
                    // TODO: Check if variables don't conflict by comparing values
                    succeeded = true;
                }
            }
            if (!succeeded) {
                break;
            }
        }
    }

    clear() {
        for (const v of this.variables) { 
            v.setValue(undefined);
        }
    }

    abstract get variables(): Variable[];
    abstract get formulas(): Formula[];
}
