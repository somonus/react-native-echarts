/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import Echarts from 'native-echarts';

export default class app2 extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      option : {
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
            data:['销量']
        },
        xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
      },
      text: 'test'
    };
  }

  changeOption() {
    this.setState({
      option: {
        title: {
            text: 'New Chart'
        },
        tooltip: {},
        legend: {
            data:['销量']
        },
        xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'line',
            data: [5, 20, 36, 10, 10, 20]
        }]
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native Echarts!
        </Text>
        <TouchableOpacity style={styles.button} onPress={this.changeOption.bind(this)}>
          <Text style={{color: '#fff'}}>change state</Text>
        </TouchableOpacity>
        <Echarts option={this.state.option}  height={300} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 30,
  },
  button: {
    backgroundColor: '#d9534f',
    padding: 8,
    borderRadius: 4,
    marginBottom: 20
  }
});

AppRegistry.registerComponent('app2', () => app2);
