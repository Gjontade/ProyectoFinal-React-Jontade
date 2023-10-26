import "./Cart.css";
import {useContext} from "react";
import {CartContext} from "../../Context/CartContext";
import {Link} from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
	const {cart, clearCart, totalQuantity, total} = useContext(CartContext);

	if (totalQuantity === 0) {
		return (
			<div>
				<h1>No hay items en el carrito</h1>
				<Link to="/" className="Option">
					Productos
				</Link>
			</div>
		);
	}

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
							Limpiar carrito
						</button>
						<Link to="/checkout" className="Option">
							Cheackout
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
