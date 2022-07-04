import ItemList from "../itemList/ItemList";
import "./styles.css"
import { useState , useEffect } from "react";
import { useParams } from "react-router-dom"
// import { getItems , getCategoryItems } from "../../services/firebaseConfig";
import { productos } from '../../data/Json/productos';

export default function ItemListContainer() {
    
    const [ products , SetProducts ] = useState( [] );
    const { idCategoria } = useParams();

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
                }, 500);
            })

            traerProducto.then((res)=>{
                SetProducts(res)
            })
        },  [idCategoria]
    );

    // useEffect(
    //     ()=>{
    //         if ( idCategoria === undefined ) {
    //             getItems()
    //                 .then( ( res) => {
    //                     SetProducts(res)
    //             })    
    //         }else{
    //             getCategoryItems( idCategoria ) 
    //                 .then( ( res )=>{
    //                     SetProducts( res )
    //             })    
    //         }
            
    //     },  [idCategoria]
    // );
    return <ItemList className="item__list" items={products} />
};
