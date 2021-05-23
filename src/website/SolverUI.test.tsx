import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SolverUI from './SolverUI';
import { PythagoreanSolver } from '../engine/solvers/math/pythagoreanSolver';

test("Var value rendered correctly", () => {
    const solver = new PythagoreanSolver;
    solver.A.value = 42;
    solver.B.value = 123.45;
    const { A, B, C } = renderSolverUI(solver);

    expect(A.value).toEqual("42");
    expect(B.value).toEqual("123.45");
    expect(C.value).toEqual("");
})

test("Var checkbox rendered correctly", () => {
    const solver = new PythagoreanSolver;
    solver.A.given = true;
    solver.B.given = false;
    const { checkA, checkB, checkC } = renderSolverUI(solver);

    expect(checkA.checked).toBeTruthy();
    expect(checkB.checked).toBeFalsy();
    expect(checkC.checked).toBeFalsy();
})

test("Var value & checkbox rendered correctly", () => {
    const solver = new PythagoreanSolver;
    solver.A.given = true;
    solver.B.given = false;
    solver.A.value = 42;
    solver.B.value = 123.45;
    const { A, B, C, checkA, checkB, checkC } = renderSolverUI(solver);

    expect(checkA.checked).toBeTruthy();
    expect(checkB.checked).toBeFalsy();
    expect(checkC.checked).toBeFalsy();

    expect(A.value).toEqual("42");
    expect(B.value).toEqual("123.45");
    expect(C.value).toEqual("");
})

test("Variable becomes given when written", () => {
    const { A, checkA } = renderSolverUI(new PythagoreanSolver);
    
    expect(checkA.checked).toBeFalsy();
    writeToTextBox(A, "30");
    expect(checkA.checked).toBeTruthy();

})
test("Simple evaluation call correctly when pressing button", () => {
    const { A, B, C, solve } = renderSolverUI(new PythagoreanSolver);
    writeToTextBox(A, "30");
    writeToTextBox(B, "40");
    solve.click();
    expect(C.value).toEqual("50");
})

test("Automatic call of solve upon change of focus", async () => {
    const { A, B, C } = renderSolverUI(new PythagoreanSolver);    
    writeToTextBox(A, "30");
    writeToTextBox(B, "40");
    C.focus();
    expect(C.value).toEqual("50");
})

test("Variables get cleared when button is pressed", async () => {
    const { A, B, C, clear } = renderSolverUI(new PythagoreanSolver);    
    writeToTextBox(A, "30");
    writeToTextBox(B, "40");
    writeToTextBox(C, "50");

    clear.click();
    expect(A.value).toEqual("");
    expect(B.value).toEqual("");
    expect(C.value).toEqual("");
})

function writeToTextBox(textbox: HTMLInputElement, value: string) {
    textbox.focus();
    var current = "";
    for (let c of value) {
        const keyEvent = {code: "Digit" + c, key: c, charCode: c.charCodeAt(0)};
        fireEvent.keyDown(textbox, keyEvent);
        fireEvent.keyPress(textbox, keyEvent);
        fireEvent.keyUp(textbox, keyEvent);
        current += c;
        fireEvent.change(textbox, {target: {value: current}});        
    }    
}

interface PythagoreanUIControls {
    A: HTMLInputElement;
    B: HTMLInputElement;
    C: HTMLInputElement;
    checkA: HTMLInputElement;
    checkB: HTMLInputElement;
    checkC: HTMLInputElement;
    solve: HTMLInputElement;
    clear: HTMLInputElement;
}

function renderSolverUI(solver: PythagoreanSolver): PythagoreanUIControls {
        const { queryByTestId } = render(<SolverUI solver={solver} />);
    return { 
        A: (queryByTestId("textbox_A") as HTMLInputElement),
        B: (queryByTestId("textbox_B") as HTMLInputElement),
        C: (queryByTestId("textbox_C") as HTMLInputElement),
        checkA: (queryByTestId("checkbox_A") as HTMLInputElement),
        checkB: (queryByTestId("checkbox_B") as HTMLInputElement),
        checkC: (queryByTestId("checkbox_C") as HTMLInputElement),        
        solve: (queryByTestId("button_solve") as HTMLInputElement),
        clear: (queryByTestId("button_clear") as HTMLInputElement),
    }
}

