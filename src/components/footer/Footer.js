import "./footer.css"

export default function Footer() {
    
    return (
        <footer>
            <div className="container__footer">
                <p>Seguinos y consultanos a través de nuestras redes.</p>
                <ul className="container__footer_ul">
                    <li>
                    <a href="https://www.instagram.com/creacionesnatu/" target="_blank"><img src="../images/ig.png" alt="logo IG"/></a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/creaciones.natu" target="_blank"><img src="../images/face1.png" alt="logo facebook"/></a>    
                    </li>
                    <li>
                        <a href="https://wa.me/c/5491130692204" target="_blank" ><img src="../images/wa.png" alt="logo whatsapp" /> </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}