import {useState} from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    // Verificar si el item ya existe en el carrito
    const existsInCart = (id) => {
        const exist = cart.some(item => item.id === id);
        return exist;
    };  


    // Agregar item al carrito
    const addItemToCart = (item) => {
        if (existsInCart(item.id)) {
            alert(`El Producto ${item.name} ya se encuentra en el carrito`);
        } else {
            setCart([...cart, item]);
            alert(`El Producto ${item.name} fue correctamente agregado al carrito`);
        }
    };

    // Vaciar el carrito
    const clearCart = () => {
        setCart([]);
    }

    const getTotalItems = () => {
        if (cart.length) {
            return cart.length;
        }
    };

    // Eliminar item del carrito
    const removeFromCart = (itemId) => {
        setCart(cart.filter(item => item.id !== itemId));
    };

    const values = { cart, addItemToCart, clearCart, getTotalItems, removeFromCart }

    return (<CartContext.Provider value={values}>{children}</CartContext.Provider>);
};