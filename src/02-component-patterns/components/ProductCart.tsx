import { createContext } from 'react';
import { useProduct } from '../hooks/useProduct'
import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css'






export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;




export const ProductCart = ({ product, children }: ProductCardProps) => {

    const { increaseBy, counterState } = useProduct();


    return (
        <Provider value={{
            counterState,
            increaseBy,
            product
        }}>
            <div className={styles.productCard}>
                {
                    children
                }
            </div>
        </Provider>
    )
}
