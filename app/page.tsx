import { ChevronRightIcon } from "lucide-react";
import CategoryList from "./_components/category-list";
import Header from "./_components/header";
import ProductList from "./_components/product-list";
import Search from "./_components/search";
import { Button } from "./_components/ui/button";
import { db } from "./_lib/prisma";

const Home = async () => {
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
    <>
      <Header />
      <div className="px-5 pt-6">
        <Search />
      </div>
      <div className="px-5 pt-6">
        <CategoryList />
      </div>
      <div className="pt-6 space-y-2">
        <div className="flex justify-between px-5">
          <h2 className="font-semibold">Pedidos Recomendados</h2>
          <Button variant="ghost" className="text-primary hover:bg-transparent h-fit">
            Ver todos
            <ChevronRightIcon size={16}/>
          </Button>
        </div>
        <ProductList products={product} />
      </div>
    </>
  );
};

export default Home;
