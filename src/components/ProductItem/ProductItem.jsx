import { Link } from "react-router-dom";
import { Layout, Row, Col, Card, Button } from "antd";
import 'antd/dist/antd.css';
import "./ProductItem.css";
import { ShoppingCartOutlined } from "@ant-design/icons";

export default function ProductItem({product}) {

    const { Meta } = Card


    function addToCart (values) {
        console.log(values)
    }

    return (
        <Col span={8} offset={2}>
            <Card
                className="pi-card"
                hoverable
                cover = {
                    <Row>
                        <Col span={16} offset={3}>
                        <img
                            alt="product-image"
                            src={product.imageURL}
                        />
                        </Col>

                    </Row>
                }
                actions = {[
                    <>
                        <Button onClick={addToCart} icon={<ShoppingCartOutlined key="cart" />}>Add To Cart </Button>
                        
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