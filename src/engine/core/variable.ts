export class Variable {
    name: string;
    description: string;
    private value: number | undefined;
    
    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
    }
    
    val(): number { 
        if (this.value === undefined) {
            throw new Error("Attempt to access undefined variable " + this.name);
        } else {
            return this.value;
        }
    }
    
    hasVal(): boolean { return this.value !== undefined; }
    
    setVal(val: number): void {
        this.value = val;
    }
}
