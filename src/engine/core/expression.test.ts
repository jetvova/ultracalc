import { Constant } from "./constant";
import { Expression } from "./expression";
import { sqrt } from "./functions";
import { sub, add, pow, neg } from "./operators";
import { Variable } from "./variable";

test("UnaryFunction simplifyInnermost", () => {
  var expr: Expression = sqrt(4);
  const result = expr.simplifyInnermost();
  expect(result.toString()).toEqual("2");
})

test("Constant simplifyInnermost returns itself", () => {
  var con: Constant = new Constant(4);
  const result = con.simplifyInnermost();
  expect(result.toString()).toEqual("4");
})

test("UnaryOperator simplifyInnermost", () => {
  var expr: Expression = neg(5);
  const result = expr.simplifyInnermost();
  expect(result.toString()).toEqual("-5");
})

test("BinaryOperator simplifyInnermost", () => {
  var expr: Expression = add(3, 4);
  const result = expr.simplifyInnermost();
  expect(result.toString()).toEqual("7");
})

test("Simple expression simplifyInnermost", () => {
  var expr: Expression = add(pow(2, 2), pow(2, 2));
  const result = expr.simplifyInnermost();
  expect(result.toString()).toEqual(add(4, 4).toString());
})

test("Expression simplifyInnermost", () => {
  var expr: Expression = sqrt(sub(pow(3, 2), pow(4, 2)));
  const result = expr.simplifyInnermost();
  expect(result.toString()).toEqual(sqrt(sub(9, 16)).toString());
})

test("Known variable simplifyInnermost", () => {
  const A = new Variable("A", "Known test variable A");
  A.value = 4;

  var expr: Expression = sqrt(A);
  const result = expr.simplifyInnermost();
  expect(result.toString()).toEqual(sqrt(4).toString());
})

test("Unknown variable simplifyInnermost", () => {
  const A = new Variable("A", "Unknown test variable A");
  
  var expr: Expression = sqrt(A);
  const result = expr.simplifyInnermost();
  expect(result.toString()).toEqual(sqrt(A).toString());
})
