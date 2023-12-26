import { ProductButtons, ProductImage, ProductTitle, ProductCart } from '../components';
import '../styles/custom-styles.css';

const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    image: 'coffee-mug.png'
}


export const ShoppingPage = () => {
    return (

            <div>
                <h1>Shopping Store</h1>
                <hr />
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }}>
                    <ProductCart product={product} className='bg-dark'>
                        <ProductCart.Image className='custom-image'/>
                        <ProductCart.Title className='text-white'/>
                        <ProductCart.Buttons className='custom-buttons'/>
                    </ProductCart>

                    <ProductCart product={product} className='bg-dark'>
                        <ProductImage className='custom-image'/>
                        <ProductTitle className='text-white'/>
                        <ProductButtons className='custom-buttons'/>
                    </ProductCart>

                    <ProductCart product={product} style={{
                        backgroundColor: '#70D1F8'
                    }}>
                        <ProductImage />
                        <ProductTitle />
                        <ProductButtons />
                    </ProductCart>
                </div>
            </div>
    )
}
