import { useState, useEffect, useRef  } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Typography, Layout, Menu, Button } from 'antd';
import 'antd/dist/antd.css';
import "./NewOrderPage.css";
import * as ordersAPI from "../../utilities/orders-api";

export default function NewOrderPage () {

    const { Meta } = Card;
    const { Title } = Typography;
    const { Header, Sider, Content } = Layout;

    const [cart, setCart] = useState(null)

    useEffect (function () {
        async function getCart() {
            const cart = await ordersAPI.getCart();
            setCart(cart);
        }
        getCart();
    }, [])

    console.log(cart)

    return  (
        <>
        ya
        </>
    )
}