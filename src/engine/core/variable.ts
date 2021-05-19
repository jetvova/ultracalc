import { Expression } from "./expression";
import { Formula } from "./formula";

export class Variable extends Expression {
    private _value: number | undefined;
    public readonly name: string;
    public readonly description: string;
    private _given: boolean = false;
    private readonly onValueChangeCallbacks: ((arg0: number | undefined) => void)[] = [];
    private readonly onGivenChangeCallbacks: ((arg0: boolean) => void)[] = [];
    
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
    
    get value(): number | undefined { return this._value; }
    
    set value(value: number | undefined) {
        if (value !== this._value) {
            console.log(`Variable ${this.name} value set to: ${value}`);
            this._value = value;
            for (const c of this.onValueChangeCallbacks) {
                c(value);
            }
        }
    }

    get given(): boolean { return this._given; }

    set given(given: boolean) { 
        if (given !== this._given) {
            console.log(`Variable ${this.name} isGiven set to: ${given}`);        
            this._given = given;
            for (const c of this.onGivenChangeCallbacks) {
                c(given);
            }
        }
    }
    
    getValueOrUndefined(): number | undefined {
        return this.value;
    }
    
    equals(expr: Expression): Formula {
        return new Formula(this, expr)
    }

    onValueChange(callback: (arg0: number | undefined) => void) {
        this.onValueChangeCallbacks.push(callback);
    }

    onGivenChange(callback: (arg0: boolean) => void) {
        this.onGivenChangeCallbacks.push(callback);
    }

    toString() {
        return this.name;
    }
}
