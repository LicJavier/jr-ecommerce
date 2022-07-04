import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./cartWiew.css"

export default function CartWiew() {
    const { cart , totalPrice , clear } = useContext( CartContext )
    
    return(
        <div className="container__cart__pedido">
            {
            cart.map( producto => (
            <div clasName="container__cart__wiew">
                <h5 className="product__list" >{producto.name}</h5> 
                <h5 className="product__list" >${producto.price*producto.cantidad}</h5>
            </div>
            ))
            }
            <h3 className="product__list" >Precio Final: $ {totalPrice()}</h3>
            <button className="button">Terminar Compra</button>
            <button className='button' onClick={clear}>Vaciar carrito</button>
        </div>
    )
}