import { db } from "../_lib/prisma";
import RestaurantItem from "./restaurant-item";


const RestaurantList = async () => {
    const restaurants = await db.restaurant.findMany({take:10});
    return ( 
        <div className= "gap-4 flex overflow-x-scroll px-5 [&::-webkit-scrollbar]:hidden">
            {restaurants.map((restaurant) => (
                <RestaurantItem key={restaurant.id} restaurant={restaurant}/>

            ))}
        </div>
            
     );
     
}
 
export default RestaurantList;