import React, {FC} from 'react';

const RadioButton: FC<{
    id: number,
    option: string,
    checked: boolean,
    disabled: boolean,
    onChange: (id: number) => void
}> = ({id, option, checked, disabled, onChange}) => {
    return (
        <div>
            <label>
                <input
                    className="with-gap"
                    name="group1"
                    type="radio"
                    checked={checked}
                    disabled={disabled}
                    onChange={() => onChange(id)}/>
                <span>{option}</span>
            </label>
        </div>
    );
}

export default RadioButton;