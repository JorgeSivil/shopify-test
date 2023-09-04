import { ProductImage } from "@/services/Product/Product.interfaces";

const productImagesToCarousel = (images: ProductImage[]) => {
  return images.map((image) => ({
    src: image.src,
    alt: image.alt,
  }));
};

export { productImagesToCarousel };
