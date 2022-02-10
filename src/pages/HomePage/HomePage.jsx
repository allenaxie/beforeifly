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
            setProductItems(products.slice(Math.abs(randomInt), Math.abs(randomInt) + 4 ));
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
                <Row className="carousel-row-container">
                    <Col span={18} className="carousel-container">
                        <Carousel 
                        autoplay 
                        className="carousel"> 
                            <div>
                                <Row>
                                    <Col span={18} offset={1}>
                                            <img className="banner-one" src="https://i.imgur.com/aHhHo3o.png"/>
                                    </Col>
                                </Row>       
                            </div> 
                            <div>
                                <Row>
                                    <Col span={18} offset={5}>
                                            <img className="banner-two" src="https://i.imgur.com/hDw3r3N.png"/>
                                    </Col>
                                </Row>       
                            </div> 
                            <div>
                                <Row>
                                    <Col span={18} offset={1}>
                                            <img className="banner-three" src="https://i.imgur.com/3lwQCtz.png"/>
                                    </Col>
                                </Row>       
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