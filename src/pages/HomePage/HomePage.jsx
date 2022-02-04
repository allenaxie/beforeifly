import { useState } from "react";
import 'antd/dist/antd.css';
import "./HomePage.css";
import { Row, Col, Carousel, Input } from 'antd';



export default function HomePage () {

    const {Search} = Input
    
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
        </>
    )
}