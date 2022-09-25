import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from './components/NavBar';
import './assets/css/App.css';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Support } from './pages/Support';
import Footer from "./components/Footer";

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
        <Footer/>
      </Router>
  );
}

export default App;
