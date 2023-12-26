import { useContext } from "react";
import { ProductContext } from "./ProductCart";
import styles from '../styles/styles.module.css'


export interface Props {
    className?: string;
    style?: React.CSSProperties
}

export const ProductButtons = ({ className, style }: Props) => {
    const {increaseBy, counterState} = useContext(ProductContext);
    return (
        <div 
            className={`${styles.buttonsContainer} ${ className }`}
            style={ style }
        >

            <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
                -
            </button>
            <div className={styles.countLabel}>{counterState}</div>
            <button className={styles.buttonAdd} onClick={() => increaseBy(1)}>
                +
            </button>

        </div>
    )
}