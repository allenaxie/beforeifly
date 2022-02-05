import './App.css';
import { useState } from "react";
import { getUser } from "../../utilities/users-service";
import { Routes, Route } from "react-router-dom";
import ProductsIndexPage from "../ProductsIndexPage/ProductsIndexPage";
import AuthPage from "../AuthPage/AuthPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import NavBar from "../../components/NavBar/NavBar";
import HomePage from "../HomePage/HomePage";
import { Layout, Typography, Menu, Button } from "antd";
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
 
  function toggle () {
    setIsCollapsed(!isCollapsed);
  }

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
        <Layout>
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
            <Route path="/" element={<HomePage />}/>
            <Route path="/products" element={<ProductsIndexPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
            <Route path="/users" element={<AuthPage hasAccount={hasAccount} setUser={setUser}/>}/>
          </Routes>
          </Content>
        </Layout>
      </Layout>
    </main>
  );
}


