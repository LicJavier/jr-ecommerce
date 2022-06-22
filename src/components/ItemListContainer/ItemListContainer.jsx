import ItemList from "../ItemList/ItemList";
import { productos } from '../../data/Json/productos';
import "./ItemListContainer.css";
import { useState,useEffect } from "react";
import {useParams} from "react-router-dom"

export default function ItemListContainer() {
    
    const [products,SetProducts] = useState([]);
    const {idCategoria} = useParams();

    useEffect(
        ()=>{
            const traerProducto = new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (idCategoria === undefined) {
                        resolve(productos);
                    }else{
                        const buscarItems = productos.filter( objeto =>{
                            return objeto.categoria === idCategoria;
                        })
                        resolve(buscarItems);
                    }
                }, 2000);
            })

            traerProducto.then((res)=>{
                SetProducts(res)
            })
        },  [idCategoria]
    );
    return <ItemList className="item__list" items={products} />
};
