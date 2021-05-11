import { Formula } from "../../core/formula";
import { Variable } from "../../core/variable";
import { Solver } from "../../core/solver";

import { sqrt } from "../../core/functions";
import { sub, add } from "../../core/operators";

export class PythagoreanSolver extends Solver {
    public readonly A = new Variable("A", "Side A of the triangle.");
    public readonly B = new Variable("B", "Side B of the triangle.");
    public readonly C = new Variable("C", "The Hypotenuse.");
           
    get variables(): Variable[] {
        return [this.A, this.B, this.C];
    }

    get formulas(): Formula[] {
        return [
            this.A.equals(sqrt(sub(this.C.pow(2), this.B.pow(2)))),
            this.B.equals(sqrt(sub(this.C.pow(2), this.A.pow(2)))),
            this.C.equals(sqrt(add(this.A.pow(2), this.B.pow(2)))),
        ];
    }
}
