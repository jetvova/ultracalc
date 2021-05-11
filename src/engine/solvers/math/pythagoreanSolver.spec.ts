import { PythagoreanSolver } from './pythagoreanSolver';

test('A, SIDE_FROM_SIDE_H', () => {
  var solver = new PythagoreanSolver()
  solver.C.setValue(5);
  solver.B.setValue(4);
  solver.solve();
  expect(solver.A.evaluate()).toBe(3);
})

test('B, SIDE_FROM_SIDE_H', () => {
  var solver = new PythagoreanSolver()
  solver.C.setValue(5);
  solver.A.setValue(4);
  solver.solve();
  expect(solver.B.evaluate()).toBe(3);
})

test('C, H_FROM_SIDE_SIDE', () => {
  var solver = new PythagoreanSolver()
  solver.A.setValue(3);
  solver.B.setValue(4);
  solver.solve();
  expect(solver.C.evaluate()).toBe(5);
})