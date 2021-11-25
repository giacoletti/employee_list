import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import RouteOne from "./components/RouteOne";
import RouteTwo from "./components/RouteTwo";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="one/:name" element={<RouteOne />} />
        <Route path="one" element={<RouteOne />} />
        <Route path="two" element={<RouteTwo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
