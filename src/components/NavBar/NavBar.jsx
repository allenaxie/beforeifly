import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import "antd/dist/antd.css"
import "./NavBar.css"
import { Menu} from "antd";
import {HomeOutlined, UserAddOutlined, ShoppingCartOutlined, ShoppingOutlined, ImportOutlined, ExportOutlined, ProfileOutlined } from "@ant-design/icons"
import AuthPage from "../../pages/AuthPage/AuthPage";



export default function NavBar({ user, setUser,setHasAccount }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={[1]}> 
     <Menu.Item key="1" icon={<HomeOutlined />}>
        <Link to="/">Home</Link>
      </Menu.Item>
      {
        user ?
      <>
      <Menu.Item key="4" icon={<ShoppingOutlined />}>
        <Link to="/products">
          Browse products
        </Link>
      </Menu.Item>
      <Menu.Item key="5" icon={<ProfileOutlined />}>
        <Link to="/orders">Order History</Link>
      </Menu.Item>
      <Menu.Item key="6" icon={<ShoppingCartOutlined />}>
        <Link to="/orders/cart">Cart</Link>
      </Menu.Item>
      <Menu.Item key="7" icon={<ExportOutlined  />}>
        <Link to="/" onClick={handleLogOut}>Sign out</Link>
      </Menu.Item>
      </>
      :
      <>
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
