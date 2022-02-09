import { useState, useEffect, useRef } from "react";
import * as productsAPI from "../../utilities/products-api";
import { Layout, Row, Col, Card } from "antd";
import 'antd/dist/antd.css';
import ProductItem from "../../components/ProductItem/ProductItem";
import CategoryList from "../../components/CategoryList/CategoryList";


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
      setActiveCateg('All');
    }
    getProducts();
  }, [])



  // const products = productItems.map(p => 
  //   <ProductItem 
  //   key={p._id} 
  //   product={p}
  //   cart = {cart}
  //   setCart = {setCart}
  // />)

  const filteredProducts = productItems.filter(p => p.category.name === activeCateg)
  console.log(filteredProducts,'yooo')


  return (
    <Layout>
      <Row>
        <Col span={12} offset={6}>
          <CategoryList
          categories={categoriesRef.current}
          activeCateg={activeCateg}
          setActiveCateg={setActiveCateg}
          />
        </Col>
      </Row>
      <Content>
        <Row className="productsContainer" gutter={[16, 16]}>
          {/* {products} */}
         { activeCateg === "All" ? productItems.map(p => 
   <ProductItem 
    key={p._id} 
    product={p}
    cart = {cart}
    setCart = {setCart}
  />)
  :
  filteredProducts.map(f => 
    <ProductItem 
     key={f._id} 
     product={f}
     cart = {cart}
     setCart = {setCart}
   />)
         }
        </Row>
      </Content>

    </Layout>
  )
}

