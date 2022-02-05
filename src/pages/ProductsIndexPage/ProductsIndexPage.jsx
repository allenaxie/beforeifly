import { useState, useEffect, useRef } from "react";
import * as productsAPI from "../../utilities/products-api";
import { Layout, Row, Col, Card } from "antd";
import 'antd/dist/antd.css';
import ProductItem from "../../components/ProductItem/ProductItem";


export default function ProductsIndexPage({productItems}) {

  const { Header, Sider, Content } = Layout;
  const { Meta } = Card

  const product = productItems.map(p => 
    <ProductItem 
    key={p._id} 
    product={p}
  />)
 
  return (
    <Layout>
      <Content>
        <Row className="productsContainer" gutter={[16, 16]}>
          {product}
        </Row>

      </Content>

    </Layout>
  )
}

