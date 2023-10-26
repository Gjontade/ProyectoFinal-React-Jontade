import React from "react";
import {useContext} from "react";
import carrito from "./assets/carrito.svg";
import "./CartWidget.css";
import {CartContext} from "../../Context/CartContext";
import {Badge} from "react-bootstrap";

const CartWidget = () => {
	const {totalQuantity} = useContext(CartContext);

	return (
		<div className="numeroCarrito">
			<img src={carrito} alt="carrito de compras" width={50} />
			{totalQuantity() > 0 && <Badge bg="danger">{totalQuantity()}</Badge>}
		</div>
	);
};

export default CartWidget;
