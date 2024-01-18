import { ProductButtons, ProductImage, ProductTitle, ProductCart } from '../components';
import { products } from '../data/products';

import '../styles/custom-styles.css';


const product = products[0];

export const ShoppingPage = () => {

    return (

        <div>
            <h1>Shopping Store</h1>
            <hr />
            <ProductCart
                className='bg-dark'
                key={product.id}
                product={product}
                initialValues={{
                    count: 4,
                    maxCount: 10
                }}
            >

                {
                    ({ count, increaseBy, isMaxCountReached, maxCount, reset }) => (
                        <>
                            <ProductImage className='custom-image' />
                            <ProductTitle className='text-white' />
                            <ProductButtons className='custom-buttons' />
                            <button onClick={reset}>Reset</button>
                            <button onClick={ () => increaseBy(-2) }>-2</button>
                            <span>{ count }</span>
                            {
                                !isMaxCountReached && <button onClick={ () => increaseBy(2) }>+2</button>
                            }
                            <code>{JSON.stringify(isMaxCountReached, null, 3)}</code>
                            
                        </>
                    )
                }
            </ProductCart>
        </div>
    )
}
