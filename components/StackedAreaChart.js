import React from 'react'
import { StackedAreaChart } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
 
export default class StackedAreaExample extends React.PureComponent {
 
    render() {
 
        const data = [
            {
                month: new Date(2015, 0, 1),
                activity1: 3840,
                bananas: 1920,
                cherries: 960,
            },
            {
                month: new Date(2015, 1, 1),
                activity1: 1600,
                bananas: 1440,
                cherries: 960,
            },
            {
                month: new Date(2015, 2, 1),
                activity1: 640,
                bananas: 960,
                cherries: 3640,
            },
            {
                month: new Date(2015, 3, 1),
                activity1: 3320,
                bananas: 480,
                cherries: 640,
            },
        ]
 
        const colors = [ '#FDBE51', '#28D8A1', '#4A90E2' ]
        const keys   = [ 'activity1', 'bananas', 'cherries' ]
        const svgs = [
                    { onPress: () => console.log('apples') },
                    { onPress: () => console.log('bananas') },
                    { onPress: () => console.log('cherries') },
                    { onPress: () => console.log('dates') },
                ]

        return (
            <StackedAreaChart
                style={ { height: 200, paddingVertical: 16, marginTop:75 } }
                data={ data }
                keys={ keys }
                colors={ colors }
                curve={ shape.curveNatural }
                showGrid={ false }
                svgs={ svgs }
            />
        )
    }
}