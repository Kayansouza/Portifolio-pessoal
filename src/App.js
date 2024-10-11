import './App.css';
import { NavBar } from './Assets/components/NavBar';
import { Banner } from './Assets/components/Banner';
import { Skills } from './Assets/components/Skills';
import { Projects } from './Assets/components/Projects';
import { Contact } from './Assets/components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './Assets/components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
