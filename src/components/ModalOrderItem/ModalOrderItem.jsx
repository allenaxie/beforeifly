import { Card, Row, Col, Image } from "antd";
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
            `x${order.qty}`
        }
        cover = {
            <Row>
                <Col span={16} offset={4}>
                    <Image 
                    alt="modal-order-image"
                    className="modal-order-image"
                    src={order.product.imageURL}
                    />
                </Col>
            </Row>
        }
        >
            <Meta
            description = {order.product.description}
            />
        </Card>
    )
}