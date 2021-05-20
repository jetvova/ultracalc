import React, { ChangeEvent, KeyboardEvent } from 'react'
import { Variable } from '../engine/core/variable';

interface VariableBoxProps {
    variable: Variable;
    onBlur: () => void;
    onEnter: () => void;
}

const VariableBox: React.FC<VariableBoxProps> = (props) => {
    const { variable, onBlur, onEnter } = props;

    const [ currentValue, setCurrentValue ] = React.useState<number | undefined>(variable.getValueOrUndefined());
    const [ isGiven, setIsGiven ] = React.useState<boolean>(variable.given);
    var checkBoxRef: HTMLInputElement | null = null;
    
    variable.onValueChange(setCurrentValue);
    variable.onGivenChange(setIsGiven);
    
    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        variable.given = e.target.checked;
        if (e.target.checked) {
            checkBoxRef!.focus();
        }
    }

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (!isGiven) {
            if (e.code.startsWith("Digit")) {
                variable.given = true;
                variable.value = undefined;
            }
        }
        if (e.key == "Enter") {
            onEnter();
        }
    }

    return (
        <div>
            <label>
                {variable.name}
                &nbsp;
                <input type="checkbox" data-testid={`checkbox_${variable.name}`} checked={isGiven} onChange={handleCheckboxChange} />
            </label>
            
            &nbsp;

            <input
                ref={e => checkBoxRef = e}
                type="number"
                data-testid={`textbox_${variable.name}`}
                value={currentValue === undefined ? '' : currentValue.toString()}
                onChange={e => {
                    let newValue: number | undefined = parseFloat(e.target.value);
                    if (isNaN(newValue)) { newValue = undefined; }
                    
                    variable.value = newValue;
                    setCurrentValue(newValue);
                }} 
                onBlur={e => onBlur()}
                readOnly={!isGiven}
                onKeyPress={handleKeyPress}
                />

            &nbsp;

            {variable.description}
        </div>
    )
}

export default VariableBox;
