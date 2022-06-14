import "./CartWidget.css";
import 'boxicons';

export default function CartWidget({handleOnClick}) {
    let cantidad = 0;
    return (
        <div className="container__carrito">
        <div className="icono__carrito">
            <box-icon className='bx bxs-like bx-xs' name='cart' onClick={handleOnClick}></box-icon>
        </div>
        <div className="numero__carrito">
            {cantidad}
        </div>
        </div>
    )
}