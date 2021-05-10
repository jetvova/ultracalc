import { Formula } from "../../core/formula";
import { Variable } from "../../core/variable";
import { ProblemSolver } from "../../core/problemSolver";

export class PythagoreanSolver extends ProblemSolver {
    public readonly A: Variable;
    public readonly B: Variable;
    public readonly C: Variable;
    
    constructor() {
        const A = new Variable("A", "Side A of the triangle.");
        const B = new Variable("B", "Side B of the triangle.");
        const C = new Variable("C", "The Hypotenuse.");
        super([A, B, C], [
            new SIDE_from_SIDE_H(A, B, C),
            new SIDE_from_SIDE_H(B, A, C),
            new H_from_SIDE_SIDE(C, A, B),
        ]);
        this.A = A;
        this.B = B;
        this.C = C;
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
            this.C.val()*this.C.val() -
            this.B.val()*this.B.val()
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
            this.A.val()*this.A.val() +
            this.B.val()*this.B.val()
        );
    }
}
