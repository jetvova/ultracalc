import { Formula } from "./formula";
import { Variable } from "./variable";

export abstract class Solver {

    solve() {
        for (const v of this.variables) { 
            if (!v.given) {
                v.value = undefined;
            }
        } 

        while (true) {
            var succeeded = false;
            for (const f of this.formulas) {
                if (!f.outputVariable.canEvaluate() && f.canEvaluate()) {
                    f.outputVariable.value = f.evaluate();
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
            v.value = undefined;
            v.given = false;
        }
    }

    abstract get variables(): Variable[];
    abstract get formulas(): Formula[];
}
