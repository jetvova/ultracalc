import React from 'react'
import { Solver } from '../engine/core/solver'
import VariableBox from './variableBox';

interface SolverUIProps {
    solver: Solver;
}

const SolverUI: React.FC<SolverUIProps> = (props) => {
    const { solver } = props;

    return (
        <div>
            {solver.variables.map((variable) => <VariableBox variable={variable} />)}
        </div>
    )
}

export default SolverUI;
