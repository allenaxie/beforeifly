import { Row, Col, Card, Button } from "antd";
import "antd/dist/antd.css";
import * as ordersAPI from "../../utilities/orders-api";


export default function LineProduct ({lineProduct, cart, setCart}) {

    const { Meta } = Card

    async function handleChangeQty (productId, newQty) {
        // Pass in product id and new quantity to API function
        // console.log(productId, newQty)
        const updatedCart = await ordersAPI.setProductQtyInCart(productId, newQty);
        setCart(updatedCart)
    }

    return (
    
            <Card
            className="lineprod-card"
            extra = {lineProduct.extPrice}
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
                    <Button onClick={() => handleChangeQty(lineProduct.product._id, lineProduct.qty -1)}> - </Button>
                    Quantity: {lineProduct.qty}
                    <Button onClick={() => handleChangeQty(lineProduct.product._id, lineProduct.qty + 1)}> + </Button>
            </Card>
            
      
    )
}