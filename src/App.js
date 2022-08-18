import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from './NavBar';
import './App.css';
import { Home } from './Home';
import { About } from './About';
import { Services } from './Services';
import { Support } from './Support';

function App() {
  return (
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' exact element={ <Home /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/services' element={ <Services /> } />
          <Route path='/support' element={ <Support /> } />
        </Routes>
      </Router>
  );
}

export default App;
