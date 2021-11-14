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
      formData: {
        month: 'February',
        year: 1990,
        wikipedia_results: {}
      },
      viewingWikiLink: "https://en.wikipedia.org/wiki/1912",
      youtubeLink: 'https://www.youtube.com/embed/E7wJTI-1dvQ',
      response: null
    };
  }

  onSubmit = () => {
    console.log('hello');
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(this.state.formData),
      redirect: 'follow'
    };
    fetch('http://127.0.0.1:8000/api/create/', requestOptions).then(response => response.json())
    .then(body => {
      console.log(body.wikipedia_results);
      this.setState({response: body.wikipedia_results});
    })
    .catch(error => {console.log(error, error); this.setState({response: error})});;
    this.setState({showResultsDiv: true});
  };

  onFormChange = (e) => {
    console.log(e.year());
    const newDate = {
      month: e.format('MMMM'),
      year: e.year(),
      wikipedia_results: {}
    }
    this.setState({
      formData: newDate
    })
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
            <Form style={{ display: 'inline-block', position: 'absolute', left: '20px'}}>
              <Form.Item label="Date" name="Date">
                <DatePicker picker="month" onChange={ e => this.onFormChange(e)}/>
              </Form.Item>
              <Form.Item>
                <Button type="primary" onClick={this.onSubmit}>Submit</Button>
              </Form.Item>
            </Form>
            <div style={{display: this.state.showResultsDiv ? 'inline-block' : 'none', margin: '20px'}}>
              <div className="box">
                <p>{JSON.stringify(this.state.response)}</p>
                {/* <iframe src={this.state.youtubeLink}
                      frameBorder='0'
                      allow='autoplay; encrypted-media'
                      // allowfullscreen
                      title='video'
                      align = "left"
                      width="45%" height="512"
                /> */}
                {/* <iframe src={this.state.viewingWikiLink} frameBorder="0" scrolling="yes" width="45%" height="512" align="right"> </iframe> */}
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