import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

function PredictionChart({ demand }) {
  const data = [
    { name: "Today", demand: demand || 100 },
    { name: "+1 Day", demand: demand ? demand + 20 : 120 },
    { name: "+2 Day", demand: demand ? demand - 10 : 90 },
  ];

  return (
    <div>
      <h3 className="text-md font-semibold mb-3 text-indigo-700">📈 Demand Forecast</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="demand" fill="#6366f1" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PredictionChart;
