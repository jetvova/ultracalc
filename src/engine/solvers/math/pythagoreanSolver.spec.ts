import { PythagoreanSolver } from './pythagoreanSolver';

test('A, SIDE_FROM_SIDE_H', () => {
  var solver = new PythagoreanSolver()
  solver.C.given = true;
  solver.B.given = true;
  solver.C.value = 5;
  solver.B.value = 4;
  solver.solve();
  expect(solver.A.evaluate()).toBe(3);
  expect(solver.A.given).toBe(false);
})

test('B, SIDE_FROM_SIDE_H', () => {
  var solver = new PythagoreanSolver()
  solver.C.given = true;
  solver.A.given = true;
  solver.C.value = 5;
  solver.A.value = 4;
  solver.solve();
  expect(solver.B.evaluate()).toBe(3);
  expect(solver.B.given).toBe(false);
})

test('C, H_FROM_SIDE_SIDE', () => {
  var solver = new PythagoreanSolver()
  solver.A.given = true;
  solver.B.given = true;
  solver.A.value = 3;
  solver.B.value = 4;
  solver.solve();
  expect(solver.C.evaluate()).toBe(5);
  expect(solver.C.given).toBe(false);
})