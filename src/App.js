import React, { useState, useEffect, useContext } from 'react';
import Navbar from './components/Navbar'
//import Card from './components/Card-1'
import Card from './components/Card'
import Content from './components/Content'
import Footer from './components/Footer'
import { Context } from './context/Context'
import './App.css';

function App() {

  const {isMobile, setIsMobile, isMenu, setIsMenu} = useContext(Context);
    
  useEffect(()=>{
    document.body.style.overflow = 'hidden !important';
    if(window.innerWidth<1201){
      setIsMobile(true);
    }
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize)
  },[])

  function resize(){
    if(window.innerWidth<1201){
      setIsMobile(true);
    }
    else setIsMobile(false);
  }

  return (
    <div id="page">
      <Navbar />
       <div>
        <Card />
        <Content />
      </div> 
      <Footer />
    </div>
  );
}

export default App;
