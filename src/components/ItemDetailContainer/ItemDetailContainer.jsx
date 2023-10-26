import React, {useState, useEffect} from "react";
import "./ItemDetailContainer.css";
import {getProductById} from "../../asyncMock";
import Item from "../Item/Item";
import {useParams} from "react-router-dom";
import {collection, doc, getDoc} from "firebase/firestore";
import {db} from "../../servises/firebase/firebaseConfig";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
	const [product, setProduct] = useState({});
	const [loader, setLoader] = useState(false);
	const {id} = useParams();

	// useEffect(() => {
	// 	getProductById(itemId)
	// 		.then(response => {
	// 			setProduct(response);
	// 		})
	// 		.catch(error => {
	// 			console.error(error);
	// 		});
	// }, [itemId]);

	// useEffect(() => {
	// 	setLoader(true);

	// 	const collectionProd = collection(db, "productos");
	// 	const referenciaAlDoc = doc(collectionProd, id);
	// 	getDoc(referenciaAlDoc)
	// 		.then((res) => setProduct({id: res.id, ...res}))
	// 		.catch((error) => console.log(error))
	// 		.finally(() => setLoader(false));
	// }, [id]);

	useEffect(() => {
		setLoader(true);

		const docRef = doc(db, "productos", id);

		getDoc(docRef)
			.then((response) => {
				const data = response.data();
				const productAdapted = {id: response.id, ...data};
				setProduct(productAdapted);
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				setLoader(false);
			});
	}, [id]);

	return (
		<div className="ItemDetailContainer">
			{loader ? <p>Cargando...</p> : <ItemDetail {...product} />}
		</div>
	);
};

export default ItemDetailContainer;