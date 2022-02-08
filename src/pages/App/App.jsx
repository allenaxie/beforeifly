import './App.css';
import { useState, useRef } from "react";
import { getUser } from "../../utilities/users-service";
import { Routes, Route } from "react-router-dom";
import ProductsIndexPage from "../ProductsIndexPage/ProductsIndexPage";
import AuthPage from "../AuthPage/AuthPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import NavBar from "../../components/NavBar/NavBar";
import "@stripe/stripe-js";
import HomePage from "../HomePage/HomePage";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import { Layout, Button, } from "antd";
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
  const [cart, setCart] = useState(null)
 
  function toggle () {
    setIsCollapsed(!isCollapsed);
  }

  

  // console.log('app-cart', cart)

  return (
    <main className="App">
      <Layout>
        <Sider
        className="sideNavbar"
          collapsible
          collapsed={isCollapsed}
        >
          <div className="logo"></div>
          <NavBar user={user} setUser={setUser} setHasAccount={setHasAccount}/>
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
              <Route path="/" element={<HomePage productItems={productItems} setProductItems={setProductItems} cart={cart} setCart={setCart}/>}/>
              <Route path="/products" element={<ProductsIndexPage productItems={productItems} setProductItems={setProductItems} user={user} cart={cart} setCart={setCart}/>} />
              <Route path="/orders" element={<OrderHistoryPage />} />
              <Route path="/orders/cart" element={<NewOrderPage cart={cart} setCart={setCart} />} />
              <Route path="/users" element={<AuthPage hasAccount={hasAccount} setUser={setUser}/>}/>
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </main>
  );
}


