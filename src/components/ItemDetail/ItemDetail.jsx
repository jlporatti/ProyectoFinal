import { Item } from "../Item/Item"
import { useCartContext } from "../../context/CartContext/useCartContext";

export const ItemDetail = ({detail}) => {
    const {addItemToCart} = useCartContext();
    return (
        <Item item={detail}>
            <button onClick={() => addItemToCart(detail)}>Agregar al Carrito</button>
        </Item>
    );
}