import { Expression } from "./expression";
import { BinaryOperator } from "./binaryOperator";
import { UnaryOperator } from "./unaryOperator";
import { expr } from "./utility";

export class Add extends BinaryOperator { constructor(left: Expression, right: Expression) { super(left, "+", right, (arg1, arg2) => arg1 + arg2); } }
export class Sub extends BinaryOperator { constructor(left: Expression, right: Expression) { super(left, "-", right, (arg1, arg2) => arg1 - arg2); } }
export class Mul extends BinaryOperator { constructor(left: Expression, right: Expression) { super(left, "*", right, (arg1, arg2) => arg1 * arg2); } }
export class Div extends BinaryOperator { constructor(left: Expression, right: Expression) { super(left, "/", right, (arg1, arg2) => arg1 / arg2); } }
export class Pow extends BinaryOperator { constructor(left: Expression, right: Expression) { super(left, "**", right, (arg1, arg2) => Math.pow(arg1, arg2)); } }
export class Neg extends UnaryOperator { constructor(input: Expression) { super("-", input, (arg1) => -arg1); } }

// Helper functions for writing formulas: add(A, B)
export function add(left: Expression|number, right: Expression|number) { return new Add(expr(left), expr(right)); }
export function sub(left: Expression|number, right: Expression|number) { return new Sub(expr(left), expr(right)); }
export function mul(left: Expression|number, right: Expression|number) { return new Mul(expr(left), expr(right)); }
export function div(left: Expression|number, right: Expression|number) { return new Div(expr(left), expr(right)); }

export function pow(left: Expression|number, right: Expression|number) { return new Pow(expr(left), expr(right)); }
export function neg(input: Expression|number) { return new Neg(expr(input)); }
