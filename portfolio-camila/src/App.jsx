import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import AboutMeMain from "./pages/AboutMe/AboutMeMain";
import HomeMain from "./pages/Home/HomeMain";
import ProyectsMain from "./pages/Proyects/ProyectsMain";
import ContactsMain from "./pages/Contacts/ContactsMain";

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomeMain/>} />
        <Route path="/about" element={<AboutMeMain/>} />
        <Route path="/contacts" element={<ContactsMain/>} />
        <Route path="/proyects" element={<ProyectsMain/>} />
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
