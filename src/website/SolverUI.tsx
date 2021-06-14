import React, { useEffect } from 'react'
import ReactDOM from 'react-dom';
import { Solver } from '../engine/core/solver'
import VariableBox from './variableBox';

interface SolverUIProps {
    solver: Solver;
}

const SolverUI: React.FC<SolverUIProps> = (props) => {
    const { solver } = props;

    useEffect(() => { 
        // Detects state changes and re-typesets equations if MathJax is loaded on the web page
        let mj = (window as any).MathJax;
        if (mj !== undefined) {
            mj.typeset();
        }
    })
    
    const solve = () => {
        const result = solver.solve();
        setWorkLog(result);
        return result;
    }
    
    const clear = () => {
        solver.clear();
        setWorkLog([]);
    }
    
    const onEnter = (senderId: number) => {
        // TODO: variableBoxes[min(senderId + 1, variableBoxes.length)].focus();, focus on the next availible textbox
        solve();
    }
    
    const [ workLog, setWorkLog ] = React.useState<string[]>([]);
    var variableBoxes: JSX.Element[] = [];
    
    for (let i = 0; i < solver.variables.length; i++) {
        const v = solver.variables[i];
        variableBoxes.push(<VariableBox variable={v} onBlur={solve} onEnter={() => onEnter(i)} key={`box_${i}`} />);
    }
    
    return (
        <div>
            <img src={solver.image} width="350px"/>
            <h2>
                {solver.name}
            </h2>
            <div>
                {variableBoxes}
                <input type="button" value="Solve" data-testid="button_solve" onClick={e => solve()} />
                <input type="button" value="Clear" data-testid="button_clear" onClick={e => clear()} />
                <hr />
                <div data-testid="worklog">{workLog}</div>
            </div>
        </div>
    )
}

export default SolverUI;
