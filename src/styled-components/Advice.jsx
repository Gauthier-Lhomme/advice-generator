import styled from "styled-components";
import dice from "../images/icon-dice.svg";
import dividerDesktop from "../images/pattern-divider-desktop.svg";
import { Device } from "../asset/device";

export const MainDiv = styled.div`
  @media ${Device.mobile} {
    display: flex;
    flex-direction: column;
    width: 90vw;
    height: 40vh;
  }
  background-color: hsl(217, 19%, 24%);
  border-radius: 25px;
  width: 40vw;
  height: 45vh;
  margin: auto;
  border-radius: 25px;
  position: relative;
`;

export const DivAdvice = styled.div`
  text-align: center;
  padding-top: 3vh;
`;

export const Button = styled.button`
  cursor: pointer;
  background: url(${dice}) no-repeat center;
  width: 7vh;
  height: 7vh;
  border-style: none;
  display: block;
  position: absolute;
  bottom: -30px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: #5ff75f;
  border-radius: 45px;
`;

export const H2 = styled.h2`
  color: var(--green);
  padding-bottom: 3vh;
  font-weight: 500;
  font-size: 0.8rem;

  @media ${Device.mobile} {
    font-size: 1rem;
  }
`;

export const P = styled.p`
  color: whitesmoke;
  font-weight: 500;
  font-size: 1.6rem;
  padding: 0 1.6vh;
  padding-bottom: 3vh;

  @media ${Device.mobile} {
    font-size: 1.5rem;
  }
`;

export const Img = styled.img`

  display: block;
  margin: 0px auto;
  padding-left: 2vh ;
    padding-right: 2vh ;
  @media ${Device.mobile} {
    padding-bottom: 6vh;
    width: 100%;
  }
`;

export const DivLoading = styled.div`
  text-align: center;
  color: whitesmoke;
  font-size: 1.5rem;
  padding-top: 6vh;
`;
