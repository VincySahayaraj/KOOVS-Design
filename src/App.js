
import './App.css';
import React from 'react';
import Home from './Pages/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>

  )
}

export default App