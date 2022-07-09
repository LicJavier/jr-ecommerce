import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Item from "../item/Item";
import "./cart.css"
import { Link } from "react-router-dom";
import CartWiew from "../cartWiew/CartWiew"

export default function Cart() {
    const { cart , removeItem } = useContext(CartContext)    
    
    if( cart.length === 0 ) {
        return (
            <main className="main__cart">
                <Link to="/" className="button volver__home"> No hay productos en tu carrito volve al home</Link>
            </main>
        )
    } else {
        return( 
        <div className="container__cart">
            <div className="container__productos__cart">
                {cart.map((item) => (
                    <div className="container__producto__cart">
                        <Item className="producto__div" key={item.id} item={item} />
                        <button className="button" onClick={ ()=> removeItem(item.id) }>Eliminar producto</button>
                    </div>
                ))}
            </div>
            <div className="container__pedido">
                <CartWiew />
            </div>
        </div>)
    }
}