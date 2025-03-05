
import './App.css';
import ChefSection from './components/ChefSection';
import Footer from './components/Footer';
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
  <ChefSection/>
    </div>
    <Footer/>
  </div>
  );
}

export default App;
