import { Link } from "react-router-dom";
import { Layout, Row, Col, Card } from "antd";
import 'antd/dist/antd.css';
import "./ProductItem.css"

export default function ProductItem({product}) {

    const { Meta } = Card
    console.log(product)

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
            >
                <Meta
                    title={product.name}
                    description={product.description}
                />
            </Card>
        </Col>
    )
}