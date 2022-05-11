import React, { useState, useEffect } from "react";
import mobileDivider from "../images/pattern-divider-mobile.svg";
import { Button, DivAdvice, MainDiv } from "../styled-components/Advice";
import { getRandomAdvice } from "../api/advice.api";

const App = () => {
  const [advice, setAdvice] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async () => {
    setIsLoading(true);
    const data = await getRandomAdvice();
    if (data?.name === "AxiosError") {
      setError(data.message);
      setIsLoading(false);
      return false;
    }
    setAdvice(data.slip);
    setIsLoading(false);
  };

  useEffect(() => {
    setError("");
    fetchData();
  }, []);
  
  return (
    <MainDiv>
      {isLoading ? (
        <div><img src="https://i.stack.imgur.com/ATB3o.gif" alt="" /> Loading</div>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <DivAdvice>
          <h2>Advice #{advice?.id}</h2>
          <p>{advice?.advice}</p>
        </DivAdvice>
      )}
      <img src={mobileDivider} alt="" />
      <Button onClick={fetchData}></Button>
    </MainDiv>
  );
};

export default App;
