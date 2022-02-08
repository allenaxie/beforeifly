import { Row, Col, Card, Button } from "antd";


export default function LineProduct ({lineProduct}) {
    return (
        <Card>
        {lineProduct.product.name}
        {lineProduct.product.description}
        </Card>
    )
}