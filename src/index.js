import React, { Component } from 'react';
import { Container, Echarts } from './components'

export default class App extends Component {

  setNewOption(option) {
    this.chart.setNewOption(option);
  }

  render() {
    return (
      <Container width={this.props.width}>
        <Echarts {...this.props} ref={e => this.chart = e}/>
      </Container>
    );
  }
}
