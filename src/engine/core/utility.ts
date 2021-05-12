import { Constant } from "./constant";
import { Expression } from "./expression";

export function expr(input: Expression|number): Expression {
    if (typeof(input) === 'number') {
        return new Constant(input);
    } else {
        return input;
    }        
}