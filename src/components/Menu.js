import React, { useState, useEffect, useRef, useContext } from 'react';
import { Context } from '../context/Context'
import menuItems from '../data/MenuItems'
import Links from './Links'
import '../styles/Menu.css';

function Menu() {
  
  const [subList, setSubList] = useState('');
  const {isMenu, setIsMenu, isMobile, setIsMobile} = useContext(Context);
  const subMenu = useRef(false);//is sub menu open
  const subMenuPicture = useRef(false);//is side pic shown
  const listMain = useRef();
  const listSub = useRef();
  const sidePicture = useRef();
  const sidePictureWebp = useRef();
  
  useEffect(()=>{
    if(isMenu){
      document.getElementById("menu-box").style.display="flex";
      document.getElementById("section-1").style.animation="slideIn .7s ease"
      listMain.current.style.animation="fadeIn .7s ease"
      document.getElementById("links").style.animation="fadeIn .7s ease";
      document.getElementById("close-btn").style.animation="fadeIn 1.4s ease";
    }
  },[isMenu])
    
  //hover cursor over main menu items
  function handleMouseIn(e, sub){
    let listItems = document.getElementsByClassName("list-items");
    for (let i=0;i<listItems.length;i++){
      listItems[i].style.color="#787b80";
    }
    e.target.style.color="white"
    if(isMobile) return;
    if(sub){//hover over dropdown menu item
      clearTimeout();
      document.getElementById("section-2").style.display="block";
      document.getElementById("section-2").style.animation="slideIn .7s ease"
      listSub.current.style.animation="fadeIn .7s ease"
      setSubList(()=>{
        return sub.map(item=>{return <li onMouseEnter={(img)=>handlePicture(item.img)}>{item.title}</li>})
      });
      subMenu.current=true;
    }
    else{
      if(subMenuPicture.current) clearPicture();
      if(subMenu.current) clearSubMenu();
    }
  }
  //hover over sub menu items
  function handlePicture(img){
    document.getElementById("picture").style.display="block";
    document.getElementById("picture").style.animation="slideIn .7s ease";
    sidePictureWebp.current.srcSet= img[0];
    sidePicture.current.src= img[1];
    subMenuPicture.current=true;
  }
  //click handler for  close button 
  function closeMenu(e){
    if(e.target!==e.currentTarget) return//if closed by clicking on background
    let listItems = document.getElementsByClassName("list-items");
    for (let i=0;i<listItems.length;i++){
      listItems[i].style.color="#787b80";
    }
    if(subList){
      if(subMenuPicture.current){
        clearPicture();
      }
      clearSubMenu();
      setSubList('');
    }
    setIsMenu(false);
    document.getElementById("section-1").style.animation="slideOut .7s ease"
    document.getElementById("links").style.animation="fadeOut .7s ease";
    document.getElementById("close-btn").style.animation="fadeOut .7s ease";
    listMain.current.style.animation="fadeOut .7s ease"
    setTimeout(()=>{
      document.getElementById("menu-box").style.display="none";
    },690)
  }
  //animate and remove right side picture in menu
  function clearPicture(){
     document.getElementById("picture").style.animation="slideOut .3s ease-out";
     setTimeout(()=>{
       document.getElementById("picture").style.display="none"
     },290)
    subMenuPicture.current=false;
  }
  //animate and clear sub menu
  function clearSubMenu(){
    document.getElementById("section-2").style.animation="slideOut .3s ease-out";
    listSub.current.style.animation="fadeOut .7s ease"
    setTimeout(()=>{
      document.getElementById("section-2").style.display="none"
    },290)
    subMenu.current=false;
  }
  //clear all setTimeout's to prevent bugs when quickly hovering over several animated menu items
  function clearTimeout(){
    let id = window.setTimeout(function() {}, 0);
    while (id--) {
      window.clearTimeout(id);
    }
  }

  let list = menuItems.map((item,index)=>{
      return (
        <li key={index} className="list-items" onMouseOver={(e, sub)=>handleMouseIn(e, (item.sub?item.sub:null))}> 
          {item.item}
        </li>
      )
  })

  return (
    <div id="menu-box" onClick={e=>closeMenu(e)}>
      <div id="sections">
        <div className="section" id="section-1">
          <ul ref={listMain}>
            {list}
          </ul>
          <Links />
        </div>
        <div className="section" id="section-2">
          <ul ref={listSub}>
            {subList}
          </ul>
        </div>
        <button id="close-btn" onClick={closeMenu}>&times;</button>
      </div>
      <div id="picture">
        <picture>
          <source type="image/webp" ref={sidePictureWebp} />
          <img ref={sidePicture} />
        </picture>
      </div>
    </div>
  );
}

export default Menu;
