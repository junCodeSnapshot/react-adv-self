import { useContext } from 'react';
import { ProductContext } from './ProductCart';
import noImage from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'


export const ProductImage = ({ img = '' }) => {
    const { product } = useContext(ProductContext);
    let imgToShow: string;

    // img ? imgToShow = img : product.image? imgToShow = product.image : imgToShow = noImage;

    if( img ) {
        imgToShow = img;
    } else if( product.image ){
        imgToShow = product.image;
    }else{
        imgToShow = noImage
    }


    return (
        <img className={styles.productImg} src={ imgToShow } alt='Coffee Mug' />
    )
}
