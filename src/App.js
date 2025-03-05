
import './App.css';
import HeroSection from './components/HeroSection';
import ImproveSkills from './components/ImproveSkills';
import Navbar from './components/Navbar';
import QuoteSection from './components/QuoteSection';

function App() {
  return (
  <div className="app">
    <Navbar/>
    <div className="container main">
  <HeroSection/>
  <ImproveSkills/>
  <QuoteSection/>
    </div>
  </div>
  );
}

export default App;
