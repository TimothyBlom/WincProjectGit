import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLegend, VictoryGroup } from 'victory';
import StudentData from './StudentData'

const week1Filter = StudentData.filter((item) => {
  return item.Asignment.includes('W1D')
})

const week2Filter = StudentData.filter((item) => {
  return item.Asignment.includes('W2D')
})

const week3Filter = StudentData.filter((item) => {
  return item.Asignment.includes('W3D')
})

const week456Filter = StudentData.filter((item) => {
  return item.Asignment.includes('W4D') || item.Asignment.includes('W5D') || item.Asignment.includes('W6D')
})

const Home = () => (
  <div>
    <h1>Home</h1>
    <h2>Studenten score per week</h2>
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
      <VictoryGroup offset={12} colorScale={"blue"} style={{data: {width: 10}}}>
      <VictoryBar
        data={week1Filter}
        x={"Asignment"}
        y={"Fun"}
      />
      <VictoryBar
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
      <VictoryGroup offset={12} colorScale={"blue"} style={{data: {width: 10}}}>
      <VictoryBar
        data={week2Filter}
        x={"Asignment"}
        y={"Fun"}
      />
      <VictoryBar
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
      <VictoryGroup offset={12} colorScale={"blue"} style={{data: {width: 10}}}>
      <VictoryBar
        data={week3Filter}
        x={"Asignment"}
        y={"Fun"}
      />
      <VictoryBar
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
      <VictoryGroup offset={12} colorScale={"blue"} style={{data: {width: 10}}}>
      <VictoryBar
        data={week456Filter}
        x={"Asignment"}
        y={"Fun"}
      />
      <VictoryBar
        data={week456Filter}
        x={"Asignment"}
        y={"Dificulty"}
      />
      </VictoryGroup>
      </VictoryChart>
    </div>
  </div>
);

export default Home;