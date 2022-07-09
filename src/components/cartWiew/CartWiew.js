import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./cartWiew.css"
import {createBuyOrder} from "../../services/firebaseConfig";
import BuyerForm from "../buyerForm/BuyerForm";
export default function CartWiew() {
    const { cart , totalPrice , clear } = useContext( CartContext )
    const [ dataOrder, setDataOrder ] = useState(
        {
            name:"",
            email:"",
            phone:0
        }
    )
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
        
        console.table(dataOrder)
        // createBuyOrder(dataOrder).then( (orderDataCreated)=>{
        //     clear();
        //     console.log(orderDataCreated.id)
        // })
        
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
                    <button className="button" onClick={handlerBuy}>Terminar Compra</button>
                    <button className="button" onClick={clear}>Vaciar carrito</button>
                </div>
            </div>
    )
}