import { useState, useEffect, useRef  } from "react";
import { Link } from "react-router-dom";
import 'antd/dist/antd.css';
import "./HomePage.css";
import { Row, Col, Carousel, Input, Card, Typography, Layout, Menu, Button } from 'antd';
import * as productsAPI from "../../utilities/products-api"
import ProductItem from "../../components/ProductItem/ProductItem";

export default function HomePage({ productItems, setProductItems ,cart, setCart }) {

    const { Search } = Input
    const { Meta } = Card;
    const { Title } = Typography;
    const { Header, Sider, Content } = Layout;



    useEffect(function () {
        async function getFeatProd() {
            const products = await productsAPI.getFeat();
            // Display 4 random products
            const randomInt = Math.floor(Math.random() * products.length -1)
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
    />)


    return (
        <Layout className="siteLayout">
            <Content>
                <Row>
                    <Col span={10} offset={7}>
                        <Search className="searchInput" placeholder="Search product name..." />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Carousel 
                        // autoplay 
                        className="carousel">
                            <Row className="carouselItem1">
                                <Col 
                                xs={{span:18, offset:2}}
                                sm={{span:16, offset:5}}
                                md={{span:12, offset:7}}
                                lg={{span:12, offset:9}}
                                >
                                    <img className="banner" src="images/logo-banner.png"></img>
                                </Col>
                            </Row>
                            <Row className="carouselItem2">
                                <Col 
                                xs={{span:18, offset:3}}
                                sm={{span:16, offset:5}}
                                md={{span:12, offset:7}}
                                lg={{span:12, offset:8}}
                                >
                                    <img className="sale-banner" src="images/carousel-sale-banner.png"></img>   
                                </Col>
                            </Row>
                            
                            <img className="travel-banner" src="images/carousel-travel-banner.png"></img>   
                               
                            
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