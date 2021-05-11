import { Expression } from "./expression";
import { BinaryOperator } from "./binaryOperator";
import { UnaryOperator } from "./unaryOperator";

export class Add extends BinaryOperator { constructor(left: Expression, right: Expression) { super(left, "+", right, (arg1, arg2) => arg1 + arg2); } }
export class Sub extends BinaryOperator { constructor(left: Expression, right: Expression) { super(left, "-", right, (arg1, arg2) => arg1 - arg2); } }
export class Mul extends BinaryOperator { constructor(left: Expression, right: Expression) { super(left, "*", right, (arg1, arg2) => arg1 * arg2); } }
export class Div extends BinaryOperator { constructor(left: Expression, right: Expression) { super(left, "/", right, (arg1, arg2) => arg1 / arg2); } }
export class Pow extends BinaryOperator { constructor(left: Expression, right: Expression) { super(left, "**", right, (arg1, arg2) => Math.pow(arg1, arg2)); } }
export class Neg extends UnaryOperator { constructor(input: Expression) { super("-", input, (arg1) => -arg1); } }
