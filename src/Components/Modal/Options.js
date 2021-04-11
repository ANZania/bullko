import React from 'react';
import styled from 'styled-components';

const OptionItems = styled.div`
    padding-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    height: 85px;
`;

const OptionLabel = styled.label`
    display: flex;    
`;

const OptionCheckbox = styled.input`
`;

const OptionText = styled.p`
    padding-left: 10px;
    font-size: 16px;
    align-items: center;
`;

export const Options = ( {options, checkOptions} ) => {
    return (
        <>
        <OptionItems>
            {options.map( (item, i) => (
                <OptionLabel key={i}>
                    <OptionCheckbox 
                    type="checkbox" 
                    checked={item.checked}
                    onChange={() => checkOptions(i)}
                    />
                    <OptionText>{item.name}</OptionText>
                </OptionLabel>
            ))}
                        
        </OptionItems>
        </>
    )
}