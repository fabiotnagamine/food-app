import { db } from "../_lib/prisma";
import CategoryItem from "./category-item";
import Image from "next/image";

const CategoryList = async () => {
  const categories = await db.category.findMany({});
  return (<>
   <div className="grid grid-cols-3 ">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
    <div className="pt-6 px-5">
    <Image src="/Banner.png" alt="Até 30 porcento"
    width={0}
    height={0}
    className="w-full h-auto object-contain"
    sizes="100vw"
    quality={100}
    />
    </div>
  </>
   
  );
};

export default CategoryList;
