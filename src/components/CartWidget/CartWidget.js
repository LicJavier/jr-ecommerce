import "./CartWidget.css";
import 'boxicons';

export default function CartWidget({handleOnClick}) {
    let cantidad = 0;
    return (
        <div className="container__carrito">
        <div className="icono__carrito">
            <img id="logo__carrito" src="./cart.png" alt="logo carrito" onClick={handleOnClick} />
        </div>
        <div className="numero__carrito">
            {cantidad}
        </div>
        </div>
    )
}