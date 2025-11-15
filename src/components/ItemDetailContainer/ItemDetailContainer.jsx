import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/products";
export const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({});
    const {id} = useParams();

    useEffect(() => {

        getProductById(id)
            .then((data) => setDetail(data))
            .catch((err) => {
            console.log(err);
            });
        }, [id]);

        // Codigo Anterior buscaba en el JSON local
        // fetch("/data/products.json")
        //     .then((res) => {
        //         if (!res.ok) {
        //             throw new Error("Producto no encontrado en la BD")
        //         }

        //         return res.json();
               
        //     })

        //     .then((data) => {
        //         const found = data.find((p) => p.id === id); 
        //         if (found){
        //             setDetail(found);                    
        //         } else { 
        //             throw new Error("Producto no Encontrado en la Lista");
        //         }
        //     })

        //     .catch((err) => {
        //         console.log(err);
        //     });
        // }, [id])
        
    return <main>
        {Object.keys(detail).length ? (
                <ItemDetail detail={detail}/>
            ):(
                <p>Cargando...</p>
            )}
    </main>
}