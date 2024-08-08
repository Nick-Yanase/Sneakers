"use client";
import TemplatePage from "@/components/layout/TemplatePage";
import ProductCard from "@/components/Product/ProductCard";
import ProductInfo from "@/components/Product/ProductInfo";
import ProductModal from "@/components/Product/ProductModal";
import { products } from "@/data/constants/Products";
import Product from "@/data/model/Product";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  
  const [mobile, setMobile] = useState(false)
  const [modalAberto, setModalAberto] = useState(false);

  function abrirModal() {
    setModalAberto(true);
  }
  function fecharModal() {
    setModalAberto(false);
  }

  const [imagemAberta, setImagemAberta] = useState(0);

  function setImagemAbertaNext(){
    if(imagemAberta >= 0 && imagemAberta <=2){  
      setImagemAberta(imagemAberta+1)
    }
  }

  function setImagemAbertaBack(){
    if(imagemAberta >= 1 && imagemAberta <=3){  
      setImagemAberta(imagemAberta-1)
    }
  }

  return (
    <TemplatePage>
      <section className="w-full mx-auto max-w-screen-xl gap-4 flex flex-col md:flex-row  items-center justify-center">
        
        {products.map((produto) => 
        (
          <>
          <div className="w-full h-44 relative">
            <div className="absolute inset-0">
              <Image
                src={`/img/${produto.image[imagemAberta]}`}
                alt={produto.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
            <ProductCard 
              imagemAberta={imagemAberta} 
              setImagemAberta={setImagemAberta}  
              abrirModal={abrirModal} 
              key={produto.id} 
              product={produto}
            />
          </>
          // o componente precisa usar este estado para poder fazer o modal abrir e fechar
        )
        
        )}

        {products.map((produto) => (
          <ProductInfo 
            key={produto.id} 
            product={produto} 
          />
        ))}

        {/* se o modalAberto for true ele renderiza productModal, caso seja false faz nada*/}
        {modalAberto && (
          products.map((produto) => (
            <ProductModal 
              setImagemAbertaBack={setImagemAbertaBack} 
              setImagemAbertaNext={setImagemAbertaNext} 
              imagemAberta={imagemAberta}
              setImagemAberta={setImagemAberta}
              key={produto.id}
              abrirModal={abrirModal}
              modalAberto={modalAberto}
              fecharModal={fecharModal}
              product={produto}
            />
          ))
        )}
      </section>

    </TemplatePage>
  );
}
