import React from 'react'
import ReactDOM from 'react-dom';
import { Solver } from '../engine/core/solver'
import VariableBox from './variableBox';

interface SolverUIProps {
    solver: Solver;
}

const SolverUI: React.FC<SolverUIProps> = (props) => {
    const { solver } = props;
    
    const solve = () => {
        solver.solve();
    }
    
    const clear = () => {
        solver.clear();
    }

    return (
        <div>
            {solver.variables.map((variable) => <VariableBox variable={variable} onBlur={solve} />)}
            <input type="button" value="Solve" onClick={e => solve()} />
            <input type="button" value="Clear" onClick={e => clear()} />

        </div>
    )
}

export default SolverUI;
