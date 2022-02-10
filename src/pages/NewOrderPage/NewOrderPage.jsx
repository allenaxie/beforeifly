import { useState, useEffect, useRef  } from "react";
import { Routes, Route } from "react-router-dom";
import { Row, Col, Card, Typography, Layout, Menu, Button } from 'antd';
import 'antd/dist/antd.css';
import "./NewOrderPage.css";
import * as ordersAPI from "../../utilities/orders-api";
import CartDetail from "../../components/CartDetail/CartDetail";


export default function NewOrderPage ({cart, setCart, stripe}) {

    const { Meta } = Card;
    const { Title } = Typography;
    const { Header, Sider, Content } = Layout;

    useEffect (function () {
        async function getCart() {
            const cart = await ordersAPI.getCart();
            setCart(cart);
        }
        getCart();
    }, [])

    console.log('neworderpage-cart', cart)

    return  (
        <>
            <CartDetail cart={cart} setCart={setCart} stripe={stripe}/>

        </>
    )
}