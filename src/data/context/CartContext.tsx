import { createContext, useState } from "react";
import ItemCart from "../model/ItemCart";
import Product from "../model/Product";

export interface CartContextProps {
  //essa interface é util para quando chamarmos o contexto, da pra saber quais são as propriedades do contexto
  itens: ItemCart[];
  quantityProducts: number;
  itemsQuantity: number;
  previewModalAberto: boolean
  addQuantity: () => void;
  removeQuantity: () => void;
  addProduct: (item: Product, itemsQuantity: number) => void;
  removeProduct: (item: Product) => void;
  sendCart: (item: Product, itemsQuantity: number) => void;
  abrirModalPreview: () => void
  fecharModalPreview: () => void
  deleteProduct: (item: ItemCart) => void
}

const ContextoCarrinho = createContext<CartContextProps>({} as any);
export function CartProvider(props: any) {
  
  
  const [previewModalAberto, setPreviewModaAberto] = useState(false)

  function abrirModalPreview(){
    setPreviewModaAberto(true)
  }
  function fecharModalPreview(){
    setPreviewModaAberto(false)
  }
   
  const [itens, setItens] = useState<ItemCart[]>([]); //Estamos especificando que itens é um array de itemCart
  const [itemsQuantity, setItemsQuantity] = useState(1);

  function addQuantity(){
    setItemsQuantity(itemsQuantity+1)
  }
  function removeQuantity(){
    setItemsQuantity(Math.max(1, itemsQuantity - 1)) //impedir que usuario coloque -1
  }

  function removeProduct(product: Product) {
    const indiceProduct = itens.findIndex(
      (item) => item.product.id === product.id
    );
    //se não encontrar os produto adicionado
    if (indiceProduct === -1) {
      const itensFilter = itens.filter(
        (item) => item.product.id !== product.id
      );
      setItens(itensFilter);
    } else {
      const newItens = [...itens];
      if (newItens.length >= 1) {
        newItens[indiceProduct].quantity--;
        setItens(newItens);
      }
    }
  }

  function addProduct(product: Product, itensQuantity: number) {
    const indiceProduct = itens.findIndex(
      (item) => item.product.id === product.id
    ); //Ele passar por cada item de itens, e comparar se itens possui algum product.id igual ao do produto.id passsado como parametro. Se encontrar ele devolve o id do item, caso não encontre devolve -1

    if (indiceProduct === -1) {
      //SE NÃO ENCONTRAR O ITEM
      setItens([...itens, { product, quantity: itensQuantity }]); //vai pegar todos os itens dentro de carrinho e adicionar este NOVO produto
    } else {
      // SE ENCONTRAR O ITEM
      const newItens = [...itens];
      newItens[indiceProduct].quantity+=itensQuantity; //vai somar mais uma quantidade do produto cujo indice foi apontado
      setItens(newItens);
    }
  }
  function deleteProduct(item: ItemCart){
    const newItens = itens.filter((i) => i.product.id !== item.product.id)
    setItens(newItens)
  }

  function sendCart(product: Product, itensQuantity: number ) {
    addProduct(product, itensQuantity)
    setItemsQuantity(1)
  }
  return (
    <ContextoCarrinho.Provider //aqui temos que passar todas as propriedades estabelecidas na interface
      value={{
        previewModalAberto,
        itens,
        itemsQuantity,
        addQuantity,
        removeQuantity,
        addProduct,
        removeProduct,
        sendCart,
        abrirModalPreview,
        fecharModalPreview,
        deleteProduct,
        get quantityProducts() {
          return itens.reduce((total, item) => total + item.quantity, 0); // total é = 0 e recebe item.quantity de cada item de itens
        },
      }}
    >
      {props.children}
    </ContextoCarrinho.Provider>
  );
}

export default ContextoCarrinho;
