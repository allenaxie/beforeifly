import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import {Form, Input, Button, Checkbox} from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import "./LoginForm.css"


export default function LoginForm({ setUser }) {
  // const [credentials, setCredentials] = useState({
  //   email: '',
  //   password: ''
  // });
  const [error, setError] = useState('');

  // function handleChange(evt) {
  //   setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
  //   setError('');
  // }

  async function handleSubmit(values) {

    // Prevent form from being submitted to the server
    // evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(values);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
 <div>
<div className="form-container" >
  <Form 
  name="normal_login"
  className="login-form"
  autoComplete="off"
  initialValues={{ remember:true}}
  onFinish={handleSubmit}
  >
    <Form.Item 
    name="email" 
    rules={[{required: true, message: 'Please enter your email address!'}]}
    >
      <Input 
      prefix={<UserOutlined className="site-form-item-icon" />} 
      placeholder="Email" 
      name="email" 
      value={credentials.email} 
      onChange={handleChange} />
    </Form.Item>
    <Form.Item 
    name="password" 
    rules={[{required: true, message: 'Please enter your password!'}]}
    >
      <Input 
      name="password" 
      prefix={<LockOutlined className="site-form-item-icon" />} 
      value={credentials.password} 
      onChange={handleChange}
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
  


  //   <div>
  //   <div className="form-container" onSubmit={handleSubmit}>
  //     <form autoComplete="off" >
  //       <label>Email</label>
  //       <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
  //       <label>Password</label>
  //       <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
  //       <button type="submit">LOG IN</button>
  //     </form>
  //   </div>
  //   <p className="error-message">&nbsp;{error}</p>
  // </div>

  )}



  