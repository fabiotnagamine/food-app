import { Button } from "@/app/_components/ui/button"
import { db } from "@/app/_lib/prisma"
import { ArrowDownIcon, ChevronLeftIcon, Icon } from "lucide-react"
import { notFound } from "next/navigation"
import { formatCurrency } from "../../../app/_helpers/price"
import ProductImage from "../_components/productImage"
import Image from "next/image"


interface ProductPageProps {
  params: {
    id: string
  }
}


const ProductPage = async ({ params: { id } }: ProductPageProps) => {

  const product = await db.product.findUnique({
    where: {
      id,
    },
    include: {
      restaurant: {
        select: {
          name: true,
        },
      },
    },

  })

  if (!product) {
    return notFound();
  }

  return (
    <div>


      {/*Imagem do produto*/}
      <ProductImage product = {product}/>

      <div className="pt-5 pl-3"> 
        <div className="flex items-center gap-[0.375rem]">
          <div className="relative h-4 w-4">
            <Image
              src={product.imageUrl}
              alt={product.restaurant.name}
              fill
              className="object-cover rounded-full"
            />
          </div>

          <span className=" text-xs text-muted-foreground">
            {product.restaurant.name}
          </span>
        </div>
      </div>
      {/*Nome do produto*/}
      <h1 className="pt-1  pl-4 text-xl mt-1 mb-2 font-semibold">{product.name}</h1>
      {/*Preço do produto*/}

      <div className="flex justify-between">
        <div className="flex items-center">
          <h2 className="pl-4 text-xl font-semibold">
            {formatCurrency(Number(product.price))}
          </h2>
          {product.discountPercentage > 0 && (
            <div className="absolute left-2 top-2 flex items-center gap-[2px] rounded-full bg-primary px-2 py-[2px] text-white">
              <ArrowDownIcon size={12} />
              <span className="text-xs font-semibold">
                {product.discountPercentage}%
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductPage;