import "./navBar.css";
import CartWidget from "../cartWidget/CartWidget";
import { NavLink } from "react-router-dom";

export default function NavBar() {  
    return (
        <nav className="nav_main navbar navbar-expand-lg">
            <ul className="ul_main container-fluid">
                <NavLink to="/"><img id="logo__brand" src="../images/logo.jpeg" alt="logo" /> </NavLink>
                <NavLink to="/">Home</NavLink>
                <div className="btn-group">
                    <a type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Categorías
                    </a>
                    <ul className="dropdown-menu">
                        <NavLink className="dropdown-item" to="/category/mandalas" >Mandalas</NavLink>
                        <li><hr className="dropdown-divider" /></li>
                        <NavLink className="dropdown-item" to="/category/atrapasueños">Atrapasueños</NavLink>
                    </ul>
                </div>
                <NavLink to="/nosotros">Nosotros</NavLink>
                <NavLink to="/galery">Galería</NavLink>
                <NavLink to="/cart">{<CartWidget />} </NavLink>
            </ul>
        </nav>
    )
}