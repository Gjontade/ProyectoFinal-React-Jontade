import React, {useContext} from "react";
import "./CartItem.css";
import {CartContext} from "../../Context/CartContext";
import Button from "react-bootstrap/Button";

const CartItem = ({item}) => {
	const {removeItem} = useContext(CartContext);
	return (
		<div className="divCartItem">
			<img src={item.img} alt={item.name} className="imgCartItem" />
			<p className="detalleCartItem"><strong>{item.name}</strong></p>
			<p className="detalleCartItem">${item.price}</p>
			<p className="detalleCartItem">{item.quantity}</p>
			<p className="detalleCartItem">Sub Total : ${item.quantity * item.price}</p>
			<Button className="btn btn-dark x" onClick={() => removeItem(item.id)}>
				X
			</Button>
		</div>
	);
};

export default CartItem;
