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
            setProductItems(products.slice(0,4));
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
                        <Carousel autoplay className="carousel">
                            <Row className="carouselItem1">
                                <Col span={12} offset={6}>
                                    <img className="banner" src="images/logo-banner.png"></img>
                                </Col>
                            </Row>
                            <div className="carouselItem2">
                                <div >ayeeeeee</div>
                            </div>
                            <div className="carouselItem3">
                                <div >yooooo</div>
                            </div>
                        </Carousel>
                    </Col>
                </Row>
                <Row className="fpContainer">
                    <Col span={12} offset={6}>
                        <Title level={2}>Featured Products</Title>
                    </Col>
                </Row>
                <Row className="productsContainer" gutter={[16, 24]}>
                    {products}
                </Row>
                <Row className="browseLinkContainer">
                    <Col span={12} offset={6}>
                        <Link className="browseItemsLink" to="/products">Browse more items...</Link>
                    </Col>
                </Row>
            </Content>
        </Layout>

    )
}