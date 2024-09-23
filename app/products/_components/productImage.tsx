"use client"


import { Button } from "@/app/_components/ui/button";
import { Product } from "@prisma/client"
import { ChevronLeftIcon } from "lucide-react";
import Image from "next/image"


interface ProductImageProps {
    product: Pick<Product, 'name' | 'imageUrl'>;
    }

const ProductImage = ({product}: ProductImageProps) => {
    return ( 
        <div className="w-full relative h-[360px]">
        <Image src={product.imageUrl} alt={product.name} fill className="object-cover" />

        <Button className="top-2 left-2 bg-white text-foreground absolute rounded-full hover:text-white" size="icon">
          <ChevronLeftIcon size={24} />

        </Button>


      </div>
     );
}
 
export default ProductImage;