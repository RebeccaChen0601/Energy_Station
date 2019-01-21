import React, { Component } from 'react';
import { View } from 'react-native';
import { StackedBarChart } from 'react-native-svg-charts'



export default class StackedBarChartExample extends React.PureComponent {
    render() {
        const data = [
            {
                month: new Date(2015, 0, 1),
                act1: 3840,
                act2: 960,
                act3: 400,
            },
            {
                month: new Date(2015, 1, 1),
                act1: 1600,
                act2: 960,
                act3: 754,
            },
            {
                month: new Date(2015, 2, 1),
                act1: 3640,
                act2: 640,
                act3: 465,
            },
            {
                month: new Date(2015, 3, 1),
                act1: 3320,
                act2: 640,
                act3: 203,
            },
            {
                month: new Date(2015, 3, 1),
                act1: 1359,
                act2: 435,
                act3: 345,
            },
            {
                month: new Date(2015, 3, 1),
                act1: 3523,
                act2: 2345,
                act3: 1344,
            },
            {
                month: new Date(2015, 3, 1),
                act1: 804,
                act2: 562,
                act3: 345,
            },
        ]
        
 
const colors = [ '#FDBE51','#28D8A1', '#4A90E2']
        const keys   = [ 'act1', 'act2', 'act3' ]
        return (
            <View style={justifyContent='center'}>
            <StackedBarChart
                style={ { height: 200 } }
                keys={ keys }
                colors={ colors }
                data={ data }
                showGrid={ false }
                contentInset={ { top: 30, bottom: 30 } }
            />
            </View>
        );
    }
}