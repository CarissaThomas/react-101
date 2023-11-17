import './App.css';
import ReactDom from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './home';
import About from './about';
import Navbar from './navbar';
import Footer from './footer';
import Vans from './vans';
import "./server"


function App() {
  return (
    <BrowserRouter class="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
