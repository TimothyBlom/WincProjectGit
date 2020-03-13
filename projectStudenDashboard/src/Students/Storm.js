import React from 'react';
import { VictoryChart, VictoryAxis, VictoryLegend, VictoryGroup, VictoryLine } from 'victory';
import StudentData from '../Components/StudentData'

const week1Filter = StudentData.filter((item) => {
  return item.Name.includes('Storm') && item.Asignment.includes('W1D')
})

const week2Filter = StudentData.filter((item) => {
  return item.Name.includes('Storm') && item.Asignment.includes('W2D')
})

const week3Filter = StudentData.filter((item) => {
  return item.Name.includes('Storm') && item.Asignment.includes('W3D')
})

//jep, onderstaande is niet dry
const week456Filter = StudentData.filter((item) => {
  return item.Name.includes('Storm') && item.Asignment.includes('W4D') || item.Name.includes('Storm') && item.Asignment.includes('W5D') || item.Name.includes('Storm') && item.Asignment.includes('W6D')
})

const Storm = () => (
  <div>
    <h1>Storm</h1>
    <div className='chart'>
      <VictoryChart width={600} animate={{ duration: 750 }}>
      <VictoryLegend 
        x={75} 
        y={0}
        title="Week 1"
        style={{title: {fill: 'white'}}}
        orientation="horizontal"
        colorScale={"blue"}
        data={[
          {name: 'Fun', labels: {fill: 'white', fontSize: 10}},
          {name: 'Dificulty', labels: {fill: 'white', fontSize: 10}}
        ]}
      />
      <VictoryAxis 
        style={{tickLabels: {angle: 45, fontSize: 5, fill: 'white'}}}
      />
      <VictoryAxis 
        dependentAxis
        style={{tickLabels: {fontSize: 10, fill: 'white'}}}
        tickFormat={['1', '2', '3', '4', '5']}
      />
      <VictoryGroup colorScale={"blue"} style={{data: {width: 10}}}>
      <VictoryLine
        data={week1Filter}
        x={"Asignment"}
        y={"Fun"}
      />
      <VictoryLine
        data={week1Filter}
        x={"Asignment"}
        y={"Dificulty"}
      />
      </VictoryGroup>
      </VictoryChart>
    </div>

    <div className='chart'>
      <VictoryChart width={600} animate={{ duration: 750 }}>
      <VictoryLegend 
        x={75} 
        y={0}
        title="Week 2"
        style={{title: {fill: 'white'}}}
        orientation="horizontal"
        colorScale={"blue"}
        data={[
          {name: 'Fun', labels: {fill: 'white', fontSize: 10}},
          {name: 'Dificulty', labels: {fill: 'white', fontSize: 10}}
        ]}
      />
      <VictoryAxis 
        style={{tickLabels: {angle: 45, fontSize: 5, fill: 'white'}}}
      />
      <VictoryAxis 
        dependentAxis
        style={{tickLabels: {fontSize: 10, fill: 'white'}}}
        tickFormat={['1', '2', '3', '4', '5']}
      />
      <VictoryGroup colorScale={"blue"} style={{data: {width: 10}}}>
      <VictoryLine
        data={week2Filter}
        x={"Asignment"}
        y={"Fun"}
      />
      <VictoryLine
        data={week2Filter}
        x={"Asignment"}
        y={"Dificulty"}
      />
      </VictoryGroup>
      </VictoryChart>
    </div>

    <div className='chart'>
      <VictoryChart width={600} animate={{ duration: 750 }}>
      <VictoryLegend 
        x={75} 
        y={0}
        title="Week 3"
        style={{title: {fill: 'white'}}}
        orientation="horizontal"
        colorScale={"blue"}
        data={[
          {name: 'Fun', labels: {fill: 'white', fontSize: 10}},
          {name: 'Dificulty', labels: {fill: 'white', fontSize: 10}}
        ]}
      />
      <VictoryAxis 
        style={{tickLabels: {angle: 45, fontSize: 5, fill: 'white'}}}
      />
      <VictoryAxis 
        dependentAxis
        style={{tickLabels: {fontSize: 10, fill: 'white'}}}
        tickFormat={['1', '2', '3', '4', '5']}
      />
      <VictoryGroup colorScale={"blue"} style={{data: {width: 10}}}>
      <VictoryLine
        data={week3Filter}
        x={"Asignment"}
        y={"Fun"}
      />
      <VictoryLine
        data={week3Filter}
        x={"Asignment"}
        y={"Dificulty"}
      />
      </VictoryGroup>
      </VictoryChart>
    </div>

    <div className='chart'>
      <VictoryChart width={600} animate={{ duration: 750 }}>
      <VictoryLegend 
        x={75} 
        y={0}
        title="Week 4, 5, 6"
        style={{title: {fill: 'white'}}}
        orientation="horizontal"
        colorScale={"blue"}
        data={[
          {name: 'Fun', labels: {fill: 'white', fontSize: 10}},
          {name: 'Dificulty', labels: {fill: 'white', fontSize: 10}}
        ]}
      />
      <VictoryAxis 
        style={{tickLabels: {angle: 45, fontSize: 5, fill: 'white'}}}
      />
      <VictoryAxis 
        dependentAxis
        style={{tickLabels: {fontSize: 10, fill: 'white'}}}
        tickFormat={['1', '2', '3', '4', '5']}
      />
      <VictoryGroup colorScale={"blue"} style={{data: {width: 10}}}>
      <VictoryLine
        data={week456Filter}
        x={"Asignment"}
        y={"Fun"}
      />
      <VictoryLine
        data={week456Filter}
        x={"Asignment"}
        y={"Dificulty"}
      />
      </VictoryGroup>
      </VictoryChart>
    </div>
  </div>
);

export default Storm;