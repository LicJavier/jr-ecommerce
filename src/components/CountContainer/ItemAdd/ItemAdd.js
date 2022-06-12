import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

function agregandoAlCarrito() {
    MySwal.fire({
        title: <p>Su producto se agrego correctamente al carrito</p>,
        icon: "success"
    })
}

export default function ItemAdd() {
    return <button onClick={agregandoAlCarrito} >Agregar al Carrito</button>
}