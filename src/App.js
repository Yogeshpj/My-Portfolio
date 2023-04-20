import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import Nvaing from "./Nvaing";
import Footer from "./Footer";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Nvaing/>
      <Toggle />
      <div id="home"><Intro/></div>
      <div id="about"><About/></div>
      <div id="projects"><ProductList/></div>
      <div id="contact"><Contact/></div>
      <Footer/>
    </div>
  );
};

export default App;


      // <Routes>
      //   <Route path='/' element={<Intro />}></Route>
      //   <Route path='home' element={ <Intro/>}></Route>
      //   <Route path='about' element={ <About />}></Route>
      //   <Route path='projects' element ={<ProductList />} ></Route>
      //   <Route path='contact' element={<Contact />}></Route>
      // </Router>
      // </Routes>