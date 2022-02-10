import { useState, useEffect, useRef } from "react";
import * as productsAPI from "../../utilities/products-api";
import { Layout, Row, Col, Card, BackTop } from "antd";
import 'antd/dist/antd.css';
import ProductItem from "../../components/ProductItem/ProductItem";
import CategoryList from "../../components/CategoryList/CategoryList";
import "./ProductsIndexPage.css"


export default function ProductsIndexPage({ productItems, setProductItems, user, cart, setCart }) {

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
      setActiveCateg('All');
    }
    getProducts();
  }, [])

  const filteredProducts = productItems.filter(p => p.category.name === activeCateg)

  return (
    <Layout>
      <Header className="category-tabs-container">
        <Row>
          <Col span={16} offset={4}>
            <CategoryList
              categories={categoriesRef.current}
              activeCateg={activeCateg}
              setActiveCateg={setActiveCateg}
            />
          </Col>
        </Row>
      </Header>
      <Content>
        <Row className="productsContainer" gutter={[32,32]}>
          {/* If active category is All, show everything */}
          {activeCateg === "All" ? productItems.map(p =>
            <ProductItem
              key={p._id}
              product={p}
              cart={cart}
              setCart={setCart}
              user={user}
            />)
            // Else, show only products in that category
            :
            filteredProducts.map(f =>
              <ProductItem
                key={f._id}
                product={f}
                cart={cart}
                setCart={setCart}
                user={user}
              />)
          }
        </Row>
      </Content>
      
          <BackTop visibilityHeight={800}/>
        
    </Layout>
  )
}

