import ItemList from "../itemList/ItemList";
import "./styles.css"
import { useState , useEffect } from "react";
import { useParams } from "react-router-dom"
import { getItems , getCategoryItems } from "../../services/firebaseConfig";

export default function ItemListContainer() {
    
    const [ products , SetProducts ] = useState( [] );
    const { idCategoria } = useParams();

    useEffect(
        ()=>{
            if ( idCategoria === undefined ) {
                getItems()
                    .then( ( res) => {
                        SetProducts(res)
                })    
            }else{
                getCategoryItems( idCategoria ) 
                    .then( ( res )=>{
                        SetProducts( res )
                })    
            }
            
        },  [ idCategoria ]
    );
    return <ItemList className="item__list" items={products} />
};
