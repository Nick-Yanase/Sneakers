import Product from "@/data/model/Product";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element-bundle";
register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export interface ProductCardProps {
  product: Product;
  abrirModal: () => void;
  imagemAberta: number;
  setImagemAberta: (imagemAberta: number) => void;
  setImagemAbertaNext: () => void;
  setImagemAbertaBack: () => void;
}

export default function ProductCard(props: ProductCardProps) {
  //pegando as props da interface e passar como varaiveis pra ser mais facil
  const { id, name, image } = props.product;
  const abrirModal = props.abrirModal;
  const imagemAberta = props.imagemAberta;
  const setImagemAberta = props.setImagemAberta;

  return (
    <>
      <div className="w-full md:w-1/2">
        <Swiper 
        slidesPerView={1} 
        pagination={{ clickable: true }} 
        navigation
      
        >
          {image.map((imagem, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full md:hidden h-[425px] swiper-zoom-container">
                <Image
                  src={`/img/${imagem}`}
                  alt={name}
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="hidden md:flex flex-col gap-6 w-full cursor-pointer items-center">
          <button
            onClick={abrirModal}
            className="relative size-[350px] xl:size-[450px] rounded-lg md:overflow-hidden"
          >
            <div className="absolute inset-0 opacity-0 hover:opacity-30 bg-white transition-opacity ease-linear z-20" />
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
    </>
  );
}
