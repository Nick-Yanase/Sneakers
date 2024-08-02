import useCart from "@/data/hooks/useCart";
import { IconMinus, IconPlus } from "@tabler/icons-react";

export default function ProductMinusPlus(){
  const {removeQuantity, addQuantity, itemsQuantity} = useCart();
  return(
  <div className="flex w-48 px-2 bg-zinc-200 items-center justify-between rounded-lg relative">
    <button onClick={removeQuantity} className="">
      <IconMinus className="size-5 text-orange-500 stroke-2 "/>
    </button>
    <span className="text-black font-bold mx-auto">{itemsQuantity}</span>
    <button onClick={addQuantity}  className="text-orange-500">
      <IconPlus />
    </button>
  </div>
  )
}