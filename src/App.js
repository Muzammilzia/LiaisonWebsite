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
          <Route path='/TechMarketingSolutions' exact element={ <Home /> } />
          <Route path='/TechMarketingSolutions/about' element={ <About /> } />
          <Route path='/TechMarketingSolutions/services' element={ <Services /> } />
          <Route path='/TechMarketingSolutions/support' element={ <Support /> } />
        </Routes>
      </Router>
  );
}

export default App;
