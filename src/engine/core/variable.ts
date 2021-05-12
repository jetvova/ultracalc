import { Expression } from "./expression";
import { Formula } from "./formula";

export class Variable extends Expression {
    private value: number | undefined;
    public readonly name: string;
    public readonly description: string;
    
    constructor(name: string, description: string) {
        super();
        this.name = name;
        this.description = description;
    }
    
    canEvaluate(): boolean { return this.value !== undefined; }
    
    evaluate(): number { 
        if (this.value === undefined) {
            throw new Error("Attempt to access undefined variable " + this.name);
        } else {
            return this.value;
        }
    }
    
    toString() {
        return this.name;
    }

    setValue(value: number): void {
        this.value = value;
    }

    equals(expr: Expression): Formula {
        return new Formula(this, expr)
    }
}
