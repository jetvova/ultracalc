export abstract class Expression { 
    abstract canEvaluate(): boolean;
    abstract evaluate(): number;
    abstract toString(): String;

    add(input: Expression|number): Expression { return new op.Add(this, e(input)); }
    sub(input: Expression|number): Expression { return new op.Sub(this, e(input)); }
    mul(input: Expression|number): Expression { return new op.Mul(this, e(input)); }
    div(input: Expression|number): Expression { return new op.Div(this, e(input)); }
    pow(input: Expression|number): Expression { return new op.Pow(this, e(input)); }

    neg(): Expression { return new op.Neg(this); }

    sqrt(): Expression { return new func.Sqrt(this);}
    sin(): Expression { return new func.Sin(this);}
    cos(): Expression { return new func.Cos(this);}
    tan(): Expression { return new func.Tan(this);}
}

import { Constant } from "./constant";
import * as op from "./operators";
import * as func from "./functions";

function e(input: Expression|number): Expression { 
    if (typeof(input) === 'number') {
        return new Constant(input);
    } else {
        return input;
    }
}

