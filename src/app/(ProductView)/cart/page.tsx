'use client'
import CartEmpty from "@/components/Cart/CartEmpty";
import CartWithProducts from "@/components/Cart/CartWithProducts";
import TemplatePage from "@/components/layout/TemplatePage";
import useCart from "@/data/hooks/useCart";

export default function Cart(){
  const {itens} = useCart()
  return(
    <TemplatePage>
      <section className=" flex justify-center items-center max-w-screen-xl w-full px-4">
      {
        itens.length === 0 ? (
          <CartEmpty />
        ) : (
          <CartWithProducts />
        )
      }
      </section>
    </TemplatePage>
  )
}