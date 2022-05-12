import { A, Container, MainDiv } from "../styled-components/Footer";

const Footer = () => {
  return (
    <MainDiv>
      <Container>
        Challenge by &nbsp
        <A href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </A>
        . Coded by &nbsp <A href="https://github.com/Gauthier-Lhomme/advice-generator" target="_blank">Gauthier Lhomme</A>.
      </Container>
    </MainDiv>
  );
};

export default Footer;
