import { createContext } from 'react';
import { useProduct } from '../hooks/useProduct'
import { InitialValues, Product, ProductCardHandlers, ProductContextProps, onChangeArgs } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css'



export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    product: Product;
    // children?: React.ReactElement | React.ReactElement[];
    children: (args: ProductCardHandlers) => JSX.Element;
    className?: string;
    style?: React.CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues
}


export const ProductCart = ({ product, children, className, style, onChange, value, initialValues }: Props) => {

    const { increaseBy, counterState, maxCount, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValues });


    return (
        <Provider value={{
            counterState,
            increaseBy,
            product,
            maxCount
        }}>
            <div 
            className={` ${styles.productCard} ${className}`}
            style={ style }
            >
                {
                    children({
                        count: counterState,
                        increaseBy,
                        isMaxCountReached,
                        maxCount: initialValues?.maxCount,
                        product,
                        reset,
                    })
                }
            </div>
        </Provider>
    )
}
