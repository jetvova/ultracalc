import { Expression } from "./expression";
import { UnaryFunction } from "./unaryFunction";

export class Sqrt extends UnaryFunction { constructor(input: Expression) { super("sqrt", input, Math.sqrt); } }
export class Sin extends UnaryFunction { constructor(input: Expression) { super("sin", input, Math.sin); } }
export class Cos extends UnaryFunction { constructor(input: Expression) { super("cos", input, Math.cos); } }
export class Tan extends UnaryFunction { constructor(input: Expression) { super("tan", input, Math.tan); } }
