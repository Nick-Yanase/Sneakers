import Product from "@/data/model/Product";
import Image from "next/image";
import { useState } from "react";

export interface ProductCardProps {
  product: Product
  modalAberto: boolean
  abrirModal: () => void
  fecharModal: () => void
}

export default function ProductCard(props: ProductCardProps) {
  const [imagemAberta, setImagemAberta] = useState(0);
  const [modalAberto, setModalAberto] = useState(false);
  const { name, image } = props.product;

  function abrirModal() {
    setModalAberto(true);
  }
  function fecharModal() {
    setModalAberto(false);
  }
  return (
    <div className="w-1/2">
      <div className="flex flex-col gap-8 w-full cursor-pointer">
        <div className="relative w-[450px] h-[450px] rounded-lg overflow-hidden">
          <Image
            src={`/img/${image[imagemAberta]}`}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex justify-between w-[450px]">
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
