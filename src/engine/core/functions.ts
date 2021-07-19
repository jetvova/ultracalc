import { Expression } from "./expression";
import { pow } from "./operators";
import { UnaryFunction } from "./unaryFunction";
import { expr } from "./utility";

// Commonly used Functions for easy access
export class Sqrt extends UnaryFunction { 
    constructor(input: Expression) { 
        super("sqrt", input, Math.sqrt); 
    }

    abstractConstruct(input: Expression): Expression {
        return new Sqrt(input);
    }

    invertAndInsert(direction: number, newChild: Expression): Expression {
        return pow(newChild, 2);
    }
}

export class Sin extends UnaryFunction { 
    constructor(input: Expression) { 
        super("sin", input, Math.sin); 
    }

    abstractConstruct(input: Expression): Expression {
        return new Sin(input);
    }

    invertAndInsert(direction: number, newChild: Expression): Expression {
        return asin(newChild);
    }
}

export class Cos extends UnaryFunction { 
    constructor(input: Expression) { 
        super("cos", input, Math.cos); 
    }

    abstractConstruct(input: Expression): Expression {
        return new Cos(input);
    }
    
    invertAndInsert(direction: number, newChild: Expression): Expression {
        return acos(newChild);
    } 
}

export class Tan extends UnaryFunction { 
    constructor(input: Expression) { 
        super("tan", input, Math.tan); 
    }

    abstractConstruct(input: Expression): Expression {
        return new Tan(input);
    }

    invertAndInsert(direction: number, newChild: Expression): Expression {
        return atan(newChild);
    }
}

export class Asin extends UnaryFunction {
    constructor(input: Expression) {
        super("asin", input, Math.asin);
    }

    abstractConstruct(input: Expression): Expression {
        return new Asin(input);
    }

    invertAndInsert(direction: number, newChild: Expression): Expression {
        return sin(newChild);
    }
}

export class Acos extends UnaryFunction {
    constructor(input: Expression) {
        super("acos", input, Math.acos);
    }

    abstractConstruct(input: Expression): Expression {
        return new Acos(input);
    }

    invertAndInsert(direction: number, newChild: Expression): Expression {
        return cos(newChild);
    }
}

export class Atan extends UnaryFunction {
    constructor(input: Expression) {
        super("atan", input, Math.atan);
    }

    abstractConstruct(input: Expression): Expression {
        return new Atan(input);
    }

    invertAndInsert(direction: number, newChild: Expression): Expression {
        return tan(newChild);
    }
}

// Helper functions for writing formulas: add(A, B)
export function sqrt(input: Expression|number) { return new Sqrt(expr(input)); }
export function sin(input: Expression|number) { return new Sin(expr(input)); }
export function cos(input: Expression|number) { return new Cos(expr(input)); }
export function tan(input: Expression|number) { return new Tan(expr(input)); }
export function asin(input: Expression|number) { return new Asin(expr(input)); }
export function acos(input: Expression|number) { return new Acos(expr(input)); }
export function atan(input: Expression|number) { return new Atan(expr(input)); }
