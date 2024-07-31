import { IconMinus, IconPlus, IconShoppingCart } from "@tabler/icons-react";
import Button from "../Button";
import useCart from "@/data/hooks/useCart";
import Product from "@/data/model/Product";

export interface ProductInfoProps {
  product: Product
}
export default function ProductInfo(props: ProductInfoProps) {
  const { name, description, price, discount, manufacturer } = props.product;
  const {quantity, adicionar, remover} = useCart(); //contexto para chamarmos as funções
  return (
    <div className="w-5/12 space-y-10">
      <p className="text-zinc-500 font-semibold tracking-widest text-lg uppercase">{manufacturer}</p>
      <h1 className="font-bold text-5xl text-zinc-900">{name}</h1 >
      <p className="text-zinc-500">{description}</p>
      <div className="flex gap-3 items-end">
        <span className="font-bold text-zinc-900 text-3xl">
          $ {(price - price * discount).toFixed(2)}
        </span>
        <span className="bg-zinc-900 font-semibold text-sm py-1 px-2.5 rounded-lg">%{(discount * 100).toFixed(0)}</span>
      </div>

      <div className="flex gap-4">
        <div className="flex w-48 px-2 bg-zinc-200 items-center justify-between rounded-lg relative">
          <button onClick={adicionar} className="">
            <IconMinus className="size-5 text-orange-500 stroke-2 "/>
          </button>
          <span className="text-black font-bold mx-auto">{quantity}</span>
          <button onClick={remover} className="text-orange-500">
            <IconPlus />
          </button>
        </div>
        <Button>
            <IconShoppingCart className="text-black size-6 stroke-[1.4]" />
            Add to cart
        </Button>
      </div>
    </div>
  );
}
