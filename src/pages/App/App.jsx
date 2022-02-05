import './App.css';
import { useState, useEffect, useRef } from "react";
import { getUser } from "../../utilities/users-service";
import { Routes, Route } from "react-router-dom";
import ProductsIndexPage from "../ProductsIndexPage/ProductsIndexPage";
import AuthPage from "../AuthPage/AuthPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import NavBar from "../../components/NavBar/NavBar";
import ProductItem from "../../components/ProductItem/ProductItem";
import * as productsAPI from "../../utilities/products-api";
import HomePage from "../HomePage/HomePage";
import { Layout, Typography, Menu, Button, Row, Col } from "antd";
import 'antd/dist/antd.css';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';

export default function App() {
  const [user, setUser] = useState(getUser());
  const { Header, Sider, Content } = Layout;
  const [isCollapsed, setIsCollapsed ] = useState([]);
  const [hasAccount, setHasAccount] = useState(true);
  const [productItems, setProductItems] = useState([]);
  const categoriesRef = useRef([])
  const [activeCateg, setActiveCateg] = useState('');
 
  function toggle () {
    setIsCollapsed(!isCollapsed);
  }

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


  

  return (
    <main className="App">
      <Layout>
        <Sider
        className="sideNavbar"
          collapsible
          collapsed={isCollapsed}
        >
          <div className="logo"></div>
          <NavBar collapsed={isCollapsed} user={user} hasAccount={hasAccount} setHasAccount={setHasAccount}/>
        </Sider>
        <Layout className="main">
          <Header className="header">
            <Button
              type="primary"
              className="trigger"
              onClick={() => setIsCollapsed(toggle)}
            >
              {isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
          </Header>
          <Content className="content">
            <Routes>
            <Route path="/" element={<HomePage productItems={productItems}/>}/>
            <Route path="/products" element={<ProductsIndexPage productItems={productItems} user={user}/>} />
            <Route path="/orders" element={<OrderHistoryPage />} />
            <Route path="/users" element={<AuthPage hasAccount={hasAccount} setUser={setUser}/>}/>
          </Routes>
          </Content>
        </Layout>
      </Layout>
    </main>
  );
}


