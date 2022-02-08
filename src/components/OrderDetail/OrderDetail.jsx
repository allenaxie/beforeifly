import {useState, useEffect} from "react";
import { Layout, Row, Col, Card, Button } from "antd";
import "antd/dist/antd.css";
import LineProduct from "../LineProduct/LineProduct";

export default function OrderDetail ({cart, setCart}) {

    if (!cart) return (
        <>
        <h1>No items in cart yet!</h1>
        </>
    );

    const { Meta } = Card;
    const { Header, Content } = Layout;

    console.log('orderdetail cart',cart)

    const lineProducts = cart.lineProducts.map( product => 
    <LineProduct
        lineProduct = {product}
        key = {product._id}
        cart={cart}
        setCart={setCart}
    />)

    return (
        <Layout>
            <Row>
                <Col span={12} offset={6}>
                    {lineProducts}
                    <Row>
                        <Col>
                            Total: {cart.orderTotal}
                        </Col>
                    </Row>
                    <Button type="primary">Check Out</Button>
                </Col>
            </Row>
        </Layout>
    )
}