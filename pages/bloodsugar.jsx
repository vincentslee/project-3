import React from 'react';
import './App.css';

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: "Date A", mg_dl: 70,
  },
  {
    name: "Date B", mg_dl: 72,
  },
  {
    name: "Date C", mg_dl: 108,
  },
  {
    name: "Date D", mg_dl: 118,
  },
  {
    name: "Date E", mg_dl: 120,
  },
  {
    name: "Date F", mg_dl: 128,
  },
  {
    name: "Date G", mg_dl: 143,
  },
];

function App() {
  return (
    <div className="App">
      <h1>Blood Sugar Chart</h1>
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
        <Line type="monotone" dataKey="mg_dl" stroke="#8884d8" activeDot={{ r: 8 }} />
        
      </LineChart>
    </div>
  );
}

export default App;
