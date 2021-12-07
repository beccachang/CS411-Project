import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './index.css';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    };
  }

  onSubmit = () => {
  };


  render() {

    return (
      <div style={{ margin: '20px',}}>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Login with OAuth
            </Button>
            <p style={{marginTop: '20px'}}>or</p>
          </Form.Item>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item >
            <a href="">
              Forgot password
            </a>
          </Form.Item>
          <Form.Item >
            <a href="">
              Register
            </a>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default App;