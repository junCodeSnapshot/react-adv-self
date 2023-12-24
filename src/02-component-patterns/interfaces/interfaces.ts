import { ReactElement } from "react";

export interface ProductCardProps {
    product: Product;
    children?: ReactElement | ReactElement[]
}

export interface Product {
    id: string;
    title: string;
    image?: string;
}

export interface ProductContextProps {
    counterState: number;
    increaseBy: (value: number) => void;
    product: Product;
}

export interface ProductCardHOCProps {
    ({product, children}: ProductCardProps): JSX.Element,
    Title: ({ title }: { title?: string }) => JSX.Element,
    Image:({ img }: {img?: string}) => JSX.Element,
    Buttons: () => JSX.Element
}