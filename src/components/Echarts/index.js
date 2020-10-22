import React, { Component } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import renderChart from './renderChart';
import WebView from 'react-native-webview';
import echarts from './echarts.min';
// 版本变更https://zhuanlan.zhihu.com/p/89494013
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {chart:null};
    // refs 弃用了 https://reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs
    this.chart = null;
    this.setChart = element => {
      this.setState({chart:element})
    };
    this.setNewOption = this.setNewOption.bind(this);
  }
  
  static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.option !== prevState.option) {
      prevState.chart && prevState.chart.reload();
    }

    return null;
  }


  setNewOption(option) {
    this.state.chart && this.state.chart.postMessage(JSON.stringify(option));
  }

  render() {
    return (
      <View style={{flex: 1, height: this.props.height || 400,}}>
        <WebView
          ref = {this.setChart} 
          scrollEnabled = {false}
          injectedJavaScript = {renderChart(this.props)}
          style={{
            height: this.props.height || 400,
            backgroundColor: this.props.backgroundColor || 'transparent'
          }}
          scalesPageToFit={Platform.OS !== 'ios'}
          originWhitelist={['*']}
          // source={require('./tpl.html')}
          source= {Platform.OS === 'ios' ? require('./tpl.html') : { uri: 'file:///android_asset/tpl.html' }}
          onMessage={event => this.props.onPress ? this.props.onPress(JSON.parse(event.nativeEvent.data)) : null}
        />
      </View>
    );
  }
}
