import React from "react";
import carrito from "./assets/carrito.svg";
import "./CartWidget.css";
import {useContext} from "react";
import {CartContext} from "../../Context/CartContext";
import {Link} from "react-router-dom";

const CartWidget = () => {
	const {totalQuantity} = useContext(CartContext);

	return (
		<Link
			to="/cart"
			className="CartWidget"
			style={{display: totalQuantity > 0 ? "block" : "none"}}>
			<div className="numeroCarrito">
				<img src={carrito} alt="carrito de compras" width={50} />
				{totalQuantity}
			</div>
		</Link>
	);
};

export default CartWidget;
