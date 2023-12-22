import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import cart from "./assets/2977968.png"

const CartWidget = () => {
    const {totalQuantity} = useContext(CartContext)

return(
    <Link to='/cart' style={{display: totalQuantity > 0 ? 'block' : 'none'}}>
        <img src={cart} alt="cart-widget"/>
        {totalQuantity}
    </Link>
)
}

export default CartWidget;