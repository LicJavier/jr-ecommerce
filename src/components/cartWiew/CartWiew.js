import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./cartWiew.css"
import {createBuyOrder} from "../../services/firebaseConfig";
export default function CartWiew() {
    const { cart , totalPrice , clear } = useContext( CartContext )
    
    function handlerBuy() {
        const dataOrder= {
            buyer: {
                name: "React",
                phone: 1122234444,
                email: "react@react.react"
            },
            items: cart,
            tota: totalPrice
        }
        console.table(dataOrder)
        // createBuyOrder(dataOrder).then( (orderDataCreated)=>{
        //     clear();
        //     console.log(orderDataCreated.id)
        // })
        
    }

    return(
        <div className="container__cart__pedido">
            {
            cart.map( producto => (
            <div className="container__cart__wiew" >
                <h5 className="product__list" >{producto.name}</h5> 
                <h5 className="product__list" >${producto.price*producto.cantidad}</h5>
            </div>
            ))
            }
            <h3 className="product__list" >Precio Final: $ {totalPrice()}</h3>
            <button className="button" onClick={handlerBuy}>Terminar Compra</button>
            <button className='button' onClick={clear}>Vaciar carrito</button>
        </div>
    )
}