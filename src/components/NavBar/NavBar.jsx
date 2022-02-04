import { Link } from "react-router-dom";
import { useState } from "react";
import * as userService from "../../utilities/users-service";
import "antd/dist/antd.css"
import "./NavBar.css"
import {Layout, Menu} from "antd";

function NavBar({ user, setUser, collapsed }) {

  const {Sider} = Layout;

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <Menu theme="dark" mode="inline" inlineCollapsed={collapsed} defaultSelectedKeys={[1]}> 
      <Menu.Item key="1" >
        Home
      </Menu.Item>
      <Menu.Item key="2" >
        Register
      </Menu.Item>
      <Menu.Item key="3" >
        Log In
      </Menu.Item>
      <Menu.Item key="4" >
        Sign out
      </Menu.Item>
      <Menu.Item key="5" >
        Browse products
      </Menu.Item>
      <Menu.Item key="6" >
        Order History
      </Menu.Item>
      <Menu.Item key="7" >
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