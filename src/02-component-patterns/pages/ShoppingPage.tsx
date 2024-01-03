import { ProductButtons, ProductImage, ProductTitle, ProductCart } from '../components';
import { Product } from '../interfaces/interfaces';
import '../styles/custom-styles.css';
import { useState } from 'react';

const product1 = {
    id: '1',
    title: 'Coffee Mug - Card',
    image: 'coffee-mug.png'
}

const product2 = {
    id: '2',
    title: 'Coffee Mug - Meme',
    image: 'coffee-mug2.png'
}


interface ProductInCart extends Product {
    count: number
}

const products: Product[] = [product1, product2];


export const ShoppingPage = () => {
    
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
    
    return (

        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                {
                    products.map(product => (
                        <ProductCart product={product} className='bg-dark' onChange={onProductCountChange} key={product.id}>
                            <ProductImage className='custom-image' />
                            <ProductTitle className='text-white' />
                            <ProductButtons className='custom-buttons' />
                        </ProductCart>
                    ))
                }

            </div>

            <div className='shopping-cart'>

                {
                    Object.entries(shoppingCart).map( ([key, product])=> (
                        <ProductCart
                        key={ key }
                        product={ product } 
                        className='bg-dark' 
                        style={{
                            width: '100px'
                        }}
                        value={product.count}
                        >
                            <ProductImage className='custom-image' />
                            <ProductButtons className='custom-buttons' />
                        </ProductCart>
                    ) )
                }

            </div>
        </div>
    )
}
