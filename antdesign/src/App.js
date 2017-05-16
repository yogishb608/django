import React, { Component } from 'react';
import './App.css';
import { Button, Row, Col } from 'antd';
class App extends Component {
    render() {
        const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;

        return (
            <div className="App">
          <Row>
            <Col span={6}><Button type="primary">Button</Button></Col>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
          </Row>
          
           <p>Align Center</p>
            <Row type="flex" justify="space-around" align="middle">
              <Col span={4}><DemoBox value={100}>col-4</DemoBox></Col>
              <Col span={4}><DemoBox value={50}>col-4</DemoBox></Col>
              <Col span={4}><DemoBox value={120}>col-4</DemoBox></Col>
              <Col span={4}><DemoBox value={80}>col-4</DemoBox></Col>
            </Row>      
      </div>
        );
    }
}

export default App;
