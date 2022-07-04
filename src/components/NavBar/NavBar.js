import "./navBar.css";
import CartWidget from "../cartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

export default function NavBar() {
    const { cart } = useContext(CartContext)   
    return (
        <nav className="nav_main">
            <ul className="ul_main">
                <NavLink to="/"><img id="logo__brand" src="../images/logo.jpeg" alt="logo" /> </NavLink>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/category/mandalas">Mandalas</NavLink>
                <NavLink to="/category/atrapasueños">Atrapasueños</NavLink>
                <NavLink to="/nosotros">Nosotros</NavLink>
                <NavLink to="/contact">Contacto</NavLink>
                {
                    cart.length === 0
                    ? <div></div> 
                    :<NavLink to="/cart">{<CartWidget />} </NavLink>
                }
            </ul>
        </nav>
    )
}