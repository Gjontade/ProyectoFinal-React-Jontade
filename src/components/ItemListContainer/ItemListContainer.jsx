import React, {useState, useEffect} from "react";
import {getProducts, getProductByCategory} from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import {useParams} from "react-router-dom";
import "./ItemListContainer.css";
import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "../../servises/firebase/firebaseConfig";

const ItemListContainer = ({greeting}) => {
	const [products, setProducts] = useState([]); // Inicializa productos como un array vacio
	const [loading, setLoading] = useState(true);
	const {categoryId} = useParams();

	// useEffect (() => {
	//   setLoading(true)

	//   const collectionRef = categoryId
	//     ? query(collection(db, 'products'), where('category', '==', categoryId))
	//     : collection(db, 'products')

	//   getDocs(collectionRef)
	//     .then(response => {
	//       const productsAdapted = response.docs.map(doc => {
	//         const data = doc.data()
	//         return { id: doc.id, ...data }
	//       })
	//       setProducts(productsAdapted)
	//     })
	//     .catch(error => {
	//       console.log(error)
	//     })
	//     .finally(() => {
	//       setLoading(false)
	//     })
	// }, [categoryId]);

	useEffect(() => {
		setLoading(true);

		const coleccionProductos = categoryId
			? query(collection(db, "productos"), where("category", "==", categoryId))
			: collection(db, "productos");

		getDocs(coleccionProductos)
			.then(res => {
				const list = res.docs.map(product => {
          const data = product.data()
					return {
						id: product.id,
						...data,
					};
				});
				setProducts(list);
			})
			.catch((error) => console.log(error))
			.finally(() => setLoading(false));
	}, [categoryId]);

	return (
		<div>
			<h1>{greeting}</h1>
			{Array.isArray(products) && products.length > 0 && (
				<ItemList products={products} />
			)}
		</div>
	);
};

export default ItemListContainer;