import "./NavLink.css";

export default function NavLink({title, handleOnClick}) {
    
    return (
        <li onClick={handleOnClick}>
            {title}
        </li>
    )
}
