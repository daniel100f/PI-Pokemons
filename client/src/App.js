import './App.css';
import DetailPage from "./components/DetailPage"
import FormPage from "./components/FormPage"
import HomePage from "./components/HomePage"
import LandingPage from "./components/LandingPage"
import {Routes,Route,useLocation} from "react-router-dom";
import Nav from './components/Nav';
function App() {
  const location= useLocation()
  return (
    <div className="App">
      
      {location.pathname!=="/"&& <Nav />}
      
      <Routes>
       <Route  path="/" element={<LandingPage />} />
       <Route path="/HomePage" element={<HomePage />} />
       <Route path="/FormPage" element={<FormPage />} />
       <Route path="/DetailPage" element={<DetailPage />} />



      </Routes>
    </div>
  );
}

export default App;
