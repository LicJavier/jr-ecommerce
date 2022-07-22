import { Link } from "react-router-dom";;
export default function ErrorMsj() {
    return (
        <div className="container__error alert alert-warning">
            <p className="itemNotFound alert alert-warning">No se encontro el Producto.</p>
            <Link to="/" className="button volver__error"> Volver al home</Link>
        </div>
    )
}