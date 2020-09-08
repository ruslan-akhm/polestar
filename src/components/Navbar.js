import React, { useState, useEffect, useRef, useContext } from 'react';
import Menu from './Menu'
import { Context } from '../context/Context'
import logoImage from '../img/logo.webp'
import logoImageJPG from '../img/logo-jpg.jpg'
import '../styles/Navbar.css';

function Navbar() {

  const prevScrollY = useRef(0);
  const [goingUp, setGoingUp] = useState(false);
  const {isMenu, setIsMenu} = useContext(Context);
  let rrr = useRef(false);

  //determine scroll direction to hide/show navbar
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });//passive!?
    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (prevScrollY.current < currentScrollY && goingUp) {
      setGoingUp(false);
    }
    if (prevScrollY.current-10 > currentScrollY && !goingUp) {
      setGoingUp(true);
    }
    prevScrollY.current = currentScrollY;
    if(goingUp||currentScrollY<140){
      document.getElementById("navbar").style.opacity="1"
      setTimeout(()=>{document.getElementById("navbar").style.display="flex"},200)
    }
    if(!goingUp){
      if(isMenu) return
      document.getElementById("navbar").style.opacity="0";
      setTimeout(()=>{document.getElementById("navbar").style.display="none"},150)
    }
  };

  function openMenu(){
    //window.removeEventListener("scroll", handleScroll);

    setIsMenu(true);
  }

  return (
    <div id="navbar">
      <div id="menu-icon" onClick={openMenu}>
        <p>&#x2261;</p>
      </div>
      <div id="logo">
        <div className="img-box">
          <picture>
              <source srcSet={logoImage} type="image/webp" />
              <img src={logoImageJPG}/>
          </picture>
        </div>
        <p>Polestar</p>
      </div>
      <Menu />
    </div>
  );
}

export default Navbar;
