import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Projects from "./Components/Projects/Projects";
import Resume from "./Components/Resume/Resume";



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <About/>
      <Resume/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
