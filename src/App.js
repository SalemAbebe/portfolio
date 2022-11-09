import "./App.scss";
import About from "./components/Main/About/About";
// import Footer from "./components/footer/Footer";

import Contact from "./components/Main/Contact/Contact";
import Hero from "./components/Main/Hero/Hero";
import Projects from "./components/Main/Projects/Projects";
import Navbar from "./components/Header/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
