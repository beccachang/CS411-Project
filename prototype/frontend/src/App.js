import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Form, Input, Button, Radio, DatePicker, Space } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showResultsDiv: false,
      formData: {date: ''},
      viewingWikiLink: "https://en.wikipedia.org/wiki/1912",
      youtubeLink: 'https://www.youtube.com/embed/E7wJTI-1dvQ',
    };
  }

  onSubmit = () => {
    console.log('hello');
    // fetch("http://127.0.0.1:8000/api/searchrequest/", { method: 'POST', body: JSON.stringify(formData)});
    this.state.showResultsDiv = true;
  };

  onFormChange = (e) => {
    console.log(e);
    this.state.formData.date = e;
  };

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
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Form style={{ display: 'inline', position: 'absolute', left: '20px'}}>
              <Form.Item label="Date" name="Date">
                <DatePicker picker="month" onChange={ e => this.onFormChange(e)}/>
              </Form.Item>
              <Form.Item>
                <Button type="primary" onClick={this.onSubmit}>Submit</Button>
              </Form.Item>
            </Form>
            <div style={{display: this.state.showResultsDiv ? 'block' : 'none', margin: '20px'}}>
              <div className="box">
                <iframe src={this.state.youtubeLink}
                      frameBorder='0'
                      allow='autoplay; encrypted-media'
                      // allowfullscreen
                      title='video'
                      align = "left"
                      width="45%" height="512"
                />
                <iframe src={this.state.viewingWikiLink} frameBorder="0" scrolling="yes" width="45%" height="512" align="right"> </iframe>
              </div>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>©2021 Created by Some Tired Kids</Footer>
        </Layout>
      </div>
    );
  }
}

export default App;