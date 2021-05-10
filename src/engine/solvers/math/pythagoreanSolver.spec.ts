import { PythagoreanSolver } from './pythagoreanSolver';

test('C, H_FROM_SIDE_SIDE', () => {
  var solver = new PythagoreanSolver()
  solver.A.setVal(3);
  solver.B.setVal(4);
  solver.solve();
  expect(solver.C.val()).toBe(5);
})

test('A, SIDE_FROM_SIDE_H', () => {
  var solver = new PythagoreanSolver()
  solver.C.setVal(5);
  solver.B.setVal(4);
  solver.solve();
  expect(solver.A.val()).toBe(3);
})

test('B, SIDE_FROM_SIDE_H', () => {
  var solver = new PythagoreanSolver()
  solver.C.setVal(5);
  solver.A.setVal(4);
  solver.solve();
  expect(solver.B.val()).toBe(3);
})
