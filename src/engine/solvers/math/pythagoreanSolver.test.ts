import { PythagoreanSolver } from "./pythagoreanSolver";

test("A, SIDE_FROM_SIDE_H", () => {
  var solver = new PythagoreanSolver()
  solver.C.given = true;
  solver.B.given = true;
  solver.C.value = 5;
  solver.B.value = 4;
  solver.solve();
  expect(solver.A.evaluate()).toBe(3);
  expect(solver.A.given).toBe(false);
})

test("B, SIDE_FROM_SIDE_H", () => {
  var solver = new PythagoreanSolver()
  solver.C.given = true;
  solver.A.given = true;
  solver.C.value = 5;
  solver.A.value = 4;
  solver.solve();
  expect(solver.B.evaluate()).toBe(3);
  expect(solver.B.given).toBe(false);
})

test("C, H_FROM_SIDE_SIDE", () => {
  var solver = new PythagoreanSolver()
  solver.A.given = true;
  solver.B.given = true;
  solver.A.value = 3;
  solver.B.value = 4;
  solver.solve();
  expect(solver.C.evaluate()).toBe(5);
  expect(solver.C.given).toBe(false);
})

test("Work is shown for HSS", () => {
  var solver = new PythagoreanSolver()
  solver.A.given = true;
  solver.B.given = true;
  solver.A.value = 30;
  solver.B.value = 40;
  const result = solver.solve();
  
  expect(result).toEqual(["$$C = \\sqrt{{{A}^{2}}+{{B}^{2}}} = \\sqrt{{{30}^{2}}+{{40}^{2}}} = \\sqrt{{900}+{1600}} = \\sqrt{2500} = 50$$"]);
})