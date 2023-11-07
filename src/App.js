import './App.css';
import Volunteer from './components/Volunteer'
import Education from './components/Education';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Skills from './components/Skills';
import Work from './components/Work';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Work />
      <Skills />
      <Volunteer />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
