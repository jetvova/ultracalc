import { Expression } from './expression';
import { Formula } from './formula';
import { Variable } from './variable';

export class Equation {
    left: Expression;
    right: Expression;
    
    constructor(left: Expression, right: Expression) {
        this.left = left;
        this.right = right;
    }
    
    rearrangeTowards(target: Variable): Equation {
        const leftDirection = this.left.searchFor(target);
        const rightDirection = this.right.searchFor(target);

        let newLeft;
        let newRight;
        
        if (leftDirection == -1) {
            // Already balanced
            newLeft = this.left;
            newRight = this.right;

        } else if (leftDirection != -2) {
            // Move from left to right
            
            newLeft = this.left.getChild(leftDirection);
            newRight = this.left.invertAndInsert(leftDirection, this.right);
            
        } else if (rightDirection != -2) {
            // Swap right and left
            
            newLeft = this.right;
            newRight = this.left;

        } else {
            // Variable not found
            throw new Error(`Variable ${target.name} not found in equation`);
        }
        
        return new Equation(newLeft, newRight);
    }

    solveFor(target: Variable): Formula | undefined {
        var previous: Equation = this;
        while (true) {
            const current = previous.rearrangeTowards(target); 
            if (previous.toMathJax() === current.toMathJax()) {
                break;
            } else {
                previous = current;
            }
        }

        if (previous.left === target) { 
            const result = previous.toFormula();
            console.log(`Derived formula: ${result.toMathJax()} from ${this.toMathJax()}`);
            return result;
        } else {
            return undefined;
        }
    }

    toFormula(): Formula {
        return new Formula(this.left as Variable, this.right);
    }

    toMathJax(): string {
        return `$$${this.left.toMathJax()} = ${this.right.toMathJax()}$$`;
    }
}
