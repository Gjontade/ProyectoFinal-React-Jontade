import "./Cart.css";
import {useContext} from "react";
import {CartContext} from "../../Context/CartContext";
import {Link} from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
	const {cart, clearCart, total} = useContext(CartContext);

	return (
		<div>
			{cart.length ? (
				<div>
          {cart.map((item) => <CartItem key={item.id} item={item}/>)}
					<h3>Total: ${total()}</h3>
					<div>
						<button
							onClick={() => clearCart()}
							style={{color: "black"}}
							className="Button">
							Vaciar carrito
						</button>
						<Link to="/checkout" className="Option">
							Finalizar compra
						</Link>
					</div>
				</div>
			) : (
				<div>
					<h3>¡ Tu carrito esta vacio !</h3>
					<Link to="/" className="Option">
						Ir a comprar
					</Link>
				</div>
			)}
		</div>
	);
};

export default Cart;
