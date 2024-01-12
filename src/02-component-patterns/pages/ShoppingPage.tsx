import { ProductButtons, ProductImage, ProductTitle, ProductCart } from '../components';
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';
import '../styles/custom-styles.css';




export const ShoppingPage = () => {

    const { onProductCountChange, shoppingCart } = useShoppingCart();
    
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
                        <ProductCart 
                            className='bg-dark' 
                            key={product.id} 
                            onChange={onProductCountChange} 
                            product={product} 
                            value={shoppingCart[product.id]?.count || 0}
                        >
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
                            value={ product.count }
                            onChange={ onProductCountChange }
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
