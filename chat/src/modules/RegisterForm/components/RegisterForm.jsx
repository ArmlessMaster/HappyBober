import React from "react";
import { Form, Input } from 'antd';
import { Button, Block } from 'components';
import { UserOutlined, LockOutlined, MailOutlined, InfoCircleTwoTone } from '@ant-design/icons';
import { Link } from "react-router-dom";

const success = false;

const RegisterForm = props => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isValid,
        isSubmitting
      } = props;

    return (
        <div>
                <div className="auth__top">
                    <h2>Register</h2>
                    <p>To enter the chat, you need to register</p>
                </div>
        <Block>
            {!success ? (
                <Form onSubmit={handleSubmit} name="normal_login" className="login-form" initialValues={{ remember: true, }} onFinish={onFinish}>
                        <Form.Item validateStatus={!touched.email ? '' : errors.email ? "error" : 'success'} help={ !touched.email ? '' : errors.email } hasFeedback>
                        <Input prefix={<MailOutlined className="site-form-item-icon" />} type="email" placeholder="E-Mail" size="large" onChange={handleChange} onBlur={handleBlur} value={values.email} name="email" />
                    </Form.Item>
                    <Form.Item>
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} type="user" placeholder="Name" size="large" />
                    </Form.Item>
                    <Form.Item validateStatus={!touched.password ? '' : errors.password  ? "error" : 'success'} help={ !touched.password ? '' : errors.password } hasFeedback>
                        <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" size="large" onChange={handleChange} onBlur={handleBlur} value={values.password} name="password" />
                    </Form.Item>
                    <Form.Item>
                        <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password repeat" size="large" />
                    </Form.Item>
                    <Form.Item>
                        {isSubmitting && !isValid && <span>err</span> }
                        <Button onClick={ handleSubmit } type="primary" htmlType="submit" className="login-form-button">
                            Register
                        </Button>
                    </Form.Item>
                    <Link className="auth register-link" to="/">Login</Link>
                </Form>
                ) : (
                    <div className="auth__success-block">
                        <div>
                            <InfoCircleTwoTone />
                      </div>
                      <h2>Verify your account</h2>
                      <p>
                      An email has been sent to your email address with a link to verify your account.
                      </p>
                    </div>
                  )}
        </Block>
      </div>
        );
};

export default RegisterForm;