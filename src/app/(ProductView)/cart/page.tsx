'use client'
import Button from "@/components/Button";
import TemplatePage from "@/components/layout/TemplatePage";
import useCart from "@/data/hooks/useCart";
import { IconMinus, IconPlus, IconShoppingCartOff, IconTrash } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function Cart(){
  const {itens, deleteProduct, removeQuantity, sendCart} = useCart()
  return(
    <TemplatePage>
      <section className=" mx-auto max-w-screen-xl w-full">
      {
        itens.length === 0 ? (
          <div className="mx-auto w-96 p-4 flex flex-col gap-4 items-center justify-center">
            <div className="w-6/12 ">
              <IconShoppingCartOff className="text-zinc-500 size-full stroke-1"/>
            </div>
            <h4 className="text-zinc-600 font-semibold">Your cart is empty</h4>

            <Link href="/" className="w-full">
              <Button >
                View Products
              </Button>
            </Link>
          </div>
        ) : (
          <>
          <h3 className="font-bold text-2xl text-zinc-900 mb-8">Sneakers cart</h3>
          <div className="flex gap-8">
            <div className="flex flex-1 rounded-xl justify-between items-start bg-white shadow-2xl h-96 p-8 gap-8">
              {itens.map(item =>
                <div className="w-full flex items-start gap-8 justify-between">
                  <div className="flex rounded-xl justify-around items-center border-b-2 h-52 p-6 gap-4 ">
                    <div className="size-20 relative rounded-lg overflow-hidden">
                      <Image 
                        src={`/img/${item.product.image[0]}`}
                        alt={item.product.name}
                        fill 
                        className="object-cover"/>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-zinc-600 font-semibold text-lg">{item.product.name}</h3>
                      <p className="text-zinc-500 ">{item.product.description}</p>
                      <p className="text-zinc-900 font-extrabold">${(item.product.price-(item.product.price*item.product.discount)).toFixed(2)}</p>
                    </div>
                    <div className="flex flex-col py-4 items-end h-full justify-between">
                      <button onClick={() => deleteProduct(item)}>
                        <IconTrash className="text-zinc-400 transition-all hover:text-red-500" />
                      </button>
                      <div className="flex w-32 px-2 bg-zinc-200 justify-between rounded-lg relative">
                        <button onClick={removeQuantity} className="">
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
            <div className="w-96 shadow-xl p-8 rounded-xl flex justify-center items-center">
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
          </>
          
        )
      }
      </section>
    </TemplatePage>
  )
}