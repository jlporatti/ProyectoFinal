import { useContext } from "react";
import { CartContext } from "./CartContext";

//Exporto el contesto creado porque lo voy a usar en el custom hook (useCartContext)
export const useCartContext = () => {
    return useContext(CartContext);
}
