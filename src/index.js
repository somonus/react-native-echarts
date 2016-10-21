import React, { Component } from 'react';
import { View, WebView } from 'react-native';

export default class App extends Component {
  render() {
    return (
        <WebView
          source = {{html: `<div>test</div>`}}
        />
    );
  }
}
