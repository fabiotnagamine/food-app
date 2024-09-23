import { Product } from "@prisma/client";

export const calculateProductPrice = (product: Product) =>{
    if(product.discountPercentage === 0 ){
        return Number(product.price);            
        }
        const discount = Number(product.price) * (product.discountPercentage / 100);
        const total = Number(product.price) - discount;
        return total;
    }

export const formatCurrency = (value: number): string => {
    // Implement the logic to format the currency
    // For example:
    return `$${value.toFixed(2)}`;
  }
