import './App.css';
import { useState } from "react";
import { getUser } from "../../utilities/users-service";
import { Routes, Route } from "react-router-dom";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
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

function App() {
  const [user, setUser] = useState(getUser());
  const { Header, Sider, Content } = Layout;
  const { Title } = Typography;
  const [isCollapsed, setIsCollapsed ] = useState([]);
 
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
          <NavBar collapsed={isCollapsed} />
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
            <HomePage />
          </Content>
        </Layout>
      </Layout>


      {/* <NavBar setUser={setUser} user={user}/> */}
      {/* <AuthPage setUser={setUser} /> */}
      {/* <>
        
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
        
        </> */}


    </main>
  );
}

export default App;
