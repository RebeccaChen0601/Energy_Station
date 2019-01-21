import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import { StackedBarChart } from 'react-native-svg-charts'
//import Toolbar from '../lib/Toolbar.js';
//import { getColor } from '../lib/helpers.js';
//<Toolbar title="Energy Station" color={getColor('#1abc9c')}/>

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
        width: 240,
        height: 40,
        borderColor: '#D8D8D8',
        borderWidth: 3,
        borderRadius: 5
    },
    Act2Bar: {
        justifyContent: "space-evenly",
        backgroundColor: "#D8D8D8",
        width: 160,
        height: 40,
        borderColor: '#D8D8D8',
        borderWidth: 3,
        borderRadius: 5
    },
    Act3Bar: {
        justifyContent: "space-evenly",
        backgroundColor: "#D8D8D8",
        width: 80,
        height: 40,
        borderColor: '#D8D8D8',
        borderWidth: 3,
        borderRadius: 5
    },
});

export default class Statistics extends Component {
    render() {
        const data = [
            {
                month: new Date(2015, 0, 1),
                apples: 3840,
                cherries: 960,
                dates: 400,
                oranges: 400,
            },
            {
                month: new Date(2015, 1, 1),
                apples: 1600,
                cherries: 960,
                dates: 400,
            },
            {
                month: new Date(2015, 2, 1),
                apples: 3640,
                cherries: 640,
                dates: 400,
            },
            {
                month: new Date(2015, 3, 1),
                apples: 3320,
                cherries: 640,
                dates: 400,
            },
            {
                month: new Date(2015, 3, 1),
                apples: 1359,
                cherries: 435,
                dates: 345,
            },
            {
                month: new Date(2015, 3, 1),
                apples: 3523,
                cherries: 2345,
                dates: 1344,
            },
            {
                month: new Date(2015, 3, 1),
                apples: 804,
                cherries: 562,
                dates: 345,
            },
        ]
        
 
const colors = [ '#FDBE51','#28D8A1', '#4A90E2']
        const keys   = [ 'apples', 'cherries', 'dates' ]
 
        return (
            <View style={justifyContent='center'}>
            <View style={justifyContent='center'}>
                <StatusBar 
                    backgroundColor="#FDBE51"
                    animated={true}
                />
            </View>
            <StackedBarChart
                style={ { height: 200 } }
                keys={ keys }
                colors={ colors }
                data={ data }
                showGrid={ false }
                contentInset={ { top: 30, bottom: 30 } }
            />
            <View>
                <Text style={styles.Act1}>Exercise:<Text style={{color:'black'}}> 6 hrs 40 min</Text></Text>
                <View style={styles.Act1Bar}></View>
                <Text style={styles.Act2}>Conversation with friends:<Text style={{color:'black'}}> 5 hrs 20 min</Text></Text>
                <View style={styles.Act2Bar}></View>
                <Text style={styles.Act3}>Listen to music:<Text style={{color:'black'}}> 3 hrs 30 min</Text></Text>
                <View style={styles.Act3Bar}></View>
            </View>
            </View>
        );
    }
}


