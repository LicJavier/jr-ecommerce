import ItemList from "../ItemList/ItemList";
import { productos } from '../../data/Json/productos';
import "./ItemListContainer.css";
import { useState,useEffect } from "react";

export default function ItemListContainer() {
    const [products,SetProducts] = useState([]);
    useEffect(
        ()=>{
            const traerProducto = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(productos)
                }, 2000);
            })
            traerProducto.then((res)=>{
                SetProducts(res)
            })
        },  []
    );
    return <ItemList className="item__list" items={products} />
};
