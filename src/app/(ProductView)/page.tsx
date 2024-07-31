"use client";
import TemplatePage from "@/components/layout/TemplatePage";
import ProductCard from "@/components/Product/ProductCard";
import ProductInfo from "@/components/Product/ProductInfo";
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
  return (
    <TemplatePage>
      <section className="w-full mx-auto max-w-screen-xl px-24 flex items-center justify-center">
        {products.map((produto) => (
          <ProductCard key={produto.id} product={produto} abrirModal={abrirModal} fecharModal={fecharModal} modalAberto={modalAberto}/>
          // o componente precisa usar este estado para poder fazer o modal abrir e fechar
        ))}

        {products.map((produto) => (
          <ProductInfo key={produto.id} product={produto} />
        ))}

        {modalAberto && (
          <div></div>
        )}
      </section>
    </TemplatePage>
  );
}
