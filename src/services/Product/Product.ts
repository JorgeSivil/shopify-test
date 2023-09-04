import { ShopifyApi } from "@/services/Infrastructure/Axios";
import { Product } from "@/services/Product/Product.interfaces";
import { AxiosResponse } from "axios";

const getProductBySlug = async (slug: string): Promise<Product | null> => {
  try {
    const response: AxiosResponse<any> = await ShopifyApi.get(
      `/products.json?handle=${slug}`,
    );

    if (response.data?.products[0]) {
      return mapProduct(response.data.products[0]);
    }

    console.log('Product with slug "' + slug + '" not found');
    return null;
  } catch (error) {
    console.log('Error getting product with slug "' + slug + '"', error);
    return null;
  }
};

function mapProduct(product: any): Product {
  const images = product.images.map((image) => ({
    src: image.src || "",
    alt: image.alt || "",
    variantIds: image.variant_ids || [],
    width: image.width || 0,
    height: image.height || 0,
  }));
  const options = product.options.map((option) => ({
    id: option.id || "",
    name: option.name || "",
    values: option.values || [],
  }));

  return {
    title: product.title || "",
    description: product.description || "",
    htmlDescription: product.body_html || "",
    image: {
      src: product.image.src || "",
      alt: product.image.alt || "",
      variantIds: product.image.variant_ids || [],
      width: product.image.width || 0,
      height: product.image.height || 0,
    },
    images,
    options,
    status: product.status || "",
    variants: product.variants.map((variant) => ({
      id: variant.id || "",
      title: variant.title || "",
      price: variant.price || "",
      compareAtPrice: variant.compare_at_price || "",
      available: variant.available || false,
      inventoryQuantity: variant.inventory_quantity || 0,
      requiresShipping: variant.requires_shipping || false,
    })),
  };
}

export { getProductBySlug };
