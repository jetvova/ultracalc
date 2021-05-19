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
    
    const onEnter = (senderId: number) => {
        // TODO: variableBoxes[min(senderId + 1, variableBoxes.length)].focus();
        solve();
    }
    
    var variableBoxes: JSX.Element[] = [];
    
    for (let i = 0; i < solver.variables.length; i++) {
        const v = solver.variables[i];
        variableBoxes.push(<VariableBox variable={v} onBlur={solve} onEnter={() => onEnter(i)} />);
    }
    
    return (
        <div>
            {variableBoxes}
            <input type="button" value="Solve" onClick={e => solve()} />
            <input type="button" value="Clear" onClick={e => clear()} />

        </div>
    )
}

export default SolverUI;
