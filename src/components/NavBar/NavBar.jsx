import { Link } from "react-router-dom";
import { useState } from "react";
import * as userService from "../../utilities/users-service";
import "antd/dist/antd.css"
import "./NavBar.css"
import {Layout, Menu} from "antd";
import {HomeOutlined, UserAddOutlined, ShoppingCartOutlined, ShoppingOutlined, ImportOutlined, ExportOutlined, ProfileOutlined } from "@ant-design/icons"
import AuthPage from "../../pages/AuthPage/AuthPage";



export default function NavBar({ user, setUser, collapsed, hasAccount, setHasAccount }) {


  console.log(hasAccount, 'yuuhhh')
  const {Sider} = Layout;

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={[1]}> 
      {
        user ?
      <>
      <Menu.Item key="4" icon={<ExportOutlined  />}>
        Sign out
      </Menu.Item>
      <Menu.Item key="5" icon={<ShoppingOutlined />}>
        Browse products
      </Menu.Item>
      <Menu.Item key="6" icon={<ProfileOutlined />}>
        Order History
      </Menu.Item>
      <Menu.Item key="7" icon={<ShoppingCartOutlined />}>
        Cart
      </Menu.Item>
      </>
      :
      <>
      <Menu.Item key="1" icon={<HomeOutlined />}>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<UserAddOutlined />}>
        <Link to="/users" onClick={() => setHasAccount(false)}>Register</Link>
      </Menu.Item>
      <Menu.Item key="3" icon={< ImportOutlined/>}>
        <Link to="/users" onClick={() => setHasAccount(true)}>Log In</Link>
      </Menu.Item>
      </>
      }
    </Menu>
  
  )
}
