import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Form, Input, Button, Radio, DatePicker, Space } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import './App.css';
import SearchFormPage from './SearchFormPage';
import LoginPage from './LoginPage';

class App extends React.Component {
  
  render() {
    const { Header, Footer, Content } = Layout;
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
          <LoginPage/>
          {/* <SearchFormPage/> */}
        </Content>
        <Footer style={{ textAlign: 'center' }}>©2021 Created by Some Tired Kids</Footer>
      </Layout>
    </div>
    );
  }
}

export default App;