import React, { SelectHTMLAttributes } from 'react';

import './styles.css';

interface InputProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    label: string;
    options: Array<{
        value: string;
        label: string;
    }>;
}

const Select: React.FC<InputProps> = ({ name, label, options, ...rest }) => {
    return(
        <div className="select-block">
            <label htmlFor={name}>{ label }</label>
            <select id={name} defaultValue="" {...rest}>
                <option value="" disabled hidden>Selecione uma opção</option>
                {options.map(option => {
                    return(
                        <option key={option.value} value={option.value}>{option.label}</option>
                    )
                })}
            </select>
        </div>
    );
}

export default Select;