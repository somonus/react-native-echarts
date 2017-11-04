import React, { Component } from 'react';
import { WebView, View } from 'react-native';
import _ from 'lodash';
import renderChart from './renderChart';

export default class App extends Component {
  componentWillReceiveProps(nextProps) {
    if (!_.isEqual(nextProps.option, this.props.option)) {
      this.chart.reload();
    }
  }
  render() {
    const { height = 400, onMessage } = this.props;
    return (
      <View style={{ flex: 1, height }}>
        <WebView
          ref={(ref) => {
            this.chart = ref;
          }}
          onMessage={(event) => {
            onMessage && onMessage(event.nativeEvent.data);
          }}
          javaScriptEnabled={true}
          scrollEnabled={false}
          injectedJavaScript={renderChart(this.props)}
          style={{ height }}
          source={require('./tpl.html')}
        />
      </View>
    );
  }
}
