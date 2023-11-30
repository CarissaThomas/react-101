import './App.css';
import ReactDom from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './home';
import About from './about';
import Navbar from './navbar';
import Footer from './footer';
import Vans from './vans';
import VanDetail from './vanDetail';
import "./server"


function App() {
  return (
    <BrowserRouter class="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
