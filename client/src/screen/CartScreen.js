import React, { useContext } from 'react';
import { Store } from '../Store';
import { Helmet } from 'react-helmet-async';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import MessageBox from '../components/MessageBox';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/esm/ListGroup';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/esm/Card';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CARD_ADD_ITEM, CART_REMOVE_ITEM } from '../components/Request';

export default function CartScreen() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    panier: { eltPanier },
  } = state;

  const navigate = useNavigate();

  const updateCartHandler = async (elts, quantity) => {
    const { data } = await axios.get(`/api/products/${elts._id}`);
    if (data.countInStock < quantity) {
      window.alert('Desole, Produit plus disponible en stock');
      return;
    }
    ctxDispatch({ type: CARD_ADD_ITEM, payload: { ...elts, quantity } });
  };

  const removeItemHandler = (elts) => {
    ctxDispatch({ type: CART_REMOVE_ITEM, payload: elts });
  };

  const checkOutHandler = () => {
    navigate('/signin?redirect=/Shipping');
  };

  return (
    <div>
      <Helmet>
        <title> Produits du Panier</title>
      </Helmet>
      <h1> Produits du Panier</h1>
      <Row>
        <Col md={8}>
          {eltPanier.length === 0 ? (
            <MessageBox>
              Panier est vide. <Link to="/"> Aller a la Boutique</Link>
            </MessageBox>
          ) : (
            <ListGroup>
              {eltPanier.map((elts) => (
                <ListGroup.Item key={elts._id}>
                  <Row className="align-items-center">
                    <Col md={4}>
                      <img
                        src={elts.image}
                        alt={elts.name}
                        className="img-fluid rounded img-thumbnail"
                      />{' '}
                      <Link to={`/product/${elts.slug}`}> {elts.name}</Link>
                    </Col>
                    <Col md={3}>
                      <Button
                        variant="light"
                        onClick={() =>
                          updateCartHandler(elts, elts.quantity - 1)
                        }
                        disabled={elts.quantity === 1}
                      >
                        <i className="fas fa-minus-circle"></i>
                      </Button>{' '}
                      <span> {elts.quantity}</span>{' '}
                      <Button
                        variant="light"
                        onClick={() =>
                          updateCartHandler(elts, elts.quantity + 1)
                        }
                        disabled={elts.quantity === elts.countInStock}
                      >
                        <i className="fas fa-plus-circle"></i>
                      </Button>
                    </Col>
                    <Col md={3}>{elts.price} Fcfa</Col>
                    <Col md={2}>
                      <Button
                        onClick={() => removeItemHandler(elts)}
                        variant="light "
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>
                    Somme Total ({eltPanier.reduce((a, c) => a + c.quantity, 0)}{' '}
                    elts ):
                    {eltPanier.reduce(
                      (a, c) => a + c.price * c.quantity,
                      0
                    )}{' '}
                    Fcfa
                  </h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="d-grid">
                    <Button
                      type="button"
                      variant="primary"
                      onClick={checkOutHandler}
                      disabled={eltPanier.length === 0}
                    >
                      Valider l'Achat
                    </Button>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
