import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import About from "./components/About";
import Coding from "./components/coding";
import LoadingPage from "./components/LoadingPage";
import Contact from "./components/Contact";
import Work from "./components/Work";
import { useState, useEffect } from "react";
import Copyright from "./components/Copyright";
import {BrowserRouter ,Routes,Route} from 'react-router-dom';
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <LoadingPage load={loading} />
      ) : (
        <div>
        <BrowserRouter>
          <Navbar />
          <Home />
          <About />
          <Coding />
          <Work />
          <Contact />
          <Copyright />
          </BrowserRouter>
        </div>
      )}
    </div>
  );
}

export default App;
