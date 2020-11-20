import React from 'react';
import './App.css';

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: "Date A", sys: 120, dia: 80,
  },
  {
    name: "Date B", sys: 130, dia: 90,
  },
  {
    name: "Date C", sys: 140, dia: 100,
  },
  {
    name: "Date D", sys: 128, dia: 75,
  },
  {
    name: "Date E", sys: 132, dia: 89,
  },
  {
    name: "Date F", sys: 155, dia: 68,
  },
  {
    name: "Date G", sys: 143, dia: 82,
  },
];

function App() {
  return (
    <div className="App">
      <h1>Blood Pressure Chart</h1>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="sys" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="dia" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
}

export default App;
