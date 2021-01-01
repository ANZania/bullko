import { useState } from 'react';

const getChoices =  options => options.map( (item) => ({
    name: item,
    checked: false
}));

export function useOptions( openItem ) {
    const [ options, setOptions ] = useState(getChoices( openItem.choices ));

    const checkOptions = index => {
        setOptions( options.map((item, i) => {
            const newItem = {...item}; 

            if (i === index) {
                newItem.checked = !newItem.checked
            }

            return newItem
        }))
    }

    return { options, checkOptions };
}