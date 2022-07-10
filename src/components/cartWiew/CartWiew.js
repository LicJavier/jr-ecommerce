import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./cartWiew.css"
import {createBuyOrder} from "../../services/firebaseConfig";
import BuyerForm from "../buyerForm/BuyerForm";
import { Link } from "react-router-dom";
import { OrderContext } from "../../context/OrderContext";

export default function CartWiew() {
    const { saveOrder , dataOrder , setDataOrder } = useContext(OrderContext);
    const { cart , totalPrice , clear } = useContext( CartContext )

        let totalOrder = totalPrice();
    function handleChange(evt) {
        const input = evt.target.name;
        const value = evt.target.value;
        setDataOrder({
            ...dataOrder,
            [input]: value,
            items: cart,
            total: totalOrder
        })
    }

    function handlerBuy() {
        
        createBuyOrder(dataOrder).then( (orderCreated)=>{
            clear();
            saveOrder(orderCreated)
        })
        
    }
    
    return(
            <div className="container__cart__wiew">
                <div className="container__cart__pedido">
                    {
                    cart.map( producto => (
                    <div key={producto.name} className="container__wiew__productos" >
                        <h5 className="product__list" >{producto.name}</h5> 
                        <h5 className="product__list" >Cant: {producto.cantidad}</h5>
                        <h5 className="product__list" >${producto.price*producto.cantidad}</h5>
                    </div>
                    ))
                    }
                    <h3 className="product__list" >Precio Final: $ {totalPrice()}</h3>
                </div>
                <BuyerForm type="name" text="Nombre" onChange={handleChange} />
                <BuyerForm type="email" text="Correo" onChange={handleChange} />
                <BuyerForm type="phone" text="Telefono" onChange={handleChange} />                
                <div className="botones__compra">
                    <Link to="/checkout" className="button" onClick={handlerBuy}>Terminar Compra</Link>
                    <button className="button" onClick={clear}>Vaciar carrito</button>
                </div>
            </div>
    )
            
}