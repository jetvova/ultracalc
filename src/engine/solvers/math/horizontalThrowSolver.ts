import { Formula } from "../../core/formula";
import { Variable } from "../../core/variable";
import { Solver } from "../../core/solver";

import { sqrt } from "../../core/functions";
import { sub, add, mul, div, pow } from "../../core/operators";

export class HorizontalThrowSolver extends Solver {
    public readonly id = "horizontalThrow";
    public readonly name = "Horizontal Throw";
    public readonly description = "The characteristics of paths that objects take when thrown to the side.";
    public readonly image = `images/solvers/${this.id}.png`;
    
    public readonly Yi = new Variable("Y_i", "Initial height.");
    public readonly Vxi = new Variable("V_xi", "Initial horizontal velocity.");
    public readonly Vyf = new Variable("V_yf", "Final vertical velocity.");
    public readonly Xf = new Variable("X_f", "Final horizontal distance.");
    public readonly t = new Variable("t", "Time to impact.");
    public readonly g = new Variable("g", "Acceleration caused by gravity.");

    constructor () {
        super();
        this.g.value = 9.80665;
        this.g.given = true;
    }

    get variables(): Variable[] {
        return [this.Yi, this.Vxi, this.Vyf, this.Xf, this.t, this.g];
    }

    get formulas(): Formula[] {
        return [
            this.Xf.equals(mul(this.Vxi, this.t)),
            this.Vxi.equals(div(this.Xf, this.t)),
            this.Vyf.equals(mul(this.g, this.t)),
            this.g.equals(div(this.Vyf, this.t)),
            this.Yi.equals(mul(this.t, div(this.Vyf, 2))),
            this.Yi.equals(div(mul(this.g, pow(this.t, 2)), 2)),
            this.t.equals(div(this.Yi, this.Vyf)),
            this.t.equals(div(this.Xf, this.Vxi)),
            this.t.equals(sqrt(div(mul(2, this.Yi), this.g))),
        ];
    }
}
