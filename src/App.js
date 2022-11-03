import "./App.scss";
import About from "./components/main/About/About";
// import Footer from "./components/footer/Footer";

import Contact from "./components/main/Contact/Contact";
import Projects from "./components/main/Projects/Projects";

function App() {
  return (
    <div className="App">
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
