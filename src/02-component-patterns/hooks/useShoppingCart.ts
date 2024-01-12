import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";



export const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({}); //[key:string] means that accepts X times products with a key in string because they could be on interger.

    const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {
        setShoppingCart(oldShoppingCart => {

            if(count === 0){
                const { [product.id]: toDelete, ...rest } = oldShoppingCart;
                return rest
            }

            return {
                ...oldShoppingCart,
                [ product.id ]: { ...product, count }
            }
        })
    }

    return {
        shoppingCart,
        onProductCountChange
    }
}