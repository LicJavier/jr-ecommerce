import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Item from "../item/Item";
import "./cart.css"

export default function Cart() {
    const { cart, checkContext, clear} = useContext(CartContext)    
    
    return(
        <div className="container__cart">
            {cart.map((item) => (
            <Item className="producto__div" key={item.id} item={item} />
            ))}
            <div>
                <button className='button' onClick={clear}>Vaciar carrito</button>
            </div>
        </div>
    ) 
}