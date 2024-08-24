import { IconMinus, IconPlus, IconTrash } from "@tabler/icons-react";
import Image from "next/image";
import Button from "../Button";
import useCart from "@/data/hooks/useCart";

export default function CartWithProducts() {
  const {itens, deleteProduct, removeProduct, sendCart} = useCart()
  return(
    <div className=" flex flex-col gap-8 px-2 pt-10 md:pt-0">
            <h3 className="font-bold text-2xl text-zinc-900 ">Sneakers cart</h3>
            <div className="flex flex-col lg:flex-row gap-8 ">
              <div className="flex flex-1 rounded-xl justify-between items-start bg-white shadow-lg h-96 p-4 gap-8">
                {itens.map((item, index) =>
                  <div key={index} className="w-full flex items-start gap-8 justify-between">
                    <div className="flex flex-col md:flex-row justify-around items-center border-b-2 p-4 pt-2 gap-3 h-fit ">
                        <div className="flex gap-5">
                          <div className="size-20 md:size-32 relative rounded-lg overflow-hidden">
                            <Image
                              src={`/img/${item.product.image[0]}`}
                              alt={item.product.name}
                              fill
                              className="object-cover"/>
                          </div>
                          <div className="flex flex-col justify-between py-1 w-10/12">
                            <h3 className="text-zinc-600 font-semibold text-base">{item.product.name}</h3>
                            <p className="text-zinc-500 text-xs hidden md:block">{item.product.description}</p>
                            <p className="text-zinc-900 font-extrabold">${(item.product.price-(item.product.price*item.product.discount)).toFixed(2)}</p>
                          </div>
                        </div>
                        <div className="flex flex-row md:flex-col items-end gap-8 justify-between py-2 w-full">
                          <button onClick={() => deleteProduct(item)}>
                            <IconTrash className="text-zinc-400 transition-all hover:text-red-500" />
                          </button>
                          <div className="flex w-28 px-2 bg-zinc-200 justify-between rounded-lg relative">
                            <button onClick={() => item.quantity == 1 ? deleteProduct(item) : removeProduct(item.product)} > {/*se qaundo ele clicar no botão de menos a quantidade for == 1, então ele deleta o produto, senão ele diminui 1*/}
                              <IconMinus className="size-5 text-orange-500 stroke-2 "/>
                            </button>
                            <span className="text-black font-bold mx-auto">{item.quantity}</span>
                            <button onClick={() => sendCart(item.product, 1)}  className="text-orange-500">
                              <IconPlus />
                            </button>
                          </div>
                        </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="lg:w-80 w-full bg-white shadow-lg p-8 rounded-xl flex justify-center items-center">
                  <div className="w-full space-y-8">
                    <h2 className="text-zinc-900 font-bold text-xl">Payment</h2>
                    <div className="flex flex-col gap-1">
                      <div className="flex justify-between text-zinc-600">
                        <span>Subtotal:</span>
                        <span>${(itens.reduce((total, item) => total + item.quantity * item.product.price, 0)).toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-zinc-600">
                        <span>Discount:</span>
                        <span className="text-red-500 font-semibold">- {(itens.reduce((total, item) => total + item.quantity * (item.product.price * item.product.discount), 0).toFixed(2))}</span>
                      </div>
                    </div>
                    <div className="w-full h-px bg-zinc-300"></div>
                    <div className="flex justify-between">
                      <span className="text-zinc-600">Total payable:</span>
                      <span className="font-bold text-orange-500">${(itens.reduce((total, item) => total + item.quantity * (item.product.price - (item.product.price * item.product.discount)), 0)).toFixed(2)}</span>
                    </div>
                    <Button>
                      <span className="font-bold">Checkout</span>
                    </Button>
                    </div>
                  </div>
            </div>
          </div>
  )
}
