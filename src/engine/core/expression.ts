export abstract class Expression { 
    abstract canEvaluate(): boolean;
    abstract evaluate(): number;
    abstract toString(): String;

    static from(input: Expression|number): Expression {
        if (typeof(input) === 'number') {
            return new Constant(input);
        } else {
            return input;
        }        
    }

    // Helper functions for writing formulas: A.add(B)
    add(input: Expression|number) { return new op.Add(this, expr(input)); }
    sub(input: Expression|number) { return new op.Sub(this, expr(input)); }
    mul(input: Expression|number) { return new op.Mul(this, expr(input)); }
    div(input: Expression|number) { return new op.Div(this, expr(input)); }
    pow(input: Expression|number) { return new op.Pow(this, expr(input)); }

    neg() { return new op.Neg(this); }

    sqrt() { return new func.Sqrt(this);}
    sin() { return new func.Sin(this);}
    cos() { return new func.Cos(this);}
    tan() { return new func.Tan(this);}
}

const expr = Expression.from;

import { Constant } from "./constant";
import * as op from "./operators";
import * as func from "./functions";
