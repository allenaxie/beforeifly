import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import * as usersService from '../../utilities/users-service';
import { Form, Input, Button, Typography } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import "./LoginForm.css"


export default function LoginForm({ setUser }) {

  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { Title } = Typography;



  async function handleSubmit(values) {
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(values);
      setUser(user);
      // Navigate user to home page
      navigate('/');
    } catch {
      setError('Log In Failed - Try Again');
    }
  }



  return (
    <div>
      <Title level={2}>Log In</Title>
      <div className="form-container" >
        <Form
          name="normal_login"
          className="login-form"
          autoComplete="off"
          initialValues={{ remember: true }}
          onFinish={handleSubmit}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please enter your email address!' }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
              name="email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please enter your password!' }]}
          >
            <Input
              name="password"
              type="password"
              prefix={<LockOutlined className="site-form-item-icon" />}

              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type="primary" className="login-form-button">LOG IN</Button>
          </Form.Item>
        </Form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>

  )
}



