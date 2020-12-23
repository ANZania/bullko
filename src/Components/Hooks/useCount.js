import { useState } from 'react';

export function useCount() {
    const [ count, setCount ] = useState(1);
    
    const onChange = (event) => {
        if ((event.target.value >= 1) && (Number.isInteger(event.target.value))) {
            setCount(event.target.value);
            
        }
    };

    return { count, setCount, onChange };
}