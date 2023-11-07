import CartWidget from "../CartWidget/CartWidget";
const NavBar = () => {
    return (
        <nav class="container has-text-centered is-family-secondary">
            <h3 class="title is-1">Mundo Camisetas</h3>
            <div class="box">
                    <input type="search" class="field" placeholder="Buscar..."/>
            </div>
            <div class="buttons are-large has-text-centered">
                <button class="button is-warning">Actuales</button>
                <button class="button is-warning">Retro</button>
                <button class="button is-warning">Contacto</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;