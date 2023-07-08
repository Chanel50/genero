import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Article } from "./components/Article";
import { Blog } from "./components/Blog";
import Contact from './components/Contact';
import {Apropos} from './components/Apropos';
import { Articlep } from "./components/Articlep";
import { Articlem } from "./components/Articlem";
import { Articles } from "./components/Articles";
import { Articler } from "./components/Articler";
import { Avenir } from "./components/Avenir";
import { Cancer } from "./components/Cancer";
import Login from './components/Login';
import Register from './components/Register';
import  Notfaund  from "./components/Notfaund";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Article" element={<Article />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Apropos" element={<Apropos />} />
            <Route path="/Articlep" element={<Articlep />} />
            <Route path="/Articlem" element={<Articlem />} />
            <Route path="/Articles" element={<Articles />} />
            <Route path="/Articler" element={<Articler />} />
            <Route path="/Avenir" element={<Avenir />} />
            <Route path="/Cancer" element={<Cancer />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Notfaund" element={<Notfaund />} />
          </Routes>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        <Footer />
      </Router>
  </>
  );
}

export default App;

