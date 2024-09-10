import { Restaurant } from "@prisma/client";
import Image from "next/image";
import { StarIcon, Timer, TimerIcon, Truck } from "lucide-react";


interface RestaurantProps {
  restaurant: Restaurant;
}

// Define the formatCurrency function
function formatCurrency(value: number): string {
  // Implement the logic to format the currency
  // For example:
  return `$${value.toFixed(2)}`;
}

const RestaurantItem = ({ restaurant }: RestaurantProps) => {
  return (
    <div className="min-w-[266px] max-w-[266px] space-y-3">
      {/* div para a Imagem*/}
      <div className="w-full h-[136px] relative">
        <Image  
          src={restaurant.imageUrl}
          alt={restaurant.name}
          fill
          className="object-cover rounded-lg"
        />
        <div className="absolute left-2 top-2 flex items-center gap-[2px] rounded-full bg-primary px-2 py-[2px] text-white">
            <StarIcon size={12} />
            <span className="text-xs font-semibold">5,0 </span>
            </div>
      </div>
     
          

      {/* div para o texto*/}
      <div>
        <h3 className="text-sm font-semibold">{restaurant.name}</h3>
        <div className="flex gap-3">
          <div className="flex gap-1">
            <Truck className="text-primary text-xs" size={14}/>
            <span className="text-xs font-semibold">
              {Number(restaurant.deliveryFee) === 0 ? "Entrega Grátis" : formatCurrency(Number(restaurant.deliveryFee)) }
            </span>
          </div>
          {/* Tempo de Entrega */}
          <div className="flex gap-1">
            <TimerIcon className="text-primary text-xs" size={14}/>
            <span className="text-xs font-semibold">
              {restaurant.deliveryTimeMinutes} min
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantItem;
