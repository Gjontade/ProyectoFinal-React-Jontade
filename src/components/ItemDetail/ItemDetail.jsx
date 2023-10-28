import React, {useContext, useState} from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import {Link} from "react-router-dom";
import {CartContext} from "../../Context/CartContext";

const ItemDetail = ({id, name, img, price, stock, category, description}) => {
	const [quantityAdded, setQuantityAdded] = useState(0);
	const {addItem} = useContext(CartContext);

	const handledOnAdd = (quantity) => {
		setQuantityAdded(quantity);

		const item = {
			id,
			name,
			price,
			img
		};
		addItem(item, quantity);
	};

	return (
		<article className="CardItemDetail">
			<header className="HeaderDetail">
				<h2 className="ItemHeaderDetail">{name}</h2>
			</header>
			<picture>
				<img src={img} alt={name} className="ItemImgDetail" />
			</picture>
			<section>
				<p className="InfoDetail precioDetail">Precio: ${price}</p>
				<p className="InfoDetail">Stock disponible: {stock}</p>
				<p className="InfoDetail">{category}</p>
				<p className="InfoDetail">{description}</p>
			</section>
			<footer className="ItemFooterDetail">
				{quantityAdded > 0 ? (
					<Link to="/cart" className="OptionDetail">
						Terminar Compra
					</Link>
				) : (
					<ItemCount initial={1} stock={stock} onAdd={handledOnAdd} />
				)}
			</footer>
		</article>
	);
};

export default ItemDetail;
