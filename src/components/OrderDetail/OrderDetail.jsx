// import {useState, useEffect} from "react";
import { Layout, Row, Col, Button, Form } from "antd";
import "antd/dist/antd.css";
import LineProduct from "../LineProduct/LineProduct";
// import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";



// // Stripe API
// let stripePromise;

// const getStripe = () => {
//     if (!stripePromise) {
//         stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY)
//     }
//     return stripePromise;
// }


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

    // const product = {
    //     price: "$57",
    //     quantity: 1,
    // }

    // const checkoutOptions = {
    //     lineItems: [],
    //     mode: "payment",
    //     successUrl: '/',
    //     cancelUrl: '/orders',
    // }

    // const redirectToCheckout = async () => {
    //     console.log("redirectToCheckout");
    //     const stripe = await getStripe();
    //     const {error} = await stripe.redirectToCheckout(checkoutOptions);
    //     console.log("Stripe checkout error", error);
    // }


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
      <button type="submit">
        Checkout
      </button>
    </form>
  </section>
                        <Button htmlType="submit" type="primary" 
                        // onClick={redirectToCheckout}
                        >
                            Check Out
                        </Button>
                   
                </Col>
            </Row>
        </Layout>
    )
}