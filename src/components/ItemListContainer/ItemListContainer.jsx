import React from 'react';
import { useState, useEffect } from "react";
import { getProducts, getProductByCategory } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
import { Container } from 'react-bootstrap';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState ([])
  const { categoryId } = useParams()

  useEffect (() => {
    const asyncFunc = categoryId ? getProductByCategory : getProducts

    asyncFunc(categoryId)
      .then(response => {
        setProducts(response)
      })
      .catch(error => {
        console.error(error)
      })
  }, [categoryId])

  /*return (
    <div>
      <h1>{ greeting }</h1>
      <ItemList products = {products} />
    </div>
    )*/
  return (
    <div className='item-list-container'>
    {
      (() => {
        switch (categoryId) {
          case 'proteinas' :
            return <h2>Proteínas</h2>;
          case 'aminoacidos' :
            return <h2>Aminoácidos</h2>;
          case 'termogenicos' :
            return <h2>Termogénicos</h2>;
          case 'pre-entreno' :
            return <h2>Pre-Entreno</h2>;
          case 'fuerza y resistencia' :
            return <h2>Fuerza y Resistencia</h2>;
          case 'ganador de masa' :
            return <h2>Ganador de Masa</h2>;
          default:
            return <h2>{greeting}</h2>;
        }
      }) ()
    }
    {products ? <ItemList products = {products} /> : <h6><spinner animation='border' size='sm' /> cargando productos...</h6>}
    </div>
  )
}

export default ItemListContainer;