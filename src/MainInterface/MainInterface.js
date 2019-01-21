
import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight , Alert} from 'react-native';

import ActivityBar from './ActivityBar/ActivityBar';


export default class MainInterface extends Component {
    state = {
        activityName: "",
        EnergyVal: "",
    };

    render() {
        return (
            <View style={styles.container}>
                <View style = {styles.topBar}></View>

                <ActivityBar activityName='Excercise' EnergyPtr='10' Length = "20"/>
                <ActivityBar activityName='Wake up Early' EnergyPtr='20' Length = "10"/>
            </View>
          );
    }
}

const styles = StyleSheet.create({
    topBar: {
        width: "100%",
        height: 60,
        backgroundColor: '#FDBE51'
    },
    container: {
        flex: 1,
        backgroundColor: '#ddd9d9'
    }
});