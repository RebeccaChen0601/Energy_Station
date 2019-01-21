import React from 'react'
import { StackedAreaChart } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
 
export default class StackedAreaExample extends React.PureComponent {
 
    render() {
 
        const data = [
            {
                month: new Date(2019, 0, 1),
                act1: 3840,
                act2: 1920,
                act3: 960,
            },
            {
                month: new Date(2019, 1, 1),
                act1: 1600,
                act2: 1440,
                act3: 960,
            },
            {
                month: new Date(2019, 3, 1),
                act1: 3320,
                act2: 480,
                act3: 640,
            },
        ]
 
        const colors = [ '#FDBE51', '#28D8A1', '#4A90E2' ]
        const keys   = [ 'act1', 'act2', 'act3' ]
/*        const svgs = [
                    { onPress: () => console.log('apples') },
                    { onPress: () => console.log('bananas') },
                    { onPress: () => console.log('cherries') },
                    { onPress: () => console.log('dates') },
                ]*/

        return (
            <StackedAreaChart
                style={ { height: 200, paddingVertical: 16, marginTop:75 } }
                data={ data }
                keys={ keys }
                colors={ colors }
                curve={ shape.curveNatural }
                showGrid={ false }
              /*  svgs={ svgs }*/
            />
        )
    }
}