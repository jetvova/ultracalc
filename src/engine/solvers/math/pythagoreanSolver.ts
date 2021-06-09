import { Formula } from "../../core/formula";
import { Variable } from "../../core/variable";
import { Solver } from "../../core/solver";

import { sqrt } from "../../core/functions";
import { sub, add, pow } from "../../core/operators";

export class PythagoreanSolver extends Solver {
    public readonly id = "pythagorean";
    public readonly name = "Pythagorean Theorem";
    public readonly description = "A formula for determining side lengths of right triangles.";
    public readonly image = `images/solvers/${this.id}.png`;
    
    public readonly A = new Variable("A", "Side A of the triangle.");
    public readonly B = new Variable("B", "Side B of the triangle.");
    public readonly C = new Variable("C", "The Hypotenuse.");
    
    get variables(): Variable[] {
        return [this.A, this.B, this.C];
    }

    get formulas(): Formula[] {
        return [
            this.A.equals(sqrt(sub(pow(this.C, 2), pow(this.B, 2)))),
            this.B.equals(sqrt(sub(pow(this.C, 2), pow(this.A, 2)))),
            this.C.equals(sqrt(add(pow(this.A, 2), pow(this.B, 2)))),
        ];
    }
}
