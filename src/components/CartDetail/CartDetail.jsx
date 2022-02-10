// import {useState, useEffect} from "react";
import { Layout, Row, Col, Button, Form, Typography } from "antd";
import "antd/dist/antd.css";
import LineProduct from "../LineProduct/LineProduct";
import { useNavigate } from "react-router-dom";
import "@stripe/stripe-js";
import "@stripe/react-stripe-js";
import "./CartDetail.css";
import * as paymentsAPI from "../../utilities/payments-api"


export default function CartDetail ({cart, setCart}) {

    const navigate = useNavigate();
    const { Title } = Typography

    if (!cart) return (
        <>
        <h1>No items in cart yet!</h1>
        </>
    );

    // const { Meta } = Card;
    // const { Header, Content } = Layout;

    const lineProducts = cart.lineProducts.map( product => 
    <LineProduct
        lineProduct = {product}
        key = {product._id}
        cart={cart}
        setCart={setCart}
    />)

    async function handlePayment () {
        await paymentsAPI.handlePayment();
    }

    return (
        <Layout>
            <Row gutter={[32,32]}>
                <Col 
                xs={{span:20, offset:2}} 
                md={{span:14, offset: 5}}
                >
                    {lineProducts}
                    <Row>
                        <Col>
                            <Title className="total-price" level={4}>
                                Total: ${cart.orderTotal.toFixed(2)}
                            </Title>
                            
                        </Col>
                    </Row>
                        <Button 
                        htmlType="submit" 
                        type="primary" 
                        className="checkout-btn"
                        onClick= {handlePayment}
                        >
                            Check Out
                        </Button>
                </Col>
            </Row>
        </Layout>
    )
}