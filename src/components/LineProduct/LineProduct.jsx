import { Row, Col, Card, Button } from "antd";


export default function LineProduct ({lineProduct}) {
    return (
        <>
        {lineProduct.product.name}
        {lineProduct.product.description}
        </>
    )
}