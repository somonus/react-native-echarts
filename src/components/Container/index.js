import React, { Component } from 'react';
import { View } from 'react-native';
import styles from '../../style';

export default class App extends Component {
  render() {
    return (
      <View style={[styles.container, {width: this.props.width}]}>
        {this.props.children}  
      </View>
    );
  }
}
