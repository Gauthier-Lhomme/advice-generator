import styled from "styled-components";
import dice from "../images/icon-dice.svg";
import { Device } from "../asset/device";

export const MainDiv = styled.div`
  @media ${Device.mobile} {
    display: flex;
    flex-direction: column;
    width: 90vw;
    height: 40vh;
    margin: 0 auto;
    background-color: hsl(217, 19%, 24%);
    border-radius: 25px;
    margin-top: 28vh;
  }
`;

export const DivAdvice = styled.div`
  @media ${Device.mobile} {
    text-align: center;
  }
`;

export const Button = styled.button`
  @media ${Device.mobile} {
    border-radius: 45px;
    background-color: #5ff75f;
    width: 30vw;
    margin: 0 auto;
    background-image: url(${dice});
    background-repeat: no-repeat;
    background-position: center;
    width: 7vh;
    height: 7vh;
    border-style: none;
    display: block;
    position: absolute;
    left: 50%;
    transform: translateY(520%) translateX(-50%);
  }
  cursor: pointer;
`;

export const H2 = styled.h2`
  @media ${Device.mobile} {
    color: #5ff75f;
    font-size: 1rem;
    font-weight: 500;
  }
`;

export const P = styled.p`
  @media ${Device.mobile} {
    color: whitesmoke;
    font-size: 1.5rem;
    padding: 0 1.6vh;
    height: 100%;
  }
`;
export const Img = styled.img`
  @media ${Device.mobile} {
    padding-bottom: 6vh;
  }
`;

export const DivLoading = styled.div`
  @media ${Device.mobile} {
    text-align: center;
    color: whitesmoke;
    font-size: 1.5rem;
    padding-top: 6vh;
  }
`;
