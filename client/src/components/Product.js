import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Rating from './Rating';
import axios from 'axios';
import { CARD_ADD_ITEM } from './Request';
import { Store } from '../Store';

function Product(params) {
  const { product } = params;

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    panier: { eltPanier },
  } = state;

  const addToCartHandler = async (item) => {
    const existItem = eltPanier.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert('Desole, Produit plus disponible en stock');
      return;
    }
    ctxDispatch({ type: CARD_ADD_ITEM, payload: { ...item, quantity } });
  };

  return (
    <Card>
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className="card-img-top" alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text>{product.price} Fcfa</Card.Text>
        {product.countInStock === 0 ? (
          <Button variant="light" disabled>
            rupture de Stock
          </Button>
        ) : (
          <Button onClick={() => addToCartHandler(product)}>
            Ajouter Au Panier
          </Button>
        )}
        {product.countInStock}
      </Card.Body>
    </Card>
  );
}

export default Product;
