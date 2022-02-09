import { Link } from "react-router-dom";
import { Layout, Row, Col, Card, Button } from "antd";
import 'antd/dist/antd.css';
import "./ProductItem.css";
import { ShoppingCartOutlined } from "@ant-design/icons";
import * as ordersAPI from "../../utilities/orders-api";

export default function ProductItem({product, cart, setCart}) {

    const { Meta } = Card

    async function handleAddToOrder (productId) {
        const cart = await ordersAPI.addProductToCart(productId);
        setCart(cart);
    }
  
    return (
        <Col span={8} offset={2}>
            <Card
                className="pi-card"
                hoverable
                extra = {`$${product.price}`}
                cover = {
                    <Row>
                        <Col span={16} offset={4}>
                        <img
                            alt="product-image"
                            src={product.imageURL}
                        />
                        </Col>
                    </Row>
                }
                actions = {[
                    <>
                        <Button onClick={()=>handleAddToOrder(product._id)} icon={<ShoppingCartOutlined key="cart" />}>Add To Cart </Button>
                    </>
                ]}
            >
                <Meta
                    title={product.name}
                    description={product.description}
                />
            </Card>
        </Col>
    )
}