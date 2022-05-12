import Advice from "./components/Advice";
import Footer from "./components/Footer";
import { MaindDiv } from "./styled-components/App";


const App = () => {
  return (
    <MaindDiv>
      <Advice/>
      <Footer/>
    </MaindDiv>
  );
}

export default App;
