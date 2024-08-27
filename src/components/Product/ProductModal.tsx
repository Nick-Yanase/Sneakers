import Product from "@/data/model/Product";
import { IconArrowAutofitLeft, IconArrowLeft, IconArrowLeftBar, IconArrowLeftFromArc, IconArrowLeftRhombus, IconArrowLeftSquare, IconArrowRight, IconX } from "@tabler/icons-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

export interface ProductModalProps {
  product: Product;
  modalAberto: boolean;
  abrirModal: () => void;
  fecharModal: () => void;
  imagemAberta: number;
  setImagemAberta: (imagemAberta: number) => void;
  setImagemAbertaNext: () => void;
  setImagemAbertaBack: () => void;
}
export default function ProductModal(props: ProductModalProps) {
  const fecharModal = props.fecharModal;
  const { name, image } = props.product;
  const imagemAberta = props.imagemAberta;
  const setImagemAberta = props.setImagemAberta;
  const setImagemAbertaNext = props.setImagemAbertaNext;
  const setImagemAbertaBack = props.setImagemAbertaBack;

  return (
    <div 
    onClick={fecharModal} //se clicar fora fecha o modal
    className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 ">
      <div className=" flex flex-col gap-4 relative">

        <div className="flex justify-end">
          <button onClick={fecharModal} className="text-white">
            <IconX className="text-white hover:text-orange-500 transition-all stroke-[3]" />
          </button>
        </div>

        <div className="relative size-[550px] rounded-lg overflow-hidden">
          <Image
            src={`/img/${image[imagemAberta]}`}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        
        <button onClick={setImagemAbertaBack} className="size-12 rounded-full bg-white flex items-center justify-center absolute -left-6 top-[290px] hover:text-orange-500">
            <IconArrowLeft className="hover:text-orange-500 transition-all text-zinc-700 stroke-[2.5]"/>
        </button>
        <button onClick={setImagemAbertaNext} className="size-12 rounded-full bg-white flex items-center justify-center absolute -right-6 top-[290px] hover:text-orange-500">
            <IconArrowRight className="hover:text-orange-500 transition-all text-zinc-700 stroke-[2.5]"/>
        </button>
        <div className="w-[425px] flex justify-between mx-auto">
        {image.map((imgSrc, index) => (
            <button
              key={index}
              onClick={() => setImagemAberta(index)}
              className={`relative w-20 h-20 rounded-lg overflow-hidden z-20 ${
                imagemAberta === index ? "border-[3px] border-orange-500" : ""
              }`}
            >
              <div className={`${imagemAberta === index ? "absolute inset-0 bg-white/30 z-10" : " " }`}></div> 
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
