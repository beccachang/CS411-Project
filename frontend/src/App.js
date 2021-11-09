import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Form, Input, Button, Radio, DatePicker, Space } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import './App.css';

const { Header, Footer, Sider, Content } = Layout;
function App() {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('inline');

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === 'horizontal'
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;

  const buttonItemLayout =
    formLayout === 'horizontal'
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;

  return (
    <div className="App">
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            {new Array(3).fill(null).map((_, index) => {
              const key = index + 1;
              return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
            })}
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Form 
            // {...formItemLayout}
            layout={formLayout}
            form={form}
            initialValues={{
              layout: formLayout,
            }}
            onValuesChange={onFormLayoutChange}>
            <Form.Item label="Date" name="Date">
              <DatePicker />
            </Form.Item>
            <Form.Item label="Country*">
              <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item {...buttonItemLayout}>
              <Button type="primary">Submit</Button>
            </Form.Item>
          </Form>
        </Content>
        <Footer style={{ textAlign: 'center' }}>©2021 Created by Some Tired Kids</Footer>
      </Layout>
    </div>
  );
}

export default App;