// import {useState, useEffect} from "react";
import { Layout, Row, Col, Button, Form } from "antd";
import "antd/dist/antd.css";
import LineProduct from "../LineProduct/LineProduct";
import { useNavigate } from "react-router-dom";
import {loadStripe} from "@stripe/stripe-js"


// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);

export default function OrderDetail ({cart, setCart}) {

    const navigate = useNavigate();

    if (!cart) return (
        <>
        <h1>No items in cart yet!</h1>
        </>
    );

    
    // const { Meta } = Card;
    // const { Header, Content } = Layout;

    console.log('orderdetail cart',cart)

    const lineProducts = cart.lineProducts.map( product => 
    <LineProduct
        lineProduct = {product}
        key = {product._id}
        cart={cart}
        setCart={setCart}
    />)

    const options = {
        // passing the client secret obtained from the server
        clientSecret: '{{CLIENT_SECRET}}',
    };


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
                    <section>
    <div className="product">
      <img
        src="https://i.imgur.com/EHyR2nP.png"
        alt="The cover of Stubborn Attachments"
      />
      <div className="description">
      <h3>Stubborn Attachments</h3>
      <h5>$20.00</h5>
      </div>
    </div>
                    <form action="/create-checkout-session" method="POST">
                        <Button htmlType="submit" type="primary" 
                        >
                            Check Out
                        </Button>

                    </form>
  </section>
                   
                </Col>
            </Row>
        </Layout>
    )
}