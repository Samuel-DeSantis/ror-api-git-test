import { Link } from 'react-router-dom'
import './App.css'
import About from './components/content/About';
import Contact from './components/Contact';
import Links from './components/navbar/Links';
import Experience from './components/content/Experience';

function App() {
  return (
    <div className="App">
      <main>
        <Links />
        <About />
        <Contact />
        <Experience />
      </main>
    </div>
  );
}

export default App;