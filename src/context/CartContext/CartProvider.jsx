import {useState} from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    // Verificar si el item ya existe en el carrito
    const existsInCart = (id) => {
        const exist = cart.some(item => item.id === id);
        return exist;
    };  


    const addItemToCart = (item) => {
    if (existsInCart(item.id)) {
        // map, cuido mutacion a nivel del array
        const updatedCart = cart.map((prod) => {
        if (prod.id === item.id) {
            // cuido mutacion a nivel de objeto
            return { ...prod, quantity: prod.quantity + item.quantity };
        } else {
            return prod;
        }
        });
        setCart(updatedCart);
        alert('Agregado al carrito');
    } else {
        setCart([...cart, item]);
        alert(`${item.name} agregado`);
    }
    };


    // Elimina productos con Filter
    const deleteItem = (id) => {
        const filtered = cart.filter((p) => p.id !== id);
        setCart(filtered);
        alert("Producto eliminado");
    };

    // Vaciar el carrito
    const clearCart = () => {
        setCart([]);
    }

    // Calcular total de items en el carrito
    const getTotalItems = () => {
        const totalItems = cart.reduce((acc, p) => acc + p.quantity, 0);
        return totalItems;
    };

    //Calular Total a pagar
    const getTotalPrice = () => {
        const totalPrice = cart.reduce((acc, p) => acc + (p.price * p.quantity), 0);
        return Math.round(totalPrice *100 ) / 100;
    };

    const checkout = () => {
        const ok = confirm("¿Seguro que quiere finalizar la compra?");
        if (ok) {
            alert("¡Compra realizada con éxito!");
            clearCart();
        }
    };


    // Eliminar item del carrito
    const removeFromCart = (itemId) => {
        setCart(cart.filter(item => item.id !== itemId));
    };

    const values = { cart, addItemToCart, clearCart, 
        getTotalItems, removeFromCart, getTotalPrice, 
        deleteItem, checkout };

    return (<CartContext.Provider value={values}>{children}</CartContext.Provider>);
};