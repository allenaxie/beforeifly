import { Row, Col, Card, Button } from "antd";
import "antd/dist/antd.css";


export default function LineProduct ({lineProduct}) {

    const { Meta } = Card

    return (
        <Card
        className="lineprod-card"
        extra = {lineProduct.product.price}
        title = {lineProduct.product.name}
        cover = {
            <Row>
                <Col span={16} offset={4}>
                    {/* <img 
                    alt="product-image"
                    src={lineProduct.product.imageURL}
                    /> */}
                </Col>
            </Row>
        }
        >
            <Meta
                
                description = {lineProduct.product.description}
            />
                Quantity: {lineProduct.qty}
    
        </Card>
    )
}