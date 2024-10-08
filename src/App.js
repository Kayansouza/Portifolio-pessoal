/*import logo from "./Assets/img/logo.png";*/
import './App.css';
import { NavBar } from './Assets/components/NavBar';
import {Banner} from './Assets/components/Banner';
import{Skills} from './Assets/components/Skills'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <NavBar />
     <Banner />
    </div>
  );
}

export default App;
