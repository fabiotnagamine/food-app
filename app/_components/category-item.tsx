import { Category } from "@prisma/client";
import Image from "next/image";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <div className=" shadow-md flex min-w-[120px] items-center gap-3 rounded-full bg-white px-4 py-3">
      <Image
        src={category.imageUrl}     
        alt={category.name}
        height={30}
        width={30}
      />

      <span className="text-sm font-bold">{category.name}</span>
    </div>
  );
};

export default CategoryItem;
