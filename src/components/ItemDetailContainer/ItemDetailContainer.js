import ItemDetail from '../itemDetail/ItemDetail';
import { productos } from '../../data/Json/productos';
import React, { useState,useEffect } from "react";
import { useParams} from "react-router-dom";

export default function ItemDetailContainer() {
    const [product,SetProduct] = useState([]);
    const {id} = useParams();

    useEffect(
        ()=>{
            const traerProducto = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(productos[id])
                }, 500);
            })
            traerProducto.then((res)=>{
                SetProduct(res)
            })
        },  []
    );
    return <ItemDetail className="item__list" item={product} />
};
