import { useContext } from 'react';
import { ProductContext } from './ProductCart';
import noImage from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'



export interface Props {
    img?: string;
    className?: string;
    style?: React.CSSProperties;
}

export const ProductImage = ({ img = '', className, style}: Props) => {
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
        <img 
            alt='Coffee Mug' 
            className={`${styles.productImg} ${className}` }
            src={ imgToShow }
            style={ style }
        />
    )
}
