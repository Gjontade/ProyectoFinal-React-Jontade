import React, {useState, useContext} from "react";
import "./Checkout.css";
import {addDoc, collection, serverTimestamp} from "firebase/firestore";
import {CartContext} from "../../Context/CartContext";
import {db} from "../../servises/firebase/firebaseConfig";

const Checkout = () => {
	const [user, setUser] = useState({});
	const [validateEmail, setValidateEmail] = useState("");
	const {cart, total, clearCart} = useContext(CartContext);
	const [orderId, setOrderId] = useState("");

	const datosComprador = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const finalizarCompra = (e) => {
		e.preventDefault();
		if (!user.name && user.phone) {
			alert("Los campos son obligatorios");
		} else {
			let order = {
				user,
				item: cart,
				total: total(),
				date: serverTimestamp(),
			};
			const ventas = collection(db, "orders");
			addDoc(ventas, order)
				.then((res) => {
					setOrderId(res.id);
					clearCart();
				})
				.catch((error) => console.log(error));
		}
	};

	return (
		<div>
			{orderId !== "" ? (
				<div className="divCheckout">
					<h2>
						<strong>¡Felicitaciones, tu orden fue generada con exito!</strong>
					</h2>
					<h5>Su id de registro es: {orderId}</h5>
					<img
						src="https://goldnutrition.com.ar/images/2018/04/03/logo_empresa_gold_nutrition.png"
						alt="logo de marca"
					/>
				</div>
			) : (
				<div className="divCheckout">
					<h2>
						<strong>Terminar Compra</strong>
					</h2>
					<h4>Por favor completar con sus datos</h4>
					<form onSubmit={finalizarCompra}>
						<div className="mb-3">
							<label className="form-label">Nombre completo</label>
							<input
								className="form-control"
								onChange={datosComprador}
								type="text"
								placeholder="Nombre y Apellido"
								name="name"
							/>
						</div>
						<div className="mb-3">
							<label className="form-label">Número de telefono</label>
							<input
								className="form-control"
								onChange={datosComprador}
								type="number"
								placeholder="15-xxxxxxxx"
								name="phone"
							/>
						</div>
						<div className="mb-3">
							<label className="form-label">Dirección de Email</label>
							<input
								className="form-control"
								onChange={datosComprador}
								type="email"
								placeholder="xxxxxxx@gold.com"
								name="mail"
							/>
						</div>
						<div className="mb-3">
							<label className="form-label">Validación de Email</label>
							<input
								className="form-control"
								type="email"
								placeholder="xxxxxxx@gold.com"
								name="mail"
								onChange={(e) => setValidateEmail(e.target.value)}
							/>
						</div>
						<button
							className="btn btn-dark"
							type="submit"
							disabled={validateEmail !== user.mail}>
							Generar Orden
						</button>
					</form>
				</div>
			)}
		</div>
	);
};

export default Checkout;
