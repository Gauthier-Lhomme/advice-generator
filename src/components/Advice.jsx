import React, { useState, useEffect } from "react";
import mobileDivider from "../images/pattern-divider-mobile.svg";
import desktopDivider from "../images/pattern-divider-desktop.svg";

import {
  Animation,
  Button,
  DivAdvice,
  DivLoading,
  H2,
  Img,
  ImgDesktop,
  MainDiv,
  P,
} from "../styled-components/Advice";
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
        <DivLoading> Loading</DivLoading>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <DivAdvice>
          <Animation>
            <H2>Advice #{advice?.id}</H2>
            <P>"{advice?.advice}"</P>
          </Animation>{" "}
        </DivAdvice>
      )}
      <Img src={mobileDivider} alt="" />
      <ImgDesktop src={desktopDivider} alt="" />
      <Button onClick={fetchData}></Button>
    </MainDiv>
  );
};

export default App;
