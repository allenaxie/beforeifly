import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import "antd/dist/antd.css"
import "./NavBar.css"
import { useState, useEffect } from "react";
import { Menu, Modal, Button, Table, Tag, Space } from "antd";
import { HomeOutlined, UserAddOutlined, ShoppingCartOutlined, ShoppingOutlined, ImportOutlined, ExportOutlined, ProfileOutlined, UserOutlined } from "@ant-design/icons"
import AuthPage from "../../pages/AuthPage/AuthPage";



export default function NavBar({ user, setUser, setHasAccount, cart }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  // Modal
  const [isModalVisible, setIsModalVisible] = useState(false);

  function showModal () {
    setIsModalVisible(true);
  }

  function handleModalAction () {
    // Close modal
    setIsModalVisible(false);
  }

  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address'
    },
    {
      title: 'Phone Number',
      dataIndex: 'phone',
      key: 'phone'
    },
  ];

  console.log(user)
  const dataSource = user ?[
    {
      key: '1',
      name: user.name,
      email: user.email,
      address: user.address,
      phone: user.phoneNumber,
    }
  ] : 'none'
    

  
  

  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={[1]}>
      <Menu.Item key="1" icon={<HomeOutlined />}>
        <Link to="/">Home</Link>
      </Menu.Item>
      {
        user ?
          <>

            <Menu.Item 
            id="nav-profile" 
            key="8" 
            icon={<UserOutlined />}
            onClick={showModal}
            >
              Profile
            </Menu.Item>
            
            <Modal 
            title="User Info" 
            visible={isModalVisible} 
            onCancel={handleModalAction}
            footer = {[
              <Button key="submit" type="primary" onClick={handleModalAction}>
                OK
              </Button>
            ]}
            >
              <Table
                columns={columns}
                dataSource={dataSource}
                pagination={{hideOnSinglePage: true}}
              />
            </Modal>
            


            <Menu.Item key="4" icon={<ShoppingOutlined />}>
              <Link to="/products">
                Browse products
              </Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<ProfileOutlined />}>
              <Link to="/orders">Order History</Link>
            </Menu.Item>
            <Menu.Item key="6"
              icon={
                <ShoppingCartOutlined
                />
              }>
              <Link to="/orders/cart">
                Cart
              </Link>
            </Menu.Item>
            <Menu.Item key="7" icon={<ExportOutlined />}>
              <Link to="/" onClick={handleLogOut}>Sign out</Link>
            </Menu.Item>

          </>
          :
          <>
            <Menu.Item key="2" icon={<UserAddOutlined />}>
              <Link to="/users" onClick={() => setHasAccount(false)}>Register</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={< ImportOutlined />}>
              <Link to="/users" onClick={() => setHasAccount(true)}>Log In</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<ShoppingOutlined />}>
              <Link to="/products">
                Browse products
              </Link>
            </Menu.Item>
          </>
      }
    </Menu>

  )
}
