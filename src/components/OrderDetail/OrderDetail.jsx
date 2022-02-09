// import {useState, useEffect} from "react";
import { Layout, Row, Col, Button, Form, Typography } from "antd";
import "antd/dist/antd.css";
import LineProduct from "../LineProduct/LineProduct";
import { useNavigate } from "react-router-dom";
import "@stripe/stripe-js";
import {loadStripe} from "@stripe/stripe-js";
import "@stripe/react-stripe-js";
import * as ordersAPI from "../../utilities/orders-api";
import "./OrderDetail.css";


// // Stripe

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);

export default function OrderDetail ({cart, setCart}) {

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
                   
                    <form 
                     action="/create-checkout-session" 
                     method="POST">
                        <Button 
                        htmlType="submit" 
                        type="primary" 
                        className="checkout-btn"
                        >
                            Check Out
                        </Button>

                    </form>

                   
                </Col>
            </Row>
        </Layout>
    )
}