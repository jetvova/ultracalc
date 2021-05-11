import { Formula } from "../../core/formula";
import { Variable } from "../../core/variable";
import { ProblemSolver } from "../../core/problemSolver";

export class PythagoreanSolver extends ProblemSolver {
    public readonly A = new Variable("A", "Side A of the triangle.");
    public readonly B = new Variable("B", "Side B of the triangle.");
    public readonly C = new Variable("C", "The Hypotenuse.");
           
    get variables(): Variable[] {
        return [this.A, this.B, this.C];
    }

    get formulas(): Formula[] {
        return [
            new SIDE_from_SIDE_H(this.A, this.B, this.C),
            new SIDE_from_SIDE_H(this.B, this.A, this.C),
            new H_from_SIDE_SIDE(this.C, this.A, this.B),
        ];
    }
}

class SIDE_from_SIDE_H extends Formula {
    A: Variable;
    B: Variable;
    C: Variable;

    constructor(A: Variable, B: Variable, C: Variable) {
        super(A, [B,C])
        this.A = A;
        this.B = B;
        this.C = C;
    }

    calculate(): number {
        
        return Math.sqrt(
            this.C.evaluate()*this.C.evaluate() -
            this.B.evaluate()*this.B.evaluate()
        );
    }
}

class H_from_SIDE_SIDE extends Formula {
    A: Variable;
    B: Variable;
    C: Variable;

    constructor(C: Variable, A: Variable, B: Variable) {
        super(C, [A,B])
        this.C = C;
        this.A = A;
        this.B = B;
    }

    calculate(): number {
        
        return Math.sqrt(
            this.A.evaluate()*this.A.evaluate() +
            this.B.evaluate()*this.B.evaluate()
        );
    }
}
