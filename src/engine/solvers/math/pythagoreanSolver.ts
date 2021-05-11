import { Formula } from "../../core/formula";
import { Variable } from "../../core/variable";
import { Solver } from "../../core/solver";

export class PythagoreanSolver extends Solver {
    public readonly A = new Variable("A", "Side A of the triangle.");
    public readonly B = new Variable("B", "Side B of the triangle.");
    public readonly C = new Variable("C", "The Hypotenuse.");
           
    get variables(): Variable[] {
        return [this.A, this.B, this.C];
    }

    get formulas(): Formula[] {
        return [
            this.A.equals((this.C.pow(2).sub(this.B.pow(2))).sqrt()),
            this.B.equals((this.C.pow(2).sub(this.A.pow(2))).sqrt()),
            this.C.equals((this.A.pow(2).add(this.B.pow(2))).sqrt()),
        ];
    }
}
