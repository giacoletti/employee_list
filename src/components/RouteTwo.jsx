import React from 'react';
import { useSearchParams } from "react-router-dom";

const RouteTwo = () => {

  const [searchParams] = useSearchParams();

  const userName = searchParams.get('userName');

  return (
    <div>
      This is route TWO
      Hello {userName}
    </div>
  );
};

export default RouteTwo;
