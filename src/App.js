import NavBar from './components/NavBar';
import './App.css';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Skillsi } from './components/Skillsi';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Skill} from './components/Skill';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
