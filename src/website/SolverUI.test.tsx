import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SolverUI from './SolverUI';
import { PythagoreanSolver } from '../engine/solvers/math/pythagoreanSolver';

it("renders empty textboxes correctly", () => {
    const { queryByTestId } = render(<SolverUI solver={new PythagoreanSolver} />);
    
    expect(queryByTestId("textbox_A")).not.toBeNull();
    expect(queryByTestId("textbox_B")).not.toBeNull();
    expect(queryByTestId("textbox_C")).not.toBeNull();
})

it("renders var value correctly", () => {
    const solver = new PythagoreanSolver;
    solver.A.value = 42;
    solver.B.value = 123.45;
    const { queryByTestId } = render(<SolverUI solver={solver} />);

    expect((queryByTestId("textbox_A") as HTMLInputElement).value).toEqual("42");
    expect((queryByTestId("textbox_B") as HTMLInputElement).value).toEqual("123.45");
    expect((queryByTestId("textbox_C") as HTMLInputElement).value).toEqual("");
})

it("renders var checkbox correctly", () => {
    const solver = new PythagoreanSolver;
    solver.A.given = true;
    solver.B.given = false;
    const { queryByTestId } = render(<SolverUI solver={solver} />);

    expect((queryByTestId("checkbox_A") as HTMLInputElement).checked).toBeTruthy();
    expect((queryByTestId("checkbox_B") as HTMLInputElement).checked).toBeFalsy();
    expect((queryByTestId("checkbox_C") as HTMLInputElement).checked).toBeFalsy();
})

it("renders var value & checkbox correctly", () => {
    const solver = new PythagoreanSolver;
    solver.A.given = true;
    solver.B.given = false;
    solver.A.value = 42;
    solver.B.value = 123.45;
    const { queryByTestId } = render(<SolverUI solver={solver} />);

    expect((queryByTestId("checkbox_A") as HTMLInputElement).checked).toBeTruthy();
    expect((queryByTestId("checkbox_B") as HTMLInputElement).checked).toBeFalsy();
    expect((queryByTestId("checkbox_C") as HTMLInputElement).checked).toBeFalsy();

    expect((queryByTestId("textbox_A") as HTMLInputElement).value).toEqual("42");
    expect((queryByTestId("textbox_B") as HTMLInputElement).value).toEqual("123.45");
    expect((queryByTestId("textbox_C") as HTMLInputElement).value).toEqual("");
})

it("renders a simple evaluation call correctly", () => {
    const solver = new PythagoreanSolver;
    solver.A.given = true;
    solver.B.given = true;
    solver.A.value = 3;
    solver.B.value = 4;
    const { queryByTestId, queryByPlaceholderText } = render(<SolverUI solver={solver} />);
    
    const button = queryByTestId("button_solve");
    expect(button as HTMLInputElement).toBeTruthy();   
    fireEvent.click(button!);
    
    expect((queryByTestId("textbox_C") as HTMLInputElement).value).toEqual("5");
    expect((queryByTestId("checkbox_C") as HTMLInputElement).checked).toBeFalsy();
})
