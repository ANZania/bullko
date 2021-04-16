import { useState, useEffect } from 'react';

export const useDB = (database) => {
    const [ data, setData ] = useState(null);

    useEffect(() => {
        const DBRef = database.ref('goods').on('value', snapshot => {
            setData(snapshot.val())
        });
    }, [database]);

    return data

}