import Advice from "./components/Advice";
import Footer from "./components/Footer";


const App = () => {
  return (
    <div style={{minHeight: "100vh", display: "flex"}}>
      <Advice/>
      <Footer/>
    </div>
  );
}

export default App;
