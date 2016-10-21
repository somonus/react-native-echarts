import React, { Component } from 'react';
import { WebView } from 'react-native';
import tpl from './tpl';
import echarts from './echarts.min';

export default class App extends Component {
  render() {
    return (
      <WebView
        style={{
          height: this.props.height || 400,
        }}
        source={{html: tpl}}
      />
    );
  }
}


