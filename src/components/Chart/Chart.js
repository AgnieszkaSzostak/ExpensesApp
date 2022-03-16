import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = props => {
    const valueArray = props.dataPoints.map(dataPoint => dataPoint.value);
    const biggestValue = Math.max(...valueArray);
    console.log(biggestValue);
    
    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => 
                <ChartBar 
                    key={dataPoint.label}
                    label={dataPoint.label} 
                    maxValue={biggestValue} 
                    value={dataPoint.value}
                />
            )}
        </div>
    )
};

export default Chart;