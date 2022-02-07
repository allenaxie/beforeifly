import {useState, useEffect} from "react";
import { Layout, Row, Col, Card } from "antd";
import "antd/dist/antd.css";

export default function OrderDetail ({cart, setCart}) {

    const { Meta } = Card;
    const { Header, Content } = Layout;

    console.log('orderdetail cart',cart)

    return (
        <>
        OrderDetails
        </>
    )
}