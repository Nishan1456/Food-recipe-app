import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import Settings from "./pages/Settings";


function App() {
  return (
  
   <Router>
     <Navbar/>
    <div className="container main">
 <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/recipes" element={<Recipe/>}/>
  <Route path="/settings" element={<Settings/>}/>
 </Routes>
    </div>
    <Footer/>
   </Router>

  );
}

export default App;
