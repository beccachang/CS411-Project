import React, { Component } from 'react';
import './App.css';
import {Table} from 'antd';
// import { AgGridColumn, AgGridReact } from 'ag-grid-react';
// import "ag-grid-community/dist/styles/ag-grid.css";
// import "ag-grid-community/dist/styles/ag-theme-balham.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: null
        }
    }
    
    componentDidMount() {
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      fetch("http://127.0.0.1:8000/api/", requestOptions)
          .then(result => result.json())
          .then(rowData => {
            console.log(rowData);
            this.setState({dataSource: rowData});
          })
    }

    render() {
      const columns = [
        {
          title: 'Month',
          dataIndex: 'month',
          key: 'month',
        },
        {
          title: 'Year',
          dataIndex: 'year',
          key: 'year',
        },
      ];

      return (
        <div align = "center">
          <div
          className="ag-theme-balham"
            style={{height: '600px', width: '400px'}}
          >
            <Table dataSource={this.state.dataSource} columns={columns} />;
          </div>
        </div>
        );
    }
}

export default App;