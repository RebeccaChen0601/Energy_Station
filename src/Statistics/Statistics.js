import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import StackedBarChart from "./charts/StackedBarChart";
import ProgressBar from "./charts/ProgressBar";
import StackedAreaChart from "./charts/StackedAreaChart";
import PieChart from "./charts/PieChart";


export default class Statistics extends Component {
  render() {
    return (
    <View style>
        <View>
            <StatusBar 
                backgroundColor="#FDBE51"
                animated={true}
            />
        </View>
        <StackedBarChart />
        <ProgressBar />
        <View style={{marginTop:30}}>
            <PieChart />
        </View>
    </View>
    );
  }
}