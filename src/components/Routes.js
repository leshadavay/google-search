import React from "react";
import { Results } from "./Results";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function RoutesComponent() {
  return (
    <div className="p-4">
      <Routes>
        <Route exact path="/" element={<Navigate to="/search" />} />
        <Route path="/search" element={<Results />} />
        <Route path="/images" element={<Results />} />
        <Route path="/news" element={<Results />} />
        <Route path="/videos" element={<Results />} />
      </Routes>
    </div>
  );
}

export default RoutesComponent;
