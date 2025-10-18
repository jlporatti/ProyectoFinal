import {useEffect, useState} from "react";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer=({titulo}) => {
    
    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch("/data/products.json")
            .then((res) => {
                if(!res.ok){
                    throw new Error("Error al Buscar Productos");
                }
                return res.json()   // Pasa el resultado a un json
                })

            .then((data) => {
                setProducts(data)    // Carga los datos en products
                })

            .catch( (err) => {
                console.log(err);   // Muestra error por consola
                });
        }, []);
        
    return (
        <section>
            <h1>{titulo}</h1>
            <ItemList lista={products}/>
        </section>
    )

};
