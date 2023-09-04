import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Stat,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Carousel from "@/components/Carousel/Carousel";
import { productImagesToCarousel } from "@/utils/Product";
import { Product } from "@/services/Product/Product.interfaces";
import Variants from "@/components/Product/Variants";
import Image from "next/image";

const ProductPage = ({ product }: { product: Product }) => {
  const [activeVariantId, setActiveVariantId] = useState(
    product.image?.variantIds?.[0] || product.variants[0].id,
  );

  const activeVariantData = product.variants.find(
    (variant) => variant.id === activeVariantId,
  );

  let activeVariantDataImageIndex = undefined;
  for (let i = 0; i < product.images.length; i++) {
    const currentImage = product.images[i];

    if (currentImage.variantIds.includes(activeVariantId)) {
      activeVariantDataImageIndex = i;
      break;
    }
  }

  return (
    <Container maxWidth="1400px">
      <Flex paddingTop={6} flexDirection={["column", "column", "row"]}>
        <Box maxWidth={'container.md'}>
          {product.images.length > 1 && (
            <Carousel
              slides={productImagesToCarousel(product.images)}
              slideToShow={activeVariantDataImageIndex}
            />
          )}
          {product.images.length === 1 && (
            <Image
              src={product.images[0].src}
              width={product.images[0].width}
              height={product.images[0].height}
              alt={product.images[0].alt}
              style={{ objectFit: "contain" }}
            />
          )}
        </Box>
        <Flex flexDirection="column" paddingLeft={[0, 0, 6]} marginTop={[3, 3, 0]} flexGrow={1}>
          <Heading as="h1" size="4xl" noOfLines={1} width="full">
            {product.title}
          </Heading>
          <Text fontSize="md">Price: ${activeVariantData.price}</Text>
          {product.options.map((option) => (
            <Variants
              title={option.name}
              selectedValue={activeVariantData.title}
              onSelect={(variantTitle) => {
                setActiveVariantId(
                  product.variants.find(
                    (variant) => variant.title === variantTitle,
                  ).id,
                );
              }}
              values={option.values}
              key={option.name}
            />
          ))}
          <Button
            colorScheme="teal"
            variant="solid"
            onClick={() => {
              alert("Not Implemented");
            }}
            marginTop={4}
          >
            Add to cart
          </Button>
        </Flex>
      </Flex>
      <Flex marginTop={10}>
        <div dangerouslySetInnerHTML={{ __html: product.htmlDescription }} />
      </Flex>
    </Container>
  );
};

export default ProductPage;
