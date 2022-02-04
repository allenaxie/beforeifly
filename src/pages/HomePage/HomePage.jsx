import { useState } from "react";
import 'antd/dist/antd.css';
import "./HomePage.css";
import { Row, Col, Carousel, Radio } from 'antd';


export default function HomePage () {
    
    return (
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
    )
}