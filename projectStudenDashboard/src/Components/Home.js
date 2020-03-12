import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryStack } from 'victory';
import studentdata from './StudentData';

const StudentData = [
  {quarter: 1, earnings: 1, over: 3},
  {quarter: 2, earnings: 3, over: 2},
  {quarter: 3, earnings: 4, over: 1},
  {quarter: 4, earnings: 5, over: 3},
  {quarter: 5, earnings: 2, over: 5}
];

const Home = () => (
  <div>
    <h1>Home</h1>
    <h3>hier moet een staafdiagram komen, die voor elke opdracht de gemiddelde score weergeeft van alle studenten voor hoe leuk en hoe moeilijk het was</h3>
    <VictoryChart domainPadding={20}> 
    <VictoryAxis 
      tickValues={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4", "Quarter 5"]}/>
    <VictoryAxis 
      dependentAxis />
      <VictoryStack>
    <VictoryBar
      data={StudentData}
      x={"quarter"}
      y={"earnings"}
    />
    <VictoryBar
      data={StudentData}
      x={"quarter"}
      y={"over"}
    />
    </VictoryStack>
    </VictoryChart>
  </div>
);

export default Home;