import { Props as ProductCardProps } from "../components/ProductCart";
import { Props as PropsTitle } from "../components/ProductTitle";
import { Props as PropsButtons } from '../components/ProductButton';
import { Props as PropsImage } from '../components/ProductImage'


export interface Product {
    id: string;
    title: string;
    image?: string;
}

export interface ProductContextProps {
    counterState: number;
    increaseBy: (value: number) => void;
    product: Product;
    maxCount?: number;
}

export interface ProductCardHOCProps {
    ({product, children}: ProductCardProps): JSX.Element,
    Title: (Props: PropsTitle) => JSX.Element,
    Image: (Props: PropsImage) => JSX.Element,
    Buttons: (Props: PropsButtons) => JSX.Element
}

export interface onChangeArgs {
    product: Product;
    count: number;
}

export interface ProductInCart extends Product {
    count: number
}

export interface InitialValues {
    count?: number;
    maxCount?: number;
}

export interface ProductCardHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;
    //functions
    increaseBy: (value: number) => void;
    reset: () => void;
}