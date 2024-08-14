import {IconShoppingCart } from "@tabler/icons-react";
import Button from "../Button";
import useCart from "@/data/hooks/useCart";
import Product from "@/data/model/Product";
import ProductMinusPlus from "./ProductMinusPlus";

export interface ProductInfoProps {
  product: Product
}
export default function ProductInfo(props: ProductInfoProps) {
  const { name, description, price, discount, manufacturer } = props.product; //props.product conseguimos obter o produto atual
  const {sendCart, itemsQuantity} = useCart(); //contexto para chamarmos as funções
  return (
    <div className="w-full md:w-5/12 flex justify-center md:justify-start">
      <div className=" w-10/12 space-y-10">
        <p className="text-zinc-500 font-semibold tracking-widest text-lg uppercase">{manufacturer}</p>
        <h1 className="font-bold text-5xl text-zinc-900">{name}</h1 >
        <p className="text-zinc-500">{description}</p>
        <div className="flex flex-col gap-2">
          <div className="flex gap-3 items-end">
            <span className="font-bold text-zinc-900 text-3xl">
              ${(price - (price * discount)).toFixed(2)}
            </span>
            <span className="text-white bg-zinc-900 font-semibold text-sm py-1 px-2.5 rounded-lg">%{(discount * 100).toFixed(0)}</span>
          </div>
          <span className="text-zinc-600 font-bold line-through">${price.toFixed(2)}</span>
        </div>
        <div className="flex flex-col md:flex:row gap-4">
          <ProductMinusPlus />
          <Button onClick={() => sendCart(props.product, itemsQuantity)}>
              <IconShoppingCart className="text-black size-6 stroke-[1.4]" />
              Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}
