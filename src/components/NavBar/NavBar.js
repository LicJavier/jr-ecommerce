import "./NavBar.css";

export default function navBar() {
    function handleClick() {
        console.log("click")
    }
    
    return (
        <nav className="nav_main">
            <ul className="ul_main">
            <li onClick={handleClick} tittle= "Productos">Productos</li>
            <li onClick={handleClick} tittle= "Productos">Servicios</li>
            <li onClick={handleClick} tittle= "Productos">Contacto</li>
            </ul>
        </nav>
    )
}
