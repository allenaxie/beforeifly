import { Link } from "react-router-dom";
import { useState } from "react";
import * as userService from "../../utilities/users-service";
import "antd/dist/antd.css"
import "./NavBar.css"
import {Layout, Menu} from "antd";
import {HomeOutlined, UserAddOutlined, ShoppingCartOutlined, ShoppingOutlined, ImportOutlined, ExportOutlined, ProfileOutlined } from "@ant-design/icons"

function NavBar({ user, setUser, collapsed }) {

  const {Sider} = Layout;

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <Menu theme="dark" mode="inline" inlineCollapsed={collapsed} defaultSelectedKeys={[1]}> 
      <Menu.Item key="1" icon={<HomeOutlined />}>
        Home
      </Menu.Item>
      <Menu.Item key="2" icon={<UserAddOutlined />}>
        Register
      </Menu.Item>
      <Menu.Item key="3" icon={< ImportOutlined/>}>
        Log In
      </Menu.Item>
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
    </Menu>
  
    



    // <nav> 
    //   <Link to="/orders">Order History</Link>
    //   &nbsp; | &nbsp;
    //   <Link to="/orders/new">New Order</Link>
    //   &nbsp; | &nbsp;
    //   <span>Welcome, {user.name}!</span>
    //   &nbsp; | &nbsp;
    //   <Link onClick={handleLogOut} to="">Log Out</Link>
    // </nav>
  )
}

export default NavBar;