import { useState, useEffect, useRef } from "react";
import * as productsAPI from "../../utilities/products-api";
import { Layout, Row, Col, Card } from "antd";
import 'antd/dist/antd.css';
import ProductItem from "../../components/ProductItem/ProductItem";


export default function ProductsIndexPage({productItems ,setProductItems, user, cart, setCart}) {

  const { Header, Sider, Content } = Layout;
  const { Meta } = Card
  const categoriesRef = useRef([])
  const [activeCateg, setActiveCateg] = useState('');

  useEffect(function () {
    async function getProducts() {
      const products = await productsAPI.getAll();
      categoriesRef.current = products.reduce((acc, product) => {
        const cat = product.category.name;
        return acc.includes(cat) ? acc : [...acc, cat]
      }, []);
      setProductItems(products)
      setActiveCateg(products[0].category.name);
    }
    getProducts();
  }, [])


  const products = productItems.map(p => 
    <ProductItem 
    key={p._id} 
    product={p}
    cart = {cart}
    setCart = {setCart}
  />)
 
  return (
    <Layout>
      <Content>
        <Row className="productsContainer" gutter={[16, 16]}>
          {products}
        </Row>
      </Content>

    </Layout>
  )
}

