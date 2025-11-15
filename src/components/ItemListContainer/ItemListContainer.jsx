import {useEffect, useState} from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/products";


export const ItemListContainer=({titulo}) => {
    
    const [products, setProducts] = useState([]);
    const {category} = useParams();
    useEffect(() => {
        getProducts(category)
            .then((data) => setProducts(data))
            .catch((err) => {
            console.log(err);
            });
        }, [category]);

        // Codigo Anterior buscaba en el JSON local
        //fetch("/data/products.json")
        //     .then((res) => {
        //         if(!res.ok){
        //             throw new Error("Error al Buscar Productos");
        //         }
        //         return res.json()   // Pasa el resultado a un json
        //         })

        //     .then((data) => {
        //         if(category){
        //             setProducts(data.filter(prod => prod.category === category))  // Carga los Productos filtrados 
        //         } else {
        //             setProducts(data)    // Carga Todos los datos en products
        //         }})

        //     .catch( (err) => {
        //         console.log(err);   // Muestra error por consola
        //         });
        // }, [category]);
        
    return (
        <section>
            <h1>{titulo}</h1>
            <ItemList lista={products}/>
        </section>
    )

};
