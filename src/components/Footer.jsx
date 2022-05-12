import { A, MainDiv } from "../styled-components/Footer";

const Footer = () => {
  return (
    <MainDiv>
      Challenge by{" "}
      <A href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </A>
      . Coded by <a href="#">Your Name Here</a>.
    </MainDiv>
  );
};

export default Footer;