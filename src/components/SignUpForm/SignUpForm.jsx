import { signUp } from "../../utilities/users-service";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Typography } from "antd";
import { UserOutlined, LockOutlined, MailOutlined, HomeOutlined, PhoneOutlined } from '@ant-design/icons';

export default function SignUpForm({ setUser }) {

    const navigate = useNavigate();
    const [error, setError] = useState('');
    const {Title} = Typography

    async function handleSubmit(values) {
        try {
            // delete confirm password property
            delete values.confirm;
            // Create user
            const user = await signUp(values);
            setUser(values)
            console.log('signup-form-user', user)
            // Navigate user to home page
            navigate('/')
        }
        catch {
            setError('Sign Up Failed - Try Again');
        }
    }

    return (
        <div>
            <Title level={2}>Sign Up</Title>
            <div className="form-container" >
                <Form
                    name="register"
                    className="signUp-form"
                    autoComplete="off"
                    initialValues={{ remember: true }}
                    onFinish={handleSubmit}
                    scrollToFirstError
                >
                    {/* Name */}
                    <Form.Item
                        name="name"
                        rules={[{ required: true, message: 'Please enter your full name!' }]}
                    >
                        <Input
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            placeholder="Full Name"
                            name="name"
                        />
                    </Form.Item>
                    {/* Email */}
                    <Form.Item
                        name="email"
                        rules={[{ 
                            type: 'email', message: 'The input is not a valid E-mail!',
                            required: true, message: 'Please enter your email address!' }]}
                    >
                        <Input
                            prefix={ <MailOutlined className="site-form-item-icon" /> }
                            placeholder="Email"
                            name="email"
                        />
                    </Form.Item>
                    {/* Password */}
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please enter your password!' }]}
                        hasFeedback
                    >
                        <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        placeholder="Password"
                        />
                    </Form.Item>
                    {/* Confirm Password */}
                    <Form.Item
                        name="confirm"
                        dependencies = {['password']}
                        hasFeedback
                        rules={[
                            { required: true, message: 'Please confirm your password!' },
                            // Check is password matches
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                  if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                  }
                                  return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                },
                              }),
                        ]}
                    >
                        <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        placeholder="Confirm Password"
                        />
                    </Form.Item>
                    {/* Address */}
                    <Form.Item
                        name="address"
                        rules={[{ required: true, message: 'Please enter your address' }]}
                    >
                        <Input
                            prefix={<HomeOutlined className="site-form-item-icon" />}
                            placeholder="Address"
                            name="address"
                        />
                    </Form.Item>
                    {/* Phone Number */}
                    <Form.Item
                        name="phone-number"
                    >
                        <Input
                            prefix={<PhoneOutlined className="site-form-item-icon" />}
                            placeholder="Phone Number"
                            name="phone number"
                        />
                    </Form.Item>
                    {/* Submit button */}
                    <Form.Item>
                        <Button htmlType="submit" type="primary" className="login-form-button">Register</Button>
                    </Form.Item>
                </Form>
            </div>
            <p className="error-message">&nbsp;{error}</p>
        </div>

    )
}