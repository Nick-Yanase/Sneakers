import Product from "@/data/model/Product";
import Image from "next/image";
import { useState } from "react";

export interface ProductCardProps {
  product: Product
  abrirModal: () => void
  fecharModal: ()=> void
  imagemAberta: number
  setImagemAberta: (imagemAberta: number) => void
}

export default function ProductCard(props: ProductCardProps) {
 
  //pegando as props da interface e passar como varaiveis pra ser mais facil
  const { name, image } = props.product;
  const abrirModal = props.abrirModal;
  const fecharModal = props.fecharModal;
  const imagemAberta = props.imagemAberta
  const setImagemAberta = props.setImagemAberta

  return (
    <div className="w-1/2">
      <div className="flex flex-col gap-6 w-full cursor-pointer">
        <button 
          onClick={abrirModal}
          className="relative size-[425px] rounded-lg overflow-hidden">
          <div className="absolute inset-0 opacity-0 hover:opacity-30 bg-white transition-opacity ease-linear z-10"/>
          <Image
            src={`/img/${image[imagemAberta]}`}
            alt={name}
            fill
            className="object-cover -z-10"
          />
        </button>
        <div className="flex justify-between w-[425px]">
          {image.map((imgSrc, index) => (
            <button
              key={index}
              onClick={() => setImagemAberta(index)}
              className={`relative w-20 h-20 rounded-lg overflow-hidden z-20 ${
                imagemAberta === index ? "border-[3px] border-orange-500" : ""
              }`}
            >
              <div className="absolute inset-0 hover:bg-white/30  transition z-10"></div>
              <Image
                src={`/img/${imgSrc}`}
                alt={name}
                fill
                className="object-cover rounded-md"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
