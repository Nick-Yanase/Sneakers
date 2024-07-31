import { useContext } from "react";
import ContextoCarrinho from "../context/CartContext";

const useCart = () => useContext(ContextoCarrinho)

export default useCart;