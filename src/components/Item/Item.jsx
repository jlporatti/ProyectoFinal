import "./Item.css";
export const Item = ({item, children}) => {
    return (

        <article className="product-item">
            <img src={item.imageUrl} alt={item.description} />
            <h2 className="product-title">{item.name}</h2>
            <p>Precio: $ {item.price}</p>
            <p>Descripcion: {item.description}</p>
            {children}
        </article> 
    );
};