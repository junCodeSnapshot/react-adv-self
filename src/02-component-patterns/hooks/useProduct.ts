import { useState } from "react";
import { Product, onChangeArgs } from '../interfaces/interfaces';

// interface Product {
//     counterState: number,
//     increaseBy: (value: number) => void
// }

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void
}

export const useProduct = ({ onChange, product }: useProductArgs) => {
    const [counterState, setCounter] = useState(0);

    const increaseBy = (value: number) => {
        const newValue = Math.max(counterState + value, 0)
        setCounter(newValue);
        onChange && onChange({ count: newValue, product });
    }
    return({
        counterState, increaseBy
    })
}
