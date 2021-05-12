import { Expression } from "./expression";
import { UnaryFunction } from "./unaryFunction";
import { expr } from "./utility";

export class Sqrt extends UnaryFunction { constructor(input: Expression) { super("sqrt", input, Math.sqrt); } }
export class Sin extends UnaryFunction { constructor(input: Expression) { super("sin", input, Math.sin); } }
export class Cos extends UnaryFunction { constructor(input: Expression) { super("cos", input, Math.cos); } }
export class Tan extends UnaryFunction { constructor(input: Expression) { super("tan", input, Math.tan); } }

// Helper functions for writing formulas: add(A, B)
export function sqrt(input: Expression|number) { return new Sqrt(expr(input)); }
export function sin(input: Expression|number) { return new Sin(expr(input)); }
export function cos(input: Expression|number) { return new Cos(expr(input)); }
export function tan(input: Expression|number) { return new Tan(expr(input)); }
