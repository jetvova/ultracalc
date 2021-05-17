import { Expression } from "./expression";
import { Formula } from "./formula";

export class Variable extends Expression {
    private value: number | undefined;
    public readonly name: string;
    public readonly description: string;
    private readonly onChangeCallbacks: ((arg0: number | undefined) => void)[] = [];
    
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
    
    setValue(value: number | undefined): void {
        console.log("Variable " + this.name + " set to: " + value);
        this.value = value;
        for (const c of this.onChangeCallbacks) {
            c(value);
        }
    }
    
    getValueOrUndefined(): number | undefined {
        return this.value;
    }
    
    equals(expr: Expression): Formula {
        return new Formula(this, expr)
    }

    onChange(callback: (arg0: number | undefined) => void) {
        this.onChangeCallbacks.push(callback);
    }

    toString() {
        return this.name;
    }
}
