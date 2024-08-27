import Product from "@/data/model/Product";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";

export interface ProductCardProps {
  product: Product
  abrirModal: () => void
  imagemAberta: number
  setImagemAberta: (imagemAberta: number) => void
  setImagemAbertaNext: () => void
  setImagemAbertaBack: () => void
}

export default function ProductCard(props: ProductCardProps) {
 
  //pegando as props da interface e passar como varaiveis pra ser mais facil
  const { name, image } = props.product;
  const abrirModal = props.abrirModal;
  const imagemAberta = props.imagemAberta
  const setImagemAberta = props.setImagemAberta
  const setImagemAbertaNext = props.setImagemAbertaNext;
  const setImagemAbertaBack = props.setImagemAbertaBack;

  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      // Se o movimento foi para a esquerda, muda a imagem
      setImagemAbertaNext;
    } else if (touchEndX - touchStartX > 50) {
      // Se o movimento foi para a direita, muda a imagem
      setImagemAbertaBack;
    }
  };
  return (
    <div 
    onTouchStart={handleTouchStart}
    onTouchMove={handleTouchMove}
    onTouchEnd={handleTouchEnd} 
    className="w-full md:w-1/2">
      <div className="relative w-full h-96 md:hidden">
        <Image 
          src={`/img/${image[imagemAberta]}`} 
          alt={name}
          fill
          className="object-cover"/>

        <button onClick={setImagemAbertaBack} className="size-10 rounded-full bg-white flex items-center justify-center absolute left-3 top-[192px] hover:text-orange-500">
              <IconArrowLeft className="hover:text-orange-500 transition-all text-zinc-700 stroke-[2.5]"/>
        </button>
        <button onClick={setImagemAbertaNext} className="size-10 rounded-full bg-white flex items-center justify-center absolute right-3 top-[192px] hover:text-orange-500">
              <IconArrowRight className="hover:text-orange-500 transition-all text-zinc-700 stroke-[2.5]"/>
        </button>
      </div>

      <div className="mx-auto w-1/2 md:hidden flex justify-center items-center gap-4 py-4">
        {image.map((_, index) => (
          <div 
          key={index}
          className={`rounded-full ${imagemAberta === index ? "bg-orange-500 size-4" : "bg-zinc-400 size-3" }`}>

          </div>
        ))}
      </div>
      <div className="hidden md:flex flex-col gap-6 w-full cursor-pointer items-center">
        <button 
          onClick={abrirModal}
          className="relative size-[350px] xl:size-[450px] rounded-lg md:overflow-hidden">
          <div className="absolute inset-0 opacity-0 hover:opacity-30 bg-white transition-opacity ease-linear z-20"/>
          <Image
            src={`/img/${image[imagemAberta]}`}
            alt={name}
            fill
            className="object-cover -z-10 aspect-square"
          />
        </button>
        <div className="flex justify-between w-[350px] xl:w-[450px]">
          {image.map((imgSrc, index) => (
            <button
              key={index}
              onClick={() => setImagemAberta(index)}
              className={`relative size-16 xl:size-20 rounded-lg overflow-hidden z-20 ${
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
