import { useState, useEffect, useRef  } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Typography, Layout, Menu, Button } from 'antd';
import 'antd/dist/antd.css';
import "./NewOrderPage.css";
import * as ordersAPI from "../../utilities/orders-api";
import OrderDetail from "../../components/OrderDetail/OrderDetail";

export default function NewOrderPage ({cart, setCart}) {

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

    console.log('neworder cart',cart)

    return  (
        <>
            <OrderDetail/>
        </>
    )
}