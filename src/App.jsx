import "./App.css";

import Navbar from "./assets/component/Navbar";
import Hero from "./assets/component/hero";
import About from "./assets/component/About";
import Skills from "./assets/component/Skills";
import Project from "./assets/component/Project";
import Contact from "./assets/component/Contact";
import Footer from "./assets/component/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
