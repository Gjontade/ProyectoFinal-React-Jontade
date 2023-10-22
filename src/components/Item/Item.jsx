import React, {useContext} from "react";
import "./Item.css";
import ItemCount from "../ItemCount/ItemCount";
import {Link} from "react-router-dom";
import {useState} from "react";
import {CartContext} from "../../Context/CartContext";

const Item = ({id, name, img, price, stock, category, description}) => {
	const [quantityAdded, setQuantityAdded] = useState(0);

	const {addItem} = useContext(CartContext);

	const handledOnAdd = (quantity) => {
		setQuantityAdded(quantity);

		const itemdetail = {
			id,
			name,
			price,
		};

		addItem(itemdetail, quantity);
	};

	return (
		<article className="CardItem">
			<header className="Header">
				<h2 className="ItemHeader">{name}</h2>
			</header>
			<picture>
				<img src={img} alt={name} className="ItemImg" />
			</picture>
			<section>
				<p className="Info precio">Precio: ${price}</p>
				<p className="Info">Stock disponible: {stock}</p>
				<p className="Info">{category}</p>
				<p className="Info">{description}</p>
			</section>

			<footer className="ItemFooter">
				{quantityAdded > 0 ? (
					<Link to="/cart" className="Option">
						Terminar compra
					</Link>
				) : (
					<ItemCount initial={1} stock={stock} onAdd={handledOnAdd} />
				)}
			</footer>
		</article>
	);
};

export default Item;
