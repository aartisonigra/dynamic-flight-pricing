import React, { useState } from "react";
import PredictionChart from "./PredictionChart";

function Dashboard() {
  const [flightNumber, setFlightNumber] = useState("");
  const [predictedDemand, setPredictedDemand] = useState(null);
  const [dynamicPrice, setDynamicPrice] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const demand = Math.floor(Math.random() * 200) + 50;
    const price = 2000 + Math.floor(demand * 2);

    setPredictedDemand(demand);
    setDynamicPrice(price);
  };

  return (
    <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block font-semibold text-gray-700 mb-1">Flight Number</label>
          <input
            type="text"
            value={flightNumber}
            onChange={(e) => setFlightNumber(e.target.value)}
            placeholder="e.g., AI-2024"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Predict & Generate Price
        </button>

        {predictedDemand !== null && (
          <div className="pt-4 space-y-2">
            <h3 className="text-lg font-bold text-gray-800">Results:</h3>
            <p>📊 Predicted Demand: <strong>{predictedDemand}</strong></p>
            <p>💸 Dynamic Price: <strong>₹{dynamicPrice}</strong></p>
          </div>
        )}
      </form>

      <div className="bg-indigo-50 p-4 rounded-xl border">
        <PredictionChart demand={predictedDemand} />
      </div>
    </div>
  );
}

export default Dashboard;
