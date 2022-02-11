import { Card, Row, Col, Image, Space } from "antd";
import "./ModalOrderItem.css";

export default function ModalOrderItem ({order,index}) {

    console.log('modalorder',order)
    const { Meta } = Card;

    return (
        <Card
        className="modal-order-card"
        hoverable
        title={order.product.name}
        extra= {
            <h2>Price: ${order.product.price}</h2>
        }
        cover = {
            <Row className="modal-order-img-container">
                <Col>
                    <Image 
                    alt="modal-order-image"
                    className="modal-order-image"
                    src={order.product.imageURL}
                    />
                </Col>
                
            </Row>
        }
        actions ={[
            <Row justify="end">
                <Col>
                    <h3>Subtotal({order.qty} items): ${order.extPrice}</h3>
                </Col>
            </Row>
        ]}
        >
            <Meta
            description = {order.product.description}
            />
            
        </Card>
    )
}