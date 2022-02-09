import { Row, Col, Card, Button, Image, message } from "antd";
import "antd/dist/antd.css";
import "./LineProduct.css"
import * as ordersAPI from "../../utilities/orders-api";


export default function LineProduct ({lineProduct, cart, setCart}) {

   
    const { Meta } = Card

    async function handleChangeQty (productId, newQty) {
        // Pass in product id and new quantity to API function
        // console.log(productId, newQty)
        const updatedCart = await ordersAPI.setProductQtyInCart(productId, newQty);
        setCart(updatedCart);
    }


    return (
            <Card
            className="lineprod-card"
            hoverable
            extra = {`$${lineProduct.extPrice.toFixed(2)}`}
            
            cover = {
                <Row>
                    <Col span={16} offset={4}>
                        <Image 
                        alt="lineProduct-image"
                        src={lineProduct.product.imageURL}
                        />
                    </Col>
                </Row>
            }
            actions = {[
                
                    <Button onClick={() => handleChangeQty(lineProduct.product._id, lineProduct.qty -1)}> - </Button>,
                    <span>
                        Quantity: {lineProduct.qty}
                    </span>,
                    <Button onClick={() => handleChangeQty(lineProduct.product._id, lineProduct.qty + 1)}> + </Button>
               
            ]

            }
            >
                <Meta
                    title = {lineProduct.product.name}
                    description = {lineProduct.product.description}
                />
                
            </Card>
            
      
    )
}