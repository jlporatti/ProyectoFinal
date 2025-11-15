import { useCartContext } from "../../context/CartContext/useCartContext";
import { Item } from "../Item/Item";
import { Count } from "../Count/Count";

export const ItemDetail = ({ detail }) => {
  const { addItemToCart } = useCartContext();

  const handleAdd = (quantity) => {
    addItemToCart({ ...detail, quantity });
  };

  return (
    <Item item={detail}>
      <Count btnText="Agregar al carrito" onConfirm={handleAdd} />
    </Item>
  );
};
