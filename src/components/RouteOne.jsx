import React from "react";
import { useParams } from "react-router-dom";

const RouteOne = () => {

  let { name } = useParams();

  return (
    <div>
      This is route ONE
      Hello {name}
    </div>
  );
};

export default RouteOne;
