'use client'
import Button from "@/components/Button";
import TemplatePage from "@/components/layout/TemplatePage";
import useCart from "@/data/hooks/useCart";
import { IconShoppingCartOff } from "@tabler/icons-react";
import Link from "next/link";

export default function Cart(){
  const {itens} = useCart()
  return(
    <TemplatePage>
      <section className="flex flex-col mx-auto max-w-screen-xl items-center justify-between w-full">
      {
        itens.length === 0 ? (
          <div className=" w-96 p-4 flex flex-col gap-4 items-center justify-center">
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
          <div>
            
          </div>
        )
      }
      </section>
    </TemplatePage>
  )
}