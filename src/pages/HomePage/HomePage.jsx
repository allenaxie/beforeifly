import { useState } from "react";
import { Link } from "react-router-dom";
import 'antd/dist/antd.css';
import "./HomePage.css";
import { Row, Col, Carousel, Input, Card, Typography, Layout, Menu, Button } from 'antd';


export default function HomePage({ productItems }) {



    const { Search } = Input
    const { Meta } = Card;
    const { Title } = Typography;
    const { Header, Sider, Content } = Layout;


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
                        <Carousel className="carousel">
                            <Row className="carouselItem1">
                                <Col span={12} offset={6}>
                                    <img className="banner" src="images/logo-banner.png"></img>
                                </Col>
                            </Row>
                            <div className="carouselItem2">
                                <div >yo</div>
                            </div>
                            <div className="carouselItem3">
                                <div >de</div>
                            </div>
                        </Carousel>
                    </Col>
                </Row>
                <Row className="fpContainer">
                    <Col span={12} offset={6}>
                        <Title level={2}>Featured Products</Title>
                    </Col>
                </Row>
                <Row className="productsContainer" gutter={[16, 16]}>
                    <Col span={8} offset={2}>
                        <Card
                            className="pi-card"
                            hoverable
                            cover={
                                <Row>
                                    <Col span={16} offset={3}>
                                        <img
                                            alt="product-image"
                                        // src={productItems[0].imageURL}
                                        />
                                    </Col>

                                </Row>
                            }
                        >
                            <Meta
                            // title={productItems[0].name}
                            // description = {productItems[0].description}
                            />
                        </Card>
                    </Col>
                    <Col span={8} offset={2}>
                        <Card
                            className="pi-card"
                            hoverable
                            cover={
                                <Row>
                                    <Col span={16} offset={3}>
                                        <img
                                            alt="product-image"
                                        // src={productItems[0].imageURL}
                                        />
                                    </Col>

                                </Row>
                            }
                        >
                            <Meta
                            // title={productItems[0].name}
                            // description = {productItems[0].description}
                            />
                        </Card>
                    </Col>
                    <Col span={8} offset={2}>
                        <Card
                            className="pi-card"
                            hoverable
                            cover={
                                <Row>
                                    <Col span={16} offset={3}>
                                        <img
                                            alt="product-image"
                                        // src={productItems[0].imageURL}
                                        />
                                    </Col>

                                </Row>
                            }
                        >
                            <Meta
                            // title={productItems[0].name}
                            // description = {productItems[0].description}
                            />
                        </Card>
                    </Col>
                    <Col span={8} offset={2}>
                        <Card
                            className="pi-card"
                            hoverable
                            cover={
                                <Row>
                                    <Col span={16} offset={3}>
                                        <img
                                            alt="product-image"
                                        // src={productItems[0].imageURL}
                                        />
                                    </Col>

                                </Row>
                            }
                        >
                            <Meta
                            // title={productItems[0].name}
                            // description = {productItems[0].description}
                            />
                        </Card>
                    </Col>
                    <Col span={8} offset={2}>
                        <Card
                            className="pi-card"
                            hoverable
                            cover={
                                <Row>
                                    <Col span={16} offset={3}>
                                        <img
                                            alt="product-image"
                                        // src={productItems[0].imageURL}
                                        />
                                    </Col>

                                </Row>
                            }
                        >
                            <Meta
                            // title={productItems[0].name}
                            // description = {productItems[0].description}
                            />
                        </Card>
                    </Col>
                    <Col span={8} offset={2}>
                        <Card
                            className="pi-card"
                            hoverable
                            cover={
                                <Row>
                                    <Col span={16} offset={3}>
                                        <img
                                            alt="product-image"
                                        // src={productItems[0].imageURL}
                                        />
                                    </Col>

                                </Row>
                            }
                        >
                            <Meta
                            // title={productItems[0].name}
                            // description = {productItems[0].description}
                            />
                        </Card>
                    </Col>
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