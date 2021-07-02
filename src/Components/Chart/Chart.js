import React from 'react'
import ChartBar from './ChartBar'
import'./Chart.css'

const Chart = (props) => {
const dataPointsValues=props.dataPoints.map(item=>item.value)

const totalMaximum=Math.max(...dataPointsValues)

    return (
        <div className='chart'>
            {props.dataPoints.map((item)=> <ChartBar key={item.label} value={item.value} maxValue={totalMaximum} label={item.label}/>)}
        </div>
    )
}

export default Chart
