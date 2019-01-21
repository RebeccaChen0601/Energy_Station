/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Statistics from "./src/Statistics/Statistics.js";
//import StackedAreaChart from "./components/StackedAreaChart";


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Statistics />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});
