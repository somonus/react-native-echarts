import React, { Component } from 'react';
import { WebView } from 'react-native';
import renderChart from './renderChart';
import echarts from './echarts.min';

export default class App extends Component {
  render() {
    return (
      <WebView
        scrollEnabled = {false}
        style={{
          height: this.props.height || 400,
        }}
        source={{html: renderChart(this.props.option)}}
      />
    );
  }
}


