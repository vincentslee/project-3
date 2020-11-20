import React from 'react';
import './App.css';

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: "Date A", lbs: 215,
  },
  {
    name: "Date B", lbs: 217,
  },
  {
    name: "Date C", lbs: 216,
  },
  {
    name: "Date D", lbs: 220,
  },
  {
    name: "Date E", lbs: 219,
  },
  {
    name: "Date F", lbs: 220,
  },
  {
    name: "Date G", lbs: 221,
  },
];

function App() {
  return (
    <div className="App">
      <h1>Weight Chart</h1>
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
        <Line type="monotone" dataKey="lbs" stroke="#8884d8" activeDot={{ r: 8 }} />
        
      </LineChart>
    </div>
  );
}

export default App;
