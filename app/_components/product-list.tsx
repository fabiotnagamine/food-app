import { db } from "../_lib/prisma";
import ProductItem from "./product-item";

const ProductList = async () => {
  const product = await db.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
    take: 500,
      include: {
        restaurant: {
          select: {
            name: true,
          },
        },
        }
  }
  );
  return (
    <div className="{&::-webkit-scrollbar]:hidden flex gap-4 overflow-x-scroll">
      {product.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
