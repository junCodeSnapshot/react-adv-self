import { useEffect, useRef, useState } from "react";
import { Product, onChangeArgs, InitialValues } from '../interfaces/interfaces';

// interface Product {
//     counterState: number,
//     increaseBy: (value: number) => void
// }

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {

    const [counterState, setCounter] = useState<number>(initialValues?.count || value);
    const isMounted = useRef(false);

    const increaseBy = (value: number) => {
        let newValue = Math.max(counterState + value, 0);

        if(initialValues?.maxCount){
            newValue = Math.min(newValue, initialValues.maxCount);
        }
        
        setCounter(newValue);
        onChange && onChange({ count: newValue, product })
    }

    const reset = () => {
        setCounter(initialValues?.count || value)
    }

    useEffect(() => {
        if(!isMounted.current) return;
        setCounter(value);
    }, [value]);

    useEffect(() => {
        isMounted.current = true;
    },[])

    console.log(!!initialValues?.maxCount && initialValues.count === initialValues.maxCount)

    return ({
        counterState, 
        increaseBy, 
        isMaxCountReached: !!initialValues?.maxCount && counterState === initialValues.maxCount,
        maxCount: initialValues?.maxCount,
        reset,
    })
}
