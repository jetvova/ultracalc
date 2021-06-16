import React from 'react';
import { Solver } from '../engine/core/solver';
import VariableBox from './variableBox';
//@ts-ignore
import MathJax from 'react-mathjax-preview';

interface SolverUIProps {
    solver: Solver;
}

const SolverUI: React.FC<SolverUIProps> = (props) => {
    const { solver } = props;
    
    const [ workLog, setWorkLog ] = React.useState<JSX.Element[]>([]);
    var variableBoxes: JSX.Element[] = [];

    const solve = () => {
        const result = solver.solve();
        var mathJaxResult: JSX.Element[] = [];
        for (let workString of result) {
            mathJaxResult.push(<MathJax math={workString} style={{display : "inline-block"}} />);
        }
        setWorkLog(mathJaxResult);
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
                <hr/>
                <div>
                    {workLog.map(math => <p>{math}</p>)}
                </div>
            </div>
        </div>
    )
}

export default SolverUI;
