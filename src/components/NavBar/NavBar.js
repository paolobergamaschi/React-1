import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css"
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="container has-text-centered is-family-secondary is-primary">
            <h3 className="navbar is-size-3 is-expanded is-primary has text-centered title camisetas-text">
              <Link to="/" className="logo-link">
                <img src="https://static.vecteezy.com/system/resources/previews/004/796/558/non_2x/illustration-graphic-of-shirt-store-logo-perfect-to-use-for-technology-company-free-vector.jpg" alt="logo" className="image is-64x64"/> 
                <span>Camisetas</span>
              </Link>
            </h3>
            <div className="box">
                    <input type="search" className="input is-primary" placeholder="Buscar..."/>
            </div>
            <div className="botones">
                <NavLink to="/category/actuales" className="button is-success">Actuales</NavLink>
                <NavLink to="/category/retro" className="button is-success">Retro</NavLink>
                <NavLink to="contacto" className="button is-success">Contacto</NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;