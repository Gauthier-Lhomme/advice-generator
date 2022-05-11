import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://api.adviceslip.com/advice";

const App = () => {
  const [advice, setAdvice] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const { data } = await axios.get(API_URL);
    console.log(data);
    setAdvice(data.slip);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading... </p>
      ) : (
        <div>
          <h2>{advice.id}</h2> 
          <p>{advice.advice}</p> 
        </div>
      )}
      <button>New advice</button>
    </div>
  );
};

export default App;
