import { Button } from "@/app/_components/ui/button"
import { db } from "@/app/_lib/prisma"
import { ChevronLeftIcon, Icon } from "lucide-react"
import Image from "next/image"
import { notFound } from "next/navigation"

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

  })

  if (!product) {
    return notFound();
  }

  return (
    <div>
      {/*Imagem do produto*/}
      <div className="w-full relative h-[360px]">
        <Image src={product.imageUrl} alt={product.name} fill className="object-cover" />

        <Button className="top-2 left-2 bg-white text-foreground absolute rounded-full hover:text-white" size="icon">
        <ChevronLeftIcon size={24} />

      </Button>
      </div>

      
    </div>
  )
}

export default ProductPage;