import { Prisma, Product } from "@prisma/client";
import Image from "next/image";
import { calculateProductPrice } from "../_helpers/price";
import { ArrowDownAzIcon, ArrowDownIcon } from "lucide-react";

interface ProductItemProps {
  product: Prisma.ProductGetPayload<{
    include: {
      restaurant:{
        select:{
          name: true
        
      }
    }
  
  }
  }>;
} 

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="w-[150px] space-y-2">
      {/* div para a Imagem*/}
      <div className="relative h-[150px] w-full min-w-[150px] px-5">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="rounded-lg object-cover shadow-md"
        />
        {product.discountPercentage && (
          <div className="absolute left-2 top-2 flex items-center gap-[2px] rounded-full bg-primary px-2 py-[2px] text-white">
            <ArrowDownIcon size={12} />
            <span className="text-xs font-semibold">
              {product.discountPercentage}%
            </span>
          </div>
        )}
      </div>

      {/* div para o texto*/}
      <div>
        <h2 className="truncate font-semibold">{product.name}</h2>
        <div className="flex gap-2">
          <h3 className="font-semibold ">
            {Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(calculateProductPrice(product))}
          </h3>
          <span>
            {product.discountPercentage > 0 && (
              <span className="text-gray-400 line-through">
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(Number(product.price))}
              </span>
            )}
          </span>
        </div>
        <span className="text-gray-400 text-sm">
          {product.restaurant.name}
        </span>
      </div>
    </div>
  );
};

export default ProductItem;
