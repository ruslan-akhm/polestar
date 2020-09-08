import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../context/Context'
import carSide from '../img/content/pic1.webp'
import carSideJPG from '../img/content/pic1JPG.jpg'
import carSideMobile from '../img/content/pic1-mobile.webp'
import carSideMobileJPG from '../img/content/pic1-mobileJPG.jpg'
import buildingImage from '../img/content/pic2.webp'
import buildingImageJPG from '../img/content/pic2JPG.jpg'
import '../styles/Content.css'

function Content() {

    const {isMobile, setIsMobile} = useContext(Context)

    useEffect(()=>{
        if(isMobile){
            document.getElementById('pic2-text').className="content-info-box"
        }
        else{
            document.getElementById('pic2-text').className=""
        }
    },[isMobile])

  return (
    <div id="content">
        <div className="content-pic-box">
            <picture>
                <source srcSet={isMobile?carSideMobile:carSide} type="image/webp"/>
                <img src={isMobile?carSideMobileJPG:carSideJPG}/>
            </picture>
        </div>
        <div className="content-info-box">
            <h2>Polestar Precept</h2>
            <p>Learn about our aspirations, our thoughts, our ambitions, and where they all come together, by clicking below.</p>
            <a>Discover <span style={{color:"orange"}}>&rarr;</span></a>
        </div> 
        <div className="content-info-box info-box-2">
            <h2>Stay up to date on the latest Polestar news</h2>
            <p>Our newsletters are a concentrated blast of all the latest from Polestar: news, events, product information, and more.</p>
            <a>Subscribe <span style={{color:"orange"}}>&rarr;</span></a>
        </div> 
        <div className="content-pic-box pic2-box">
            <picture>
                <source srcSet={buildingImage} type="image/webp"/>
                <img src={buildingImageJPG}/>
            </picture>
            <div id="pic2-text">
                <h2>About us</h2>
                <p>We are an electric performance car brand, determined to improve the society we live in.</p>
                <a>Read more <span style={{color:"orange"}}>&rarr;</span></a>
            </div>
        </div>
        <div id="content-info2">
        </div>
    </div>
  );
}

export default Content;
