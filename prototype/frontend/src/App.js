import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Form, Input, Button, Radio, DatePicker, Space } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import './App.css';
import SearchFormPage from './SearchFormPage';
import LoginPage from './LoginPage';
import LastSearchResultPage from './LastSearchResultPage';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      shownPage: 1,
      history: null,
    };
  }
  
  render() {
    const { Header, Footer, Content } = Layout;
    return (
      <div className="App">
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
          <Menu.Item key={0} onClick={() => this.setState({shownPage: 1})}>{'Home'}</Menu.Item>
          <Menu.Item key={1} onClick={ () => this.setState({shownPage: 2})}>{'History'}</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          {this.state.shownPage === 0 ? <LoginPage/> : null}
          {this.state.shownPage === 1 ? <SearchFormPage/> : null}
          {this.state.shownPage === 2 ? <LastSearchResultPage results={this.state.history}/> : null}
        </Content>
      </Layout>
    </div>
    );
  }
}

export default App;