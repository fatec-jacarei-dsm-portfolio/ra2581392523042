import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Hero from'./components/Hero';
import Footer from'./components/Footer';
import "./styles/global.scss";

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer/>
      </main>
    </>
  );
}

export default App;
