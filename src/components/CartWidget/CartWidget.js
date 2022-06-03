export default function CartWidget(handleOnClick) {
    let cantidad = 0;
    return (
        <div>
        <li onClick={handleOnClick}>
            <img alt="carrito" />
        </li>
        <li>
            {cantidad}
        </li>
        </div>
    )
}