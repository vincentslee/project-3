import React from 'react';
import './App.css';

import {
    PieChart, Pie, Legend, Tooltip,
} from 'recharts';

const data = [
  {
    name: "Protein", servings: 4,
  },
  {
    name: "Fruit", servings: 2,
  },
  {
    name: "Veggies", servings: 3,
  },
  {
    name: "Dairy", servings: 5,
  },
  {
    name: "Grains", servings: 6,
  },
  {
    name: "Nuts", servings: 1,
  },
  {
    name: "Fats", servings: 2,
  },
];

function App() {
  return (
    <div className="App">
      <h1>Daily Nutrition Chart</h1>
      <PieChart width={400} height={400}>
        <Pie dataKey="servings" isAnimationActive={false} data={data} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
        
        <Tooltip />
      </PieChart>
    </div>
  );
}

export default App;
