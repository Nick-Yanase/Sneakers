import { createContext, useState } from "react";
import ItemCart from "../model/ItemCart";

const ContextoCarrinho = createContext<any>(null);

export interface CartContextProps{
  item: ItemCart
  quantity: number
}
export function CartProvider(props: any) {
  const [quantity, setQuantity] = useState(10);
  return (
    <ContextoCarrinho.Provider 
      value={{ 
        quantity,
        adicionar: () => setQuantity(quantity+1) ,
        remover: () => setQuantity(quantity-1)
        }}>
      {props.children}
    </ContextoCarrinho.Provider>
  );
}

export default ContextoCarrinho;