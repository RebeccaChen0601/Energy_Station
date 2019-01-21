import React from 'react'
import { PieChart } from 'react-native-svg-charts'
 
export default class PieChartExample extends React.PureComponent {
 
    render() {
 
        const data = [ 50, 40, 10 ]
 
        const randomColor = () => ('#' + (Math.random() * 0xFFFFFF << 0).toString(16) + '000000').slice(0, 7)
 
        const pieData = data
            .map((value, index) => ({
                value,
                svg: {
                    fill: randomColor(),
                    onPress: () => console.log('press', index),
                },
                key: `pie-${index}`,
            }))
 
        return (
            <PieChart
                style={ { height: 200 } }
                data={ pieData }
            />
        )
    }
 
}