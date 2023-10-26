import React, {useContext} from 'react';
import { CartContext } from '../../Context/CartContext';
import Button from 'react-bootstrap/Button';

const CartItem = ({item}) => {
  const {removeItem} = useContext(CartContext)
    return (
      <div>
        <img src={item.img} alt={item.name} width={50} />
        <p>Producto : {item.name}</p>
        <p>Precio : ${item.price}</p>
        <p>Cantidad : {item.quantity}</p>
        <p>Sub Total : ${item.quantity * item.price}</p>
        <Button className='btn btn-danger' onClick={() => removeItem(item.id)}>x</Button>
      </div>
    );
  };

export default CartItem;