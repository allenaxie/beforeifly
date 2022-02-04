import { useState } from "react";
import { Link } from "react-router-dom";
import 'antd/dist/antd.css';
import "./HomePage.css";
import { Row, Col, Carousel, Input, Card, Typography, Layout, Menu, Button } from 'antd';


export default function HomePage() {

    const { Search } = Input
    const { Meta } = Card;
    const { Title } = Typography;
    const { Header, Sider, Content } = Layout;




    return (
        <Layout className="siteLayout">
            <Content>
                <Row>
                    <Col span={12} offset={6}>
                        <Search className="searchInput" placeholder="Search product name..." />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Carousel autoplay className="carousel">
                            <div>
                                <span className="carouselItem">hi hey </span>
                            </div>
                            <div>
                                <span className="carouselItem">yoooo</span>
                            </div>
                            <div>
                                <span className="carouselItem">ayeeeee</span>
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
                    <Col span={12}>
                        <Card
                            hoverable>
                            <Meta
                                title="Product Title"
                                description="description will go here"
                            />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card
                            hoverable>
                            <Meta
                                title="Product Title"
                                description="description will go here"
                            />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card
                            hoverable>
                            <Meta
                                title="Product Title"
                                description="description will go here"
                            />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card
                            hoverable>
                            <Meta
                                title="Product Title"
                                description="description will go here"
                            />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card
                            hoverable>
                            <Meta
                                title="Product Title"
                                description="description will go here"
                            />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card
                            hoverable>
                            <Meta
                                title="Product Title"
                                description="description will go here"
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