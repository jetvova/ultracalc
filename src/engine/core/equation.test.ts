import { Constant } from "./constant";
import { Equation } from "./equation";
import { sqrt } from "./functions";
import { sub, add, mul, div, pow } from "./operators";
import { Variable } from "./variable";
import { Formula } from "./formula";

test("Zero depth equation left", () => {
  const A = new Variable("A", "Test variable A");
  const four = new Constant(4);
  var equation: Equation = new Equation(A, four);
  const result = equation.rearrangeTowards(A);
  expect(result.toMathJax()).toEqual(new Equation(A, four).toMathJax());
})

test("Zero depth equation right", () => {
  const A = new Variable("A", "Test variable A");
  const four = new Constant(4);
  var equation: Equation = new Equation(four, A);
  const result = equation.rearrangeTowards(A);
  expect(result.toMathJax()).toEqual(new Equation(A, four).toMathJax());
})

test("Sqrt, one depth equation left", () => {
  const A = new Variable("A", "Test variable A");
  const four = new Constant(4);
  var equation: Equation = new Equation(sqrt(A), four);
  const result = equation.rearrangeTowards(A);
  expect(result.toMathJax()).toEqual(new Equation(A, pow(four, 2)).toMathJax());
})

test("Sqrt, one depth equation right", () => {
  const A = new Variable("A", "Test variable A");
  const four = new Constant(4);
  var equation: Equation = new Equation(four, sqrt(A));
  const result = equation.rearrangeTowards(A).rearrangeTowards(A);
  expect(result.toMathJax()).toEqual(new Equation(A, pow(four, 2)).toMathJax());
})

test("Multiplication, one depth equation, direction 0", () => {
  const A = new Variable("A", "Test variable A");
  const four = new Constant(4);
  var equation: Equation = new Equation(mul(A, four), four);
  const result = equation.rearrangeTowards(A);
  expect(result.toMathJax()).toEqual(new Equation(A, div(four, four)).toMathJax());
})

test("Multiplication, one depth equation, direction 1", () => {
  const A = new Variable("A", "Test variable A");
  const four = new Constant(4);
  var equation: Equation = new Equation(mul(four, A), four);
  const result = equation.rearrangeTowards(A);
  expect(result.toMathJax()).toEqual(new Equation(A, div(four, four)).toMathJax());
})

test("Division, one depth equation, direction 0", () => {
  const A = new Variable("A", "Test variable A");
  const four = new Constant(4);
  var equation: Equation = new Equation(div(A, four), four);
  const result = equation.rearrangeTowards(A);
  expect(result.toMathJax()).toEqual(new Equation(A, mul(four, four)).toMathJax());
})

test("Division, one depth equation, direction 1", () => {
  const A = new Variable("A", "Test variable A");
  const four = new Constant(4);
  var equation: Equation = new Equation(div(four, A), four);
  const result = equation.rearrangeTowards(A);
  expect(result.toMathJax()).toEqual(new Equation(A, div(four, four)).toMathJax());
})

test("Multi-variable formula", () => {
  const A = new Variable("A", "Test variable A");
  const B = new Variable("B", "Test variable B");
  const C = new Variable("C", "Test variable C");
  var equation: Equation = new Equation(C, sqrt(add(pow(A, 2), pow(B, 2))));
  const result = equation.solveFor(A);
  expect(result!.toMathJax()).toEqual(new Formula(A, sqrt(sub(pow(C, 2), pow(B, 2)))).toMathJax());
})

test("Multi-variable equation", () => {
  const A = new Variable("A", "Test variable A");
  const B = new Variable("B", "Test variable B");
  const C = new Variable("C", "Test variable C");
  var equation: Equation = new Equation(pow(C, 2), add(pow(A, 2), pow(B, 2)));
  const result = equation.solveFor(A);
  expect(result!.toMathJax()).toEqual(new Formula(A, sqrt(sub(pow(C, 2), pow(B, 2)))).toMathJax());
})
