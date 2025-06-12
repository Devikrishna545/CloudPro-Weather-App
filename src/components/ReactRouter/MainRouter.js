import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";

const MainRouter = () => {
  return (
    <div>
          <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>

    </div>
  
  );
};

export default MainRouter;
