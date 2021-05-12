import React from 'react'
import { Solver } from '../engine/core/solver'
import { Variable } from '../engine/core/variable';

interface VariableBoxProps {
    variable: Variable;
}

const VariableBox: React.FC<VariableBoxProps> = (props) => {
    const { variable } = props;

    return (
        <div>
            {variable.name}
            &nbsp;
            <input type="text" value="123" />
            &nbsp;
            {variable.description}
        </div>
    )
}

export default VariableBox;