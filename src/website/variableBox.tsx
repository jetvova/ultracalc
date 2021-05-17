import React from 'react'
import { Variable } from '../engine/core/variable';

interface VariableBoxProps {
    variable: Variable;
    onBlur: () => void;
}

const VariableBox: React.FC<VariableBoxProps> = (props) => {
    const { variable, onBlur } = props;
    
    let [ currentValue, setCurrentValue ] = React.useState<number | undefined>(variable.getValueOrUndefined());
    variable.onChange(setCurrentValue);

    return (
        <div>
            {variable.name}
            
            &nbsp;
            
            <input 
                type="number" 
                value={currentValue === undefined ? '' : currentValue.toString()} 
                onChange={e => {
                    let newValue: number | undefined = parseFloat(e.target.value);
                    if (isNaN(newValue)) { newValue = undefined; }
                    
                    variable.setValue(newValue);
                    setCurrentValue(newValue);
                }} 
                onBlur={e => onBlur()}
                />

            &nbsp;

            {variable.description}
        </div>
    )
}

export default VariableBox;
