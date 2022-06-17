import ItemDetail from '../ItemDetail/ItemDetail';
import { productos } from '../../data/Json/productos';
import { useState,useEffect } from "react";

export default function ItemDetailContainer() {
    const [product,SetProduct] = useState([]);
    useEffect(
        ()=>{
            const traerProducto = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(productos[2])
                }, 2000);
            })
            traerProducto.then((res)=>{
                SetProduct(res)
            })
        },  []
    );
    return <ItemDetail className="item__list" item={product} />
};
