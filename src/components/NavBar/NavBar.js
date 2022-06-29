import "./navBar.css";
import CartWidget from "../cartWidget/CartWidget";
import { NavLink } from "react-router-dom";

export default function navBar() {
    
    function handleClick() {
        
    }

    return (
        <nav className="nav_main">
            <ul className="ul_main">
                <NavLink to="/"><img id="logo__brand" src="../images/logo.jpeg" alt="logo" /> </NavLink>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/category/mandalas">Mandalas</NavLink>
                <NavLink to="/category/atrapasueños">Atrapasueños</NavLink>
                <NavLink to="/nosotros">Nosotros</NavLink>
                <NavLink to="/contact">Contacto</NavLink>
                <CartWidget handleOnClick={handleClick} />
            </ul>
        </nav>
    )
}