import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import InitialScreen from "../components/InitialScreen/InitialScreen";
import FinalScreen from "../components/FinalScreen/FinalScreen";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InitialScreen />} />
        <Route path="/result" element={<FinalScreen />}/>
      </Routes>
    </Router>
  );
};

export default AppRoutes;