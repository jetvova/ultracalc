import React from 'react'
import SolverUI from './SolverUI'
import { PythagoreanSolver } from '../engine/solvers/math/pythagoreanSolver'

const UltraCalc: React.FC = () => {
    return (
        <div>
            <SolverUI
              solver={new PythagoreanSolver}
            />
        </div>
    )
}

export default UltraCalc