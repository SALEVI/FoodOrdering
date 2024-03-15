import { CartItem, Product } from "@/types";
import { PropsWithChildren, createContext, useContext, useState } from "react";
import { randomUUID } from "expo-crypto";

type CartType = {
  items: CartItem[];
  addItem: (product: Product, size: CartItem["size"]) => void;
  updateQuantity: (itemId: string, amount: -1 | 1) => void;
};

const CartContext = createContext<CartType>({
  items: [],
  addItem: () => {},
  updateQuantity: () => {},
});

const CartProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (product: Product, size: CartItem["size"]) => {
    // if already in cart, increment quantity

    const newCartItem: CartItem = {
      id: randomUUID(), //generated
      product,
      product_id: product.id,
      size,
      quantity: 1,
    };

    setItems([newCartItem, ...items]);
  };

  //update quantity
  const updateQuantity = (itemId: string, amount: -1 | 1) => {
    setItems(
      items.map((item) =>
        item.id !== itemId
          ? item
          : { ...item, quantity: item.quantity + amount },
      ),
    );
  };

  return (
    <CartContext.Provider value={{ items, addItem, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
