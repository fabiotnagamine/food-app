import { ChevronRightIcon } from "lucide-react";
import CategoryList from "./_components/category-list";
import Header from "./_components/header";
import ProductList from "./_components/product-list";
import Search from "./_components/search";
import { Button } from "./_components/ui/button";
import { db } from "./_lib/prisma";
import PromoBanner from "./_components/promo-banner";
import RestaurantList from "./_components/restaurant-list";

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
    },
  });
  return (
    <>
      <Header />
      <div className="px-5 pt-6">
        <Search />
      </div>

      <div className="px-5 pt-6">
        <CategoryList />
      </div>

      <div className="px-5 pt-6">
        <PromoBanner src="/Banner.png" alt="Até 30 porcento" />
      </div>

      <div className="space-y-2 pt-6">
        <div className="flex justify-between px-5">
          <h2 className="font-semibold">Pedidos Recomendados</h2>
          <Button
            variant="ghost"
            className="h-fit text-primary hover:bg-transparent"
          >
            Ver todos
            <ChevronRightIcon size={16} />
          </Button>
        </div>
        <ProductList products={product} />
      </div>
      <div className="px-5 pt-6">
        <PromoBanner
          src="/Banner_2.png"
          alt="A partir de R$ 17,90 em lanches"
        />
      </div>
      <div className="px-5 pt-6">
      <div className="space-y-2 pt-6">
        <div className="flex justify-between px-5">
          <h2 className="font-semibold">Restaurantes Recomendados</h2>
          <Button
            variant="ghost"
            className="h-fit text-primary hover:bg-transparent"
          >
            Ver todos
            <ChevronRightIcon size={16} />
          </Button>
        </div>
        <RestaurantList />
      </div>
      </div>
    </>
  );
};

export default Home;
