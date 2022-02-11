import { Row, Col, Card, Button, Image, message, Divider } from "antd";
import "antd/dist/antd.css";
import "./LineProduct.css"
import * as ordersAPI from "../../utilities/orders-api";


export default function LineProduct ({lineProduct, cart, setCart}) {

    const { Meta } = Card

    async function handleChangeQty (productId, newQty) {
        // Pass in product id and new quantity to API function
        const updatedCart = await ordersAPI.setProductQtyInCart(productId, newQty);
        setCart(updatedCart);
        if (newQty <= 0) {
            function removeProduct () {
                message.error("Product has been removed.")
            }
            removeProduct();
        }
        
    }


    return (
            <Card
            className="lineprod-card"
            hoverable
            extra = {`$${lineProduct.extPrice.toFixed(2)}`}
            cover = {
               
                        <Image 
                        alt="lineProduct-image"
                        className="lineProduct-image"
                        src={lineProduct.product.imageURL}
                        />       
            }
            >
                <Meta
                    title = {lineProduct.product.name}
                    description = {lineProduct.product.description}
                />
                <Divider/>
                <Row className="line-prod-card-footer">
                    <Col span={17} offset={3} align="center">
                        <Button className="change-qty" onClick={() => handleChangeQty(lineProduct.product._id, lineProduct.qty -1)}> - </Button>
                        <span className="change-qty"> Quantity: {lineProduct.qty} </span>
                        <Button className="change-qty" onClick={() => handleChangeQty(lineProduct.product._id, lineProduct.qty + 1)}> + </Button>
                        
                    </Col>
                    <Col span={4} align="end">
                        <Button 
                        className="remove-LP-btn" 
                        type="primary" 
                        danger 
                        onClick={() => handleChangeQty(lineProduct.product._id, lineProduct.qty = 0)}
                        >
                            Remove
                        </Button>
                    </Col>

                </Row>
                    
               
            </Card>
            
      
    )
}