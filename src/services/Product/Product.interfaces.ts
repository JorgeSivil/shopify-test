export interface ProductImage {
    src: string;
    variantIds: string[];
    width: number;
    height: number;
    alt: string;
}

export interface ProductVariant {
    id: string;
    title: string;
    price: string;
    compareAtPrice: string;
    available: boolean;
    inventoryQuantity: number;
    requiresShipping: boolean;
}

export interface ProductOptions {
    id: string;
    name: string;
    values: string[];
}

export interface Product {
    htmlDescription: string | TrustedHTML;
    images: ProductImage[];
    image: ProductImage;
    title: string;
    description: string;
    status: string;
    variants: ProductVariant[];
    options: ProductOptions[];
}
