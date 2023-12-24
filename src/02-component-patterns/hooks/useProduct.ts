import { useState } from "react";

interface Product {
    counterState: number,
    increaseBy: (value: number) => void
}
export const useProduct = () :Product=> {
    const [counterState, setCounter] = useState(0);

    const increaseBy = (value: number) => {
        setCounter(prev => Math.max(prev + value, 0));
    }
    return({
        counterState, increaseBy
    })
}
