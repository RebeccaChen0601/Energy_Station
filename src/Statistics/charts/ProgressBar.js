import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    Act1: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#4A90E2'
    },
    Act2: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#28D8A1'
    },
    Act3: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#FDBE51'
    },
    Act1Bar: {
        justifyContent: "space-evenly",
        backgroundColor: '#D8D8D8',
        width: 400,
        height: 40,
        borderColor: '#D8D8D8',
        borderWidth: 3,
        borderRadius: 5
    },
    Act2Bar: {
        justifyContent: "space-evenly",
        backgroundColor: "#D8D8D8",
        width: 320,
        height: 40,
        borderColor: '#D8D8D8',
        borderWidth: 3,
        borderRadius: 5
    },
    Act3Bar: {
        justifyContent: "space-evenly",
        backgroundColor: "#D8D8D8",
        width: 120,
        height: 40,
        borderColor: '#D8D8D8',
        borderWidth: 3,
        borderRadius: 5
    },
});


export default class Statistics extends Component {
  render() {
    return (
        <View>
                <Text style={styles.Act1}>Exercise:<Text style={{color:'black'}}> 6 hrs 40 min</Text></Text>
                <View style={styles.Act1Bar}></View>
                <Text style={styles.Act2}>Conversation with friends:<Text style={{color:'black'}}> 5 hrs 20 min</Text></Text>
                <View style={styles.Act2Bar}></View>
                <Text style={styles.Act3}>Listen to music:<Text style={{color:'black'}}> 3 hrs 30 min</Text></Text>
                <View style={styles.Act3Bar}></View>
        </View>
    );
  }
}