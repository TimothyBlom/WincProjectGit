import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryStack, VictoryGroup } from 'victory';
import StudentData from './StudentData';

const data = [
  {quarter: 1, earnings: 4, over: 3},
  {quarter: 2, earnings: 3, over: 2},
  {quarter: 3, earnings: 4, over: 1},
  {quarter: 4, earnings: 5, over: 3},
  {quarter: 5, earnings: 2, over: 5}
];

const Home = () => (
  <div>
    <h1>Home</h1>
    <h2>Studenten score</h2>
    {/* <StudentData /> */}
    <VictoryChart>
    <VictoryAxis 
      style={{ tickLabels: { angle: 45 } }}
      tickValues={["SCRUM", "W1D1-1", "W1D2-1", "W1D2-2", "W1D2-3", 'W1D2-4', 'W1D2-5', 'W1D3-1', 'W1D3-2', 'W1D3-4', 'W1D3-5', 'W1D3 - Project - Guess-the-number', 'W1D4-1', 'W1D4 - Project - Kleurentoggle', 'W1D5 - Project - Galgje', 'W2D1-1', 'W2D1-2', 'W2D2-1', 'W2D2-2', 'W2D2-3', 'W2D3-1', 'W2D3-2', 'W2D3-3', 'W2D4-1', 'W2D4-2', 'W2D4-3', 'W2D5 - Project - Filmzoeker', 'W3D1-1', 'W3D1-2', 'W3D1-3', 'W3D1-4', 'W3D2-1', 'W3D2-2', 'W3D2-3', 'W3D3-1', 'W3D3-2', 'W3D3-3', 'W3D3-4', 'W3D4-1', 'W3D4-2', 'W3D5 - Project - Todo-List', 'W4D2-1', 'W4D2-2', 'W4D2-3', 'W4D2-4', 'W4D3-1', 'W4D3-2', 'W4D3-3', 'W4D3-4', 'W4D3-5', 'W4D3 - Project - Next-Level CSS', 'W5D4-1', 'W5D5 - Project - Lil_Playlist', 'W6D1-1', 'W6D2-1', 'W6D2 - Project - Eindopdracht']}
    />
    <VictoryAxis 
      dependentAxis
      tickFormat={['1', '2', '3', '4', '5']}
    />
    <VictoryGroup offset={20} colorScale={"qualitative"}>
    <VictoryBar
      data={data}
      x={"quarter"}
      y={"earnings"}
    />
    <VictoryBar
      data={data}
      x={"quarter"}
      y={"over"}
    />
    </VictoryGroup>
    </VictoryChart>

  </div>
);

export default Home;