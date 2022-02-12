import { Layout, Row, Col, Button, Typography, Statistic } from "antd";
import "antd/dist/antd.css";
import LineProduct from "../LineProduct/LineProduct";
import "@stripe/stripe-js";
import "@stripe/react-stripe-js";
import "./CartDetail.css";
import * as paymentsAPI from "../../utilities/payments-api"

export default function CartDetail({ cart, setCart }) {

    const { Title } = Typography

    if (!cart) return (
        <>
            <h1>No items in cart yet!</h1>
        </>
    );

    const lineProducts = cart.lineProducts.map(product =>
        <LineProduct
            lineProduct={product}
            key={product._id}
            cart={cart}
            setCart={setCart}
        />)

    async function handlePayment() {
        await paymentsAPI.handlePayment();
    }

    return (
        <Layout>
            <Row gutter={[32, 32]}>
                <Col
                    xs={{ span: 20, offset: 2 }}
                    md={{ span: 14, offset: 1 }}
                >
                    {lineProducts}
                </Col>
                <Col
                    xs={{ span: 16, offset: 4 }}
                    md={{ span: 8, offset: 1 }}
                >
                    <Row>
                        <Col
                            xs={{ span: 16 }}
                            md={{ span: 12 }}
                        >
                            <Statistic
                                title="Total: "
                                prefix="$"
                                value={cart.orderTotal.toFixed(2)}
                            />

                        </Col>
                        <Col
                            xs={{ span: 8 }}
                            md={{ span: 12 }}
                        >
                            <Statistic
                                title="Items: "
                                value={cart.totalQty}
                            />
                        </Col>
                    </Row>
                    <Button
                        htmlType="submit"
                        type="primary"
                        className="checkout-btn"
                        onClick={handlePayment}
                    >
                        Check Out
                    </Button>
                </Col>
            </Row>
        </Layout>
    )
}