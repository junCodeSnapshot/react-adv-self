import { createContext } from 'react';
import { useProduct } from '../hooks/useProduct'
import { Product, ProductContextProps } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css'



export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    product: Product;
    children?: React.ReactElement | React.ReactElement[];
    className?: string;
    style?: React.CSSProperties;
}


export const ProductCart = ({ product, children, className, style }: Props) => {

    const { increaseBy, counterState } = useProduct();


    return (
        <Provider value={{
            counterState,
            increaseBy,
            product
        }}>
            <div 
            className={` ${styles.productCard} ${className}`}
            style={ style }
            >
                {
                    children
                }
            </div>
        </Provider>
    )
}
