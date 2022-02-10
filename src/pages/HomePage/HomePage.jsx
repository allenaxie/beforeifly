import { useEffect  } from "react";
import 'antd/dist/antd.css';
import "./HomePage.css";
import { Row, Col, Carousel, Typography, Layout} from 'antd';
import * as productsAPI from "../../utilities/products-api"
import ProductItem from "../../components/ProductItem/ProductItem";


export default function HomePage({ productItems, setProductItems ,cart, setCart, user }) {


    const { Title } = Typography;
    const { Content } = Layout;



    useEffect(function () {
        async function getFeatProd() {
            const products = await productsAPI.getFeat();
            // Display 4 random products
            const randomInt = Math.floor(Math.random() * products.length -4)
            console.log('randomInt', randomInt)
            setProductItems(products.slice(randomInt, randomInt + 4 ));
        }
        getFeatProd();
    },[])


    const products = productItems.map(p => 
        <ProductItem 
        key={p._id} 
        product={p}
        cart = {cart}
        setCart = {setCart}
        user={user}
    />)


    return (
        <Layout className="siteLayout">
            <Content>
                <Row>
                    <Col span={18} offset={3} className="carousel-container">
                        <Carousel 
                        autoplay 
                        className="carousel">        
                            <div>
                                <img className="logo-banner" src="https://i.imgur.com/aHhHo3o.png"/>
                            </div> 
                            <div>
                                
                            <img className="sale-banner" src="https://i.imgur.com/hDw3r3N.png"/>  
                            </div>
                            <div>
                                
                            <img className="travel-banner" src="https://i.imgur.com/3lwQCtz.png"/>   

                            </div>
                                
                        </Carousel>
                    </Col>
                </Row>
                <Row className="fpContainer">
                    <Col span={12} offset={6}>
                        <Title level={2}>Featured Products</Title>
                    </Col>
                </Row>
                <Row className="productsContainer" gutter={[32, 32]}>
                    {products}
                </Row>
            </Content>
        </Layout>

    )
}