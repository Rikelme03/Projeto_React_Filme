import "./Header.css"
import Logo from "../../assets/img/logo.svg"

const Header = () => {
    return(
        
        <div className="layout_grid">
        <header>
            <img src={Logo} alt="Logo do Filmoteca" />
            
            <nav className="nav_header">
                <a className="link_header"  href="">Filme</a>
                <a className="link_header"  href="">Genero</a>
            </nav>
        </header>
</div>

    )
}

export default Header;