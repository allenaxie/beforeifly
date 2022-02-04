import { useState } from "react";
import { Link } from "react-router-dom";
import 'antd/dist/antd.css';
import "./HomePage.css";
import { Row, Col, Carousel, Input, Card } from 'antd';



export default function HomePage () {

    const {Search} = Input
    const {Meta} = Card;
    
    return (
        <>
            <Row>
                <Col span={12} offset={6}>
                    <Search className="searchInput" placeholder="Search product name..."/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Carousel autoplay className="carousel">
                        <div>
                            <span className="carouselItem">hi hey </span>
                        </div>
                        <div>
                            <span className="carouselItem">yo</span>
                        </div>
                        <div>
                            <span className="carouselItem">beeee</span>
                        </div>
                    </Carousel>
                </Col>
            </Row>
            <Row className="browseLinkContainer">
                <Col span={12} offset={6}>
                    <Link className="browseItemsLink" to="/products">Browse more items...</Link>
                </Col>
            </Row>
            <Row gutter={[16,16]}>
                <Col span={12}>
                    <Card 
                    hoverable>
                        <Meta
                            title="Product Title"
                            description = "description will go here"
                        />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card 
                    hoverable>
                        <Meta
                            title="Product Title"
                            description = "description will go here"
                        />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card 
                    hoverable>
                        <Meta
                            title="Product Title"
                            description = "description will go here"
                        />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card 
                    hoverable>
                        <Meta
                            title="Product Title"
                            description = "description will go here"
                        />
                    </Card>
                </Col>
                
            </Row>
        </>
    )
}