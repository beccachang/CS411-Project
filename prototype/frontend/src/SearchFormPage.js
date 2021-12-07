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
      wikiLinks: null,
      wikiHeaders: null,
      wikipediaIndex: 1,
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
      const wikipedia_results = JSON.parse(body.wikipedia_results)
      console.log(Object.values(JSON.parse(body.wikipedia_results)));
      this.setState({
        wikiLinks: Object.values(wikipedia_results), 
        wikiHeaders: Object.keys(wikipedia_results), 
        showResultsDiv: true});
    })
    .catch(error => {console.log(error, error); this.setState({response: error})});;
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
    const {wikiLinks, wikiHeaders, wikipediaIndex} = this.state;

    return (
      <div>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Form style={{ display: 'inline-block', position: 'absolute', left: '20px'}}>
          <Form.Item label="Date" name="Date">
            <DatePicker picker="month" onChange={ e => this.onFormChange(e)}/>
            <Button type="primary" onClick={this.onSubmit} style={{marginLeft: '20px'}}>Submit</Button>
          </Form.Item>
        </Form>
        <div style={{display: this.state.showResultsDiv ? 'inline-block' : 'none', margin: '20px'}}>
          <div className="box">
            <div className="box" display = "inline-block">              
              <Button 
                type="link"
                disabled={wikipediaIndex==1}
                onClick={e => this.setState({wikipediaIndex: wikipediaIndex-1})}
                style={{marginLeft:'0px'}}
              >
                Prev
              </Button>
              <Button 
                type="link"
                disabled={wikiLinks ? wikipediaIndex==wikiLinks.length-1 : true} 
                onClick={e => this.setState({wikipediaIndex: wikipediaIndex+1})}
                style={{marginLeft:'90px'}}
              >
                  Next
              </Button>
              <Button 
                type="link"
                disabled={wikipediaIndex==1}
                onClick={e => this.setState({wikipediaIndex: wikipediaIndex-1})}
                style={{marginLeft:'400px'}}
              >
                Prev
              </Button>
              <Button 
                type="link" 
                disabled={wikiLinks ? wikipediaIndex==wikiLinks.length-1 : true} 
                onClick={e => this.setState({wikipediaIndex: wikipediaIndex+1})}
                style={{marginLeft:'90px'}}
              >
                Next
              </Button>
            </div>
            {/* <p>{JSON.stringify(this.state.wikiLinks)}</p> */}
            <div>
              <iframe src={this.state.youtubeLink}
                frameBorder='0'
                allow='autoplay; encrypted-media'
                // allowfullscreen
                title='video'
                align = "left"
                width="45%" height="512"
              />
            </div>
            <div>
              <iframe 
                src={wikiLinks ? wikiLinks[wikipediaIndex] : ""} 
                frameBorder="0" 
                scrolling="yes" 
                width="45%" 
                height="512" 
                align="right"/>
            </div>
          </div>
        </div>
          
      </div>
    );
  }
}

export default App;