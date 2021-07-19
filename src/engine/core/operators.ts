import { Expression } from "./expression";
import { BinaryOperator } from "./binaryOperator";
import { UnaryOperator } from "./unaryOperator";
import { expr } from "./utility";
import { sqrt } from "./functions";

// Commonly used Operators for easy access
export class Add extends BinaryOperator { 
    constructor(left: Expression, right: Expression) { 
        super(left, "+", "+", right, (arg1, arg2) => arg1 + arg2, false); 
    }

    abstractConstruct(left: Expression, right: Expression): Expression {
        return new Add(left, right);
    }

    invertAndInsert(direction: number, newChild: Expression): Expression {
        if (direction == 0) {
            return sub(newChild, this.right);
        } else {
            return sub(newChild, this.left);
        }
    }
}

export class Sub extends BinaryOperator { 
    constructor(left: Expression, right: Expression) { 
        super(left, "-", "-", right, (arg1, arg2) => arg1 - arg2, false); 
    }

    abstractConstruct(left: Expression, right: Expression): Expression {
        return new Sub(left, right);
    }

    invertAndInsert(direction: number, newChild: Expression): Expression {
        if (direction == 0) {
            return add(newChild, this.right);
        } else {
            return sub(newChild, this.left);
        }
    }
}

export class Mul extends BinaryOperator { 
    constructor(left: Expression, right: Expression) { 
        super(left, "*", "\\times", right, (arg1, arg2) => arg1 * arg2, false); 
    }

    abstractConstruct(left: Expression, right: Expression): Expression {
        return new Mul(left, right);
    }
    
    invertAndInsert(direction: number, newChild: Expression): Expression {
        if (direction == 0) {
            return div(newChild, this.right);
        } else {
            return div(newChild, this.left);
        }
    }
}

export class Div extends BinaryOperator { 
    constructor(left: Expression, right: Expression) { 
        super(left, "/", "\\frac", right, (arg1, arg2) => arg1 / arg2, true); 
    } 
    
    abstractConstruct(left: Expression, right: Expression): Expression {
        return new Div(left, right);
    }

    invertAndInsert(direction: number, newChild: Expression): Expression {
        if (direction == 0) {
            return mul(newChild, this.right);
        } else {
            return div(newChild, this.left);
        }
    }
}

export class Pow extends BinaryOperator { 
    constructor(left: Expression, right: Expression) { 
        super(left, "^", "^", right, (arg1, arg2) => Math.pow(arg1, arg2), false); 
    }
    
    abstractConstruct(left: Expression, right: Expression): Expression {
        return new Pow(left, right);
    }

    invertAndInsert(direction: number, newChild: Expression): Expression {
        if (direction == 0) {
            if (this.right.getNumberIfConstant() === 2) {
                return sqrt(newChild);
            } else {
                return pow(newChild, div(1, this.right));
            }  
        } else {
            throw new Error("Inverting  with Logarithms NYI");
        }
    }
}

export class Neg extends UnaryOperator { 
    constructor(input: Expression) { 
        super("-", input, (arg1) => -arg1); 
    }

    abstractConstruct(input: Expression): Expression {
        return new Neg(input);
    }
     
    invertAndInsert(direction: number, newChild: Expression): Expression {
        return neg(newChild);
    }
}

// Helper functions for writing formulas: add(A, B)
export function add(left: Expression|number, right: Expression|number) { return new Add(expr(left), expr(right)); }
export function sub(left: Expression|number, right: Expression|number) { return new Sub(expr(left), expr(right)); }
export function mul(left: Expression|number, right: Expression|number) { return new Mul(expr(left), expr(right)); }
export function div(left: Expression|number, right: Expression|number) { return new Div(expr(left), expr(right)); }

export function pow(left: Expression|number, right: Expression|number) { return new Pow(expr(left), expr(right)); }
export function neg(input: Expression|number) { return new Neg(expr(input)); }
