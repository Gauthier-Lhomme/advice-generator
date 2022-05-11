import styled from "styled-components";
import dice from "../images/icon-dice.svg"

export const MainDiv = styled.div`
display: flex ;
flex-direction: column ;
width: 90vw ;
margin: 0 auto ;
background-color:hsl(217, 19%, 24%) ;
border-radius: 25px;
`

export const DivAdvice = styled.div`
text-align: center ;
`

export const Button = styled.button`
border-radius: 45px ;
background-color: #5ff75f ;
width: 30vw ;
margin: 0 auto ;
background-image: url(${dice})  ;
background-repeat: no-repeat;
background-position: center;
width: 7vh ;
height: 7vh ;
border-style: none ;
cursor: pointer;
`