
// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-sky-100 via-blue-200 to-purple-200 font-sans">
      <Navbar />
      <main className="flex-grow px-6 py-4">
        <Dashboard />
      </main>
      <Footer />
    </div>
  );
}

export default App;