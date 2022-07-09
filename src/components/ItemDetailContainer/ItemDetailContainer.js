import ItemDetail from '../itemDetail/ItemDetail';
import React, { useState , useEffect, useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getDetailItem } from "../../services/firebaseConfig";
import { CartContext } from '../../context/CartContext';

export default function ItemDetailContainer() {
    const [ product , SetProduct ] = useState( [] );
    const { id } = useParams();
    const[ isLoading , setIsLoading ] = useState(true);
    const { isInCart} = useContext(CartContext)
    
            useEffect(
                ()=>{
                    getDetailItem( id )
                    .then( ( res ) =>{
                        setTimeout(() => {
                            SetProduct( res )
                            setIsLoading(false)
                        }, 500);
                    })
                },  [id]
            );
    return (
        <div>
            { isLoading 
            ? <h3 className='cargando__producto'> Cargando los Productos . . .</h3>
            : <div>
                {   isInCart(parseInt(id))
                    ? <div className='terminar__compra'><NavLink to="/cart" className="button boton__finalizar">Terminar mi Compra</NavLink></div>
                    : <ItemDetail className="item__list" item={ product } />
                }
            </div>
            } 
        </div> 
    );
};
