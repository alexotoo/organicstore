import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Button,
  Form,
  Card,
} from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import { addItemToCart } from "../store/actions/cartActions";

const CartPage = ({ match, history, location }) => {
  const productId = match.params.id;

  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addItemToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  return <div>cart</div>;
};

export default CartPage;
