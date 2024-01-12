import { useEffect, useState } from "react";
import { Product, onChangeArgs } from '../interfaces/interfaces';

// interface Product {
//     counterState: number,
//     increaseBy: (value: number) => void
// }

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
}

export const useProduct = ({ onChange, product, value = 0 }: useProductArgs) => {
    const [counterState, setCounter] = useState(value);
    
    const increaseBy = (value: number) => {

        const newValue = Math.max(counterState + value, 0)
        setCounter(newValue);
        onChange && onChange({ count: newValue, product });

    }

    useEffect(() => {
            setCounter( value );
    }, [value])

    return ({
        counterState, increaseBy
    })
}
