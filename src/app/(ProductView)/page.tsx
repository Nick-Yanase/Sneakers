"use client";
import TemplatePage from "@/components/layout/TemplatePage";
import ProductCard from "@/components/Product/ProductCard";
import ProductInfo from "@/components/Product/ProductInfo";
import ProductModal from "@/components/Product/ProductModal";
import { products } from "@/data/constants/Products";
import { useState } from "react";

export default function Home() {
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
      <section className="w-full mx-auto max-w-screen-xl px-24 flex items-center justify-center">
        {products.map((produto) => (
          <ProductCard 
            imagemAberta={imagemAberta} 
            setImagemAberta={setImagemAberta}  
            fecharModal={fecharModal} 
            abrirModal={abrirModal} 
            key={produto.id} 
            product={produto}
          />
          // o componente precisa usar este estado para poder fazer o modal abrir e fechar
        ))}

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
