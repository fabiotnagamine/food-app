import { Prisma } from "@prisma/client";
import ProductItem from "./product-item";

interface ProductListProps {
  products: Prisma.ProductGetPayload<{
    include: {
      restaurant: {
        select: {
          name: true;
        };
      };
    };
  }>[];
}

const ProductList = async ({products}:ProductListProps) => {
  
  return (
    <div className="{&::-webkit-scrollbar]:hidden flex gap-4 overflow-x-scroll">
      {products.map((products) => (
        <ProductItem key={products.id} product={products} />
      ))}
    </div>
  );
};

export default ProductList;
