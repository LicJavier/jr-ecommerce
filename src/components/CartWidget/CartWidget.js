import "./cartWidget.css";
import 'boxicons';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function CartWidget({handleOnClick}) {
    const { cart } = useContext(CartContext)
    
    return (
        <div className="container__carrito">
        <div className="icono__carrito">
            <img id="logo__carrito" src="../images/cart.png" alt="logo carrito" />
        </div>
        <div className="numero__carrito">
            {cart.length}
        </div>
        </div>
    )
}