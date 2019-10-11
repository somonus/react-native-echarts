import React, { Component } from 'react';
import {  View, StyleSheet, Platform } from 'react-native';
import renderChart from './renderChart';
import echarts from './echarts.min';
import WebView from "react-native-webview";
import getTpl from "./tpl" ;

export default class App extends Component {

  constructor(props) {
    super(props);
    this.setNewOption = this.setNewOption.bind(this);
  }


  componentWillReceiveProps(nextProps) {
    if(nextProps.option !== this.props.option) {
      // this.refs.chart.reload();
      if(Platform.OS === 'android'){
        this.refs.chart.reload();
      }else {
        this.setNewOption(nextProps.option) ;
      }
    }
  }
  shouldComponentUpdate() {
    return false ;
  }

  setNewOption(option) {
    this.refs.chart.postMessage(JSON.stringify(option));
  }

  render() {
    return (
        <View style={{flex: 1, height: this.props.height || 400,}}>
          <WebView
              ref="chart"
              scrollEnabled = {false}
              injectedJavaScript = {renderChart(this.props)}
              style={{
                height: this.props.height || 400,
                backgroundColor: this.props.backgroundColor || 'transparent'
              }}
              originWhitelist={['*']}
              source={Platform.OS === "ios"?{ html:getTpl() }:{uri:'file:///android_asset/tpl.html'}}
              onMessage={event => this.props.onPress ? this.props.onPress(JSON.parse(event.nativeEvent.data)) : null}
          />
        </View>
    );
  }
}
