import { getProductBySlug } from "@/services/Product/Product";
import ProductPage from "@/components/Pages/Product/Product";

export const getServerSideProps = async (context) => {
  const { params } = context;
  const { slug } = params;

  const productData = await getProductBySlug(slug);

  if (productData === null || productData.status !== "active") {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product: productData,
      metadata: {
        title: productData.title,
      }
    },
  };
};

export default ProductPage;
1
