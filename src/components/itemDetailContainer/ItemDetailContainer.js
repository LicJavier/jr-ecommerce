import ItemDetail from '../itemDetail/ItemDetail';
import React, { useState , useEffect, useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getDetailItem } from "../../services/firebaseConfig";
import { CartContext } from '../../context/CartContext';
import ErrorMsj from '../ErrorMsj';

export default function ItemDetailContainer() {
    const [ product , setProduct ] = useState( [] );
    const { id } = useParams();
    const[ isLoading , setIsLoading ] = useState(true);
    const { isInCart } = useContext(CartContext)
    
    const productosId = ["1M8BYFj8YYy0GbWl8ZFa","Jb6rqYQSiri4AtF2aLBK","OoVBwS0oxymQdakDs4KW","dHbSCdPqakYbvK4dGHK4","hb82aX7d4i3wXjmIiC81", "ijMZNTg2NFt1w3YQWaSo", "qhxEw4LnuAlFLtM7ziWF" ];
            useEffect(
                ()=>{
                    getDetailItem( id )
                    .then( ( res ) =>{
                        setProduct( res )
                        setIsLoading(false)
                    })
                },  [id]
            );
    return (
        <div>
            { isLoading 
            ? <div className="d-flex justify-content-center cargando__producto">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            : <div>
                {   isInCart(parseInt(id))
                    ? <div className='terminar__compra'><NavLink to="/cart" className="button boton__finalizar">Terminar mi Compra</NavLink></div>
                    :<div>
                        {productosId.includes(id) 
                        ?<ItemDetail className="item__list" item={ product } />
                        :<ErrorMsj />}
                    </div>
                }
            </div>
            } 
        </div> 
    );
};
