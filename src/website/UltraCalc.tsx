import React from 'react'
import SolverUI from './SolverUI'
import { PythagoreanSolver } from '../engine/solvers/math/pythagoreanSolver'
import { HorizontalThrowSolver } from '../engine/solvers/math/horizontalThrowSolver';
import { Solver } from '../engine/core/solver';
import SolverBox from './solverBox';

const UltraCalc: React.FC = () => {
    const [ currentSolver, setCurrentSolver ] = React.useState<string | undefined>(undefined);

    const solverMap = new Map<string, Solver>();
    const solverBoxes: JSX.Element[] = [];
    
    let solver: Solver = new PythagoreanSolver;
    solverMap.set(solver.id, solver);
    solver = new HorizontalThrowSolver;
    solverMap.set(solver.id, solver);


    Array.from(solverMap.keys()).sort().forEach(function(solverId) {
        const solver = solverMap.get(solverId)!;
        solverBoxes.push(<SolverBox 
            name={solver.name} 
            description={solver.description} 
            image={solver.image} 
            onSelect={() => {setCurrentSolver(solver.id)}} 
            key={`solverBox_${solver.id}`}/>);
    });

    if ( currentSolver === undefined ) {
        return (
            <div>
                {solverBoxes}
            </div>
        )   
    }
    else { 
        return (
            <div>
                <input type="button" value="Back" data-testid="button_back" onClick={e => setCurrentSolver(undefined)} />
                <hr/>
                <SolverUI
                    solver={ solverMap.get(currentSolver)! }
                />
            </div>
        )
    }
}

export default UltraCalc