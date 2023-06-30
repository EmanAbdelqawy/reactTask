import './App.css';
import Banner from "./components/Banner/Banner";
import Skills from "./components/Skills/Skills"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Banner  id="home"/>
       <Skills  id="skills"/>
      <Projects   id="projects" />
       <Contact/> 
       <Footer/> 
      </div>
  );
}

export default App;
