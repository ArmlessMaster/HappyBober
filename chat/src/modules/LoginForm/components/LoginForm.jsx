import React from "react";
import { Form, Input, Checkbox } from 'antd';
import { Button, Block } from 'components';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

const LoginForm = () =>{
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (
        <div>
                <div className="auth__top">
                    <h2>Sign in</h2>
                    <p>Please sign in</p>
                </div>
        <Block>
        <Form name="normal_login" className="login-form" initialValues={{ remember: true, }} onFinish={onFinish}>
                        <Form.Item hasFeedback validateStatus="success">
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" size="large" />
                        </Form.Item>
                        <Form.Item>
                            <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" size="large" />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>
                            <a className="login-form-forgot" href="#">
                                Forgot password
                            </a>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                        </Form.Item>
                        <Link className="auth register-link" to="/register">Register</Link>
                    </Form>
        </Block>
      </div>
        );
};

export default LoginForm;