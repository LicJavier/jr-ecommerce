import "./NavBar.css";
import NavLink from "../NavLink/NavLink";
import CartWidget from "../CartWidget/CartWidget";

export default function navBar() {
    
    function handleClick() {
        console.log("click")
    }

    return (
        <nav className="nav_main">
            <ul className="ul_main">
                <NavLink handleOnClick={handleClick} title="Productos"/>
                <NavLink handleOnClick={handleClick} title="Servicios"/>
                <NavLink handleOnClick={handleClick} title="Contacto"/>
                <CartWidget handleOnClick={handleClick} />
            </ul>
        </nav>
    )
}