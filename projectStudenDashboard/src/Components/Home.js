import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLegend, VictoryGroup } from 'victory';

const StudentDataWeek1 = [
  {
    'Name': 'Evelyn',
    'asignment': 'SCRUM',
    'funRated': '4',
    'dificulty': '3'
  },
  {
    'Name': 'Evelyn',
    'asignment': 'W1D1-1',
    'funRated': '3',
    'dificulty': '3'
  },
  {
    'Name': 'Evelyn',
    'asignment': 'W1D2-1',
    'funRated': '3',
    'dificulty': '1'
  },
  {
    'Name': 'Evelyn',
    'asignment': 'W1D2-2',
    'funRated': '4',
    'dificulty': '1'
  },
  {
    'Name': 'Evelyn',
    'asignment': 'W1D2-3',
    'funRated': '3',
    'dificulty': '2'
  },
  {
    'Name': 'Evelyn',
    'asignment': 'W1D2-4',
    'funRated': '4',
    'dificulty': '3'
  },
  {
    'Name': 'Evelyn',
    'asignment': 'W1D2-5',
    'funRated': '4',
    'dificulty': '3'
  },
  {
    'Name': 'Evelyn',
    'asignment': 'W1D3-1',
    'funRated': '4',
    'dificulty': '3'
  },
  {
    'Name': 'Evelyn',
    'asignment': 'W1D3-2',
    'funRated': '4',
    'dificulty': '3'
  },
  {
    'Name': 'Evelyn',
    'asignment': 'W1D3-4',
    'funRated': '4',
    'dificulty': '4'
  },
  {
    'Name': 'Evelyn',
    'asignment': 'W1D3-5',
    'funRated': '4',
    'dificulty': '4'
  },
  {
    'Name': 'Evelyn',
    'asignment': 'W1D3 - Project - Guess-the-number',
    'funRated': '5',
    'dificulty': '5'
  },
  {
    'Name': 'Evelyn',
    'asignment': 'W1D4-1',
    'funRated': '5',
    'dificulty': '4'
  },
  {
    'Name': 'Evelyn',
    'asignment': 'W1D4 - Project - Kleurentoggle',
    'funRated': '4',
    'dificulty': '3'
  },
  {
    'Name': 'Evelyn',
    'asignment': 'W1D5 - Project - Galgje',
    'funRated': '3',
    'dificulty': '3'
  }
];

const StudentDataWeek2 = [
  {
    'Name': 'Evelyn',
    'asignment': 'W2D1-1',
    'funRated': '5',
    'dificulty': '1'
  },
  {
    'Name': 'Evelyn',
    'asignment': 'W2D1-2',
    'funRated': '5',
    'dificulty': '2'
  },
  {
    'Name': 'Evelyn',
    'asignment': 'W2D2-1',
    'funRated': '4',
    'dificulty': '3'
  },
  {
    'Name': 'Evelyn',
    'asignment': 'W2D2-2',
    'funRated': '4',
    'dificulty': '3'
  },
  {
    'Name': 'Evelyn',
    'asignment': 'W2D2-3',
    'funRated': '4',
    'dificulty': '3'
  },
  {
    'Name': 'Evelyn',
    'asignment': 'W2D3-1',
    'funRated': '4',
    'dificulty': '4'
  },
  {
    'Name': 'Evelyn',
    'asignment': 'W2D3-2',
    'funRated': '3',
    'dificulty': '1'
  },
  {
    'Name': 'Evelyn',
    'asignment': 'W2D3-3',
    'funRated': '4',
    'dificulty': '4'
  },
  {
    'Name': 'Evelyn',
    'asignment': 'W2D4-1',
    'funRated': '3',
    'dificulty': '1'
  },
  {
    'Name': 'Evelyn',
    'asignment': 'W2D4-2',
    'funRated': '4',
    'dificulty': '4'
  },
  {
    'Name': 'Evelyn',
    'asignment': 'W2D4-3',
    'funRated': '3',
    'dificulty': '1'
  },
  {
    'Name': 'Evelyn',
    'asignment': 'W2D5 - Project - Filmzoeker',
    'funRated': '4',
    'dificulty': '3'
  },
];

const StudentDataWeek3 = [
  {
    'Name': 'Evelyn',
    'asignment': 'W3D1-1',
    'funRated': '4',
    'dificulty': '3'
  },
  {
    'Name': 'Evelyn',
    'asignment': 'W3D1-2',
    'funRated': '4',
    'dificulty': '2'
  },
  {
    'Name': 'Evelyn',
    'asignment': 'W3D1-3',
    'funRated': '4',
    'dificulty': '3'
  },
  {
    'Name': 'Evelyn',
    'asignment': 'W3D1-4',
    'funRated': '3',
    'dificulty': '3'
  },
  {
    'Name': 'Evelyn',
    'asignment': 'W3D2-1',
    'funRated': '4',
    'dificulty': '2'
  },
  {
    'Name': 'Evelyn',
    'asignment': 'W3D2-2',
    'funRated': '3',
    'dificulty': '3'
  },
  {
    'Name': 'Evelyn',
    'asignment': 'W3D2-3',
    'funRated': '5',
    'dificulty': '3'
  },
  {
    'Name': 'Evelyn',
    'asignment': 'W3D3-1',
    'funRated': '3',
    'dificulty': '3'
  },
  {
    'Name': 'Evelyn',
    'asignment': 'W3D3-2',
    'funRated': '5',
    'dificulty': '4'
  },
  {
    'Name': 'Evelyn',
    'asignment': 'W3D3-3',
    'funRated': '5',
    'dificulty': '3'
  },
  {
    'Name': 'Evelyn',
    'asignment': 'W3D3-4',
    'funRated': '5',
    'dificulty': '4'
  },
  {
    'Name': 'Evelyn',
    'asignment': 'W3D4-1',
    'funRated': '5',
    'dificulty': '5'
  },
  {
    'Name': 'Evelyn',
    'asignment': 'W3D4-2',
    'funRated': '5',
    'dificulty': '1'
  },
  {
    'Name': 'Evelyn',
    'asignment': 'W3D5 - Project - Todo-List',
    'funRated': '5',
    'dificulty': '2'
  },
];

const StudentDataWeek456 = [
  {
    'Name': 'Evelyn',
    'asignment': 'W4D2-1',
    'funRated': '5',
    'dificulty': '1'
  },
  {
    'Name': 'Evelyn',
    'asignment': 'W4D2-2',
    'funRated': '5',
    'dificulty': '1'
  },
  {
    'Name': 'Evelyn',
    'asignment': 'W4D2-3',
    'funRated': '5',
    'dificulty': '1'
  },
  {
    'Name': 'Evelyn',
    'asignment': 'W4D2-4',
    'funRated': '5',
    'dificulty': '1'
  },
  {
    'Name': 'Evelyn',
    'asignment': 'W4D3-1',
    'funRated': '5',
    'dificulty': '1'
  },
  {
    'Name': 'Evelyn',
    'asignment': 'W4D3-2',
    'funRated': '5',
    'dificulty': '1'
  },
  {
    'Name': 'Evelyn',
    'asignment': 'W4D3-3',
    'funRated': '5',
    'dificulty': '1'
  },
  {
    'Name': 'Evelyn',
    'asignment': 'W4D3-4',
    'funRated': '5',
    'dificulty': '1'
  },
  {
    'Name': 'Evelyn',
    'asignment': 'W4D3-5',
    'funRated': '5',
    'dificulty': '1'
  },
  {
    'Name': 'Evelyn',
    'asignment': 'W4D3 - Project - Next-Level CSS',
    'funRated': '5',
    'dificulty': '1'
  },
  {
    'Name': 'Evelyn',
    'asignment': 'W5D4-1',
    'funRated': '4',
    'dificulty': '3'
  },
  {
    'Name': 'Evelyn',
    'asignment': 'W5D5 - Project - Lil_Playlist',
    'funRated': '3',
    'dificulty': '4'
  },
  {
    'Name': 'Evelyn',
    'asignment': 'W6D1-1',
    'funRated': '5',
    'dificulty': '5'
  },
  {
    'Name': 'Evelyn',
    'asignment': 'W6D2-1',
    'funRated': '3',
    'dificulty': '4'
  },
  {
    'Name': 'Evelyn',
    'asignment': 'W6D2 - Project - Eindopdracht',
    'funRated': '5',
    'dificulty': '5'
  },
];

