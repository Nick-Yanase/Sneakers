import { IconTrash } from "@tabler/icons-react";
import Image from "next/image";
import Button from "../Button";
import useCart from "@/data/hooks/useCart";

export default function ProductCartPreview() {
  const { itens, abrirModalPreview, fecharModalPreview, deleteProduct } = useCart();
  return (
    <div
      onMouseEnter={abrirModalPreview}
      onMouseLeave={fecharModalPreview}
      className="w-[29%] flex flex-col gap-6 rounded-lg shadow-xl p-7 absolute -right-24 top-20 bg-white transition-all ease-in-out"
    >
      <h3 className="text-sm font-extrabold text-zinc-900">Cart</h3>
      <div className="bg-zinc-300 w-full h-px " />
      {itens.length !== 0 ? (
        itens.map((item) => (
          <>
          <div key={item.product.id} className="flex gap-4 justify-between items-center">
            <div className="relative size-12 rounded-md overflow-hidden">
              <Image
                src={`/img/${item.product.image[0]}`}
                alt={item.product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-zinc-600 text-sm">{item.product.name}</p>
              <div className="flex gap-1.5 items-center">
                <span className="text-zinc-600">
                  ${(item.product.price - item.product.price * item.product.discount).toFixed(2)}
                </span>
                <span className="text-zinc-600">x</span>
                <span className="text-zinc-600">{item.quantity}</span>
                <span className="text-zinc-900 font-extrabold">
                  {(
                    (item.product.price - item.product.price * item.product.discount) * item.quantity
                  ).toFixed(2)}
                </span>
              </div>
            </div>
            <button onClick={() => deleteProduct(item)}>
              <IconTrash className="text-zinc-400 transition-all hover:text-red-500" />
            </button>
          </div>

          <Button>
          <p className="font-extrabold">Checkout</p>
          </Button>
          </>
        ))
      ) : (
        <div className="mx-auto my-0">
          <p className="text-zinc-500 font-bold">Your cart is empty</p>
        </div>
      )}
    </div>
  );
}