const Home = () => (
  <div>
    <h1>Home</h1>
    <h2>Studenten score per week</h2>
    <VictoryChart width={600} animate={{ duration: 1000 }}>
    <VictoryLegend 
      x={75} 
      y={0}
      title="Week 1"
      style={{title: {fill: 'white'}}}
      orientation="horizontal"
      colorScale={"blue"}
      data={[
        {name: 'fun', labels: {fill: 'white', fontSize: 10}},
        {name: 'dificulty', labels: {fill: 'white', fontSize: 10}}
      ]}
    />
    <VictoryAxis 
      style={{tickLabels: {angle: 45, fontSize: 5, fill: 'white'}}}
      tickValues={["SCRUM", "W1D1-1", "W1D2-1", "W1D2-2", "W1D2-3", 'W1D2-4', 'W1D2-5', 'W1D3-1', 'W1D3-2', 'W1D3-4', 'W1D3-5', 'W1D3 - Project - Guess-the-number', 'W1D4-1', 'W1D4 - Project - Kleurentoggle', 'W1D5 - Project - Galgje']}
    />
    <VictoryAxis 
      dependentAxis
      style={{tickLabels: {fontSize: 10, fill: 'white'}}}
      tickFormat={['1', '2', '3', '4', '5']}
    />
    <VictoryGroup offset={12} colorScale={"blue"} style={{data: {width: 10}}}>
    <VictoryBar
      data={StudentDataWeek1}
      x={"asignment"}
      y={"funRated"}
    />
    <VictoryBar
      data={StudentDataWeek1}
      x={"asignment"}
      y={"dificulty"}
    />
    </VictoryGroup>
    </VictoryChart>

    <br />

    <VictoryChart width={600} animate={{ duration: 1000 }}>
    <VictoryLegend 
      x={75} 
      y={0}
      title="Week 2"
      style={{title: {fill: 'white'}}}
      orientation="horizontal"
      colorScale={"blue"}
      data={[
        {name: 'fun', labels: {fill: 'white', fontSize: 10}},
        {name: 'dificulty', labels: {fill: 'white', fontSize: 10}}
      ]}
    />
    <VictoryAxis 
      style={{tickLabels: {angle: 45, fontSize: 5, fill: 'white'}}}
      tickValues={['W2D1-1', 'W2D1-2', 'W2D2-1', 'W2D2-2', 'W2D2-3', 'W2D3-1', 'W2D3-2', 'W2D3-3', 'W2D4-1', 'W2D4-2', 'W2D4-3', 'W2D5 - Project - Filmzoeker']}
    />
    <VictoryAxis 
      dependentAxis
      style={{tickLabels: {fontSize: 10, fill: 'white'}}}
      tickFormat={['1', '2', '3', '4', '5']}
    />
    <VictoryGroup offset={12} colorScale={"blue"} style={{data: {width: 10}}}>
    <VictoryBar
      data={StudentDataWeek2}
      x={"asignment"}
      y={"funRated"}
    />
    <VictoryBar
      data={StudentDataWeek2}
      x={"asignment"}
      y={"dificulty"}
    />
    </VictoryGroup>
    </VictoryChart>

    <br />

    <VictoryChart width={600} animate={{ duration: 1000 }}>
    <VictoryLegend 
      x={75} 
      y={0}
      title="Week 3"
      style={{title: {fill: 'white'}}}
      orientation="horizontal"
      colorScale={"blue"}
      data={[
        {name: 'fun', labels: {fill: 'white', fontSize: 10}},
        {name: 'dificulty', labels: {fill: 'white', fontSize: 10}}
      ]}
    />
    <VictoryAxis 
      style={{tickLabels: {angle: 45, fontSize: 5, fill: 'white'}}}
      tickValues={['W3D1-1', 'W3D1-2', 'W3D1-3', 'W3D1-4', 'W3D2-1', 'W3D2-2', 'W3D2-3', 'W3D3-1', 'W3D3-2', 'W3D3-3', 'W3D3-4', 'W3D4-1', 'W3D4-2', 'W3D5 - Project - Todo-List'
      //'W4D2-1', 'W4D2-2', 'W4D2-3', 'W4D2-4', 'W4D3-1', 'W4D3-2', 'W4D3-3', 'W4D3-4', 'W4D3-5', 'W4D3 - Project - Next-Level CSS', 'W5D4-1', 'W5D5 - Project - Lil_Playlist', 'W6D1-1', 'W6D2-1', 'W6D2 - Project - Eindopdracht'
    ]}
    />
    <VictoryAxis 
      dependentAxis
      style={{tickLabels: {fontSize: 10, fill: 'white'}}}
      tickFormat={['1', '2', '3', '4', '5']}
    />
    <VictoryGroup offset={12} colorScale={"blue"} style={{data: {width: 10}}}>
    <VictoryBar
      data={StudentDataWeek3}
      x={"asignment"}
      y={"funRated"}
    />
    <VictoryBar
      data={StudentDataWeek3}
      x={"asignment"}
      y={"dificulty"}
    />
    </VictoryGroup>
    </VictoryChart>

    <br />

    <VictoryChart width={600} animate={{ duration: 1000 }}>
    <VictoryLegend 
      x={75} 
      y={0}
      title="Week 4, 5, 6"
      style={{title: {fill: 'white'}}}
      orientation="horizontal"
      colorScale={"blue"}
      data={[
        {name: 'fun', labels: {fill: 'white', fontSize: 10}},
        {name: 'dificulty', labels: {fill: 'white', fontSize: 10}}
      ]}
    />
    <VictoryAxis 
      style={{tickLabels: {angle: 45, fontSize: 5, fill: 'white'}}}
      tickValues={['W4D2-1', 'W4D2-2', 'W4D2-3', 'W4D2-4', 'W4D3-1', 'W4D3-2', 'W4D3-3', 'W4D3-4', 'W4D3-5', 'W4D3 - Project - Next-Level CSS', 'W5D4-1', 'W5D5 - Project - Lil_Playlist', 'W6D1-1', 'W6D2-1', 'W6D2 - Project - Eindopdracht'
    ]}
    />
    <VictoryAxis 
      dependentAxis
      style={{tickLabels: {fontSize: 10, fill: 'white'}}}
      tickFormat={['1', '2', '3', '4', '5']}
    />
    <VictoryGroup offset={12} colorScale={"blue"} style={{data: {width: 10}}}>
    <VictoryBar
      data={StudentDataWeek456}
      x={"asignment"}
      y={"funRated"}
    />
    <VictoryBar
      data={StudentDataWeek456}
      x={"asignment"}
      y={"dificulty"}
    />
    </VictoryGroup>
    </VictoryChart>
  </div>
);

export default Home;