import React, { useState, useEffect, useRef, useContext } from 'react';
import { Context } from '../context/Context'
import navItems from '../data/FooterItems'
import '../styles/Footer.css'

function Footer(){
//Menu scroll too
    const {isMobile, setIsMobile} = useContext(Context);
    const [isDropped, setIsDropped] = useState(-1);

    //show/hide footer nav items when change between desktop/mobile
    useEffect(()=>{
            let allLinks = document.getElementsByClassName('ext-links')
            for(let j=0;j<allLinks.length;j++){
                allLinks[j].style.animation="none"
                allLinks[j].style.display=isMobile?"none":"flex"
            }
    },[isMobile])

    //map through navItems array of objects to set column's header(1st child) and clickable links 
    function clickHandle(e, id){
        let allLinks = document.getElementsByClassName('ext-links')
        let droppedDownLinks = document.getElementsByClassName('link-'+id)
        for(let j=0;j<allLinks.length;j++){
            allLinks[j].style.display="none"
        }
        for(let i=0;i<droppedDownLinks.length;i++){
            if(isDropped!==id){//clicking some CLOSED ul 
                droppedDownLinks[i].style.display="flex"
                droppedDownLinks[i].style.animation="dropDown .5s"
                setIsDropped(id);
            }
            else{//clicking same ul which is already OPEN
                droppedDownLinks[i].style.display="flex"
                droppedDownLinks[i].style.animation="closeUp .5s"
                setTimeout(()=>{
                    droppedDownLinks[i].style.display="none"
                },490)
                setIsDropped(-1);
            }
        }
    }

    let navLinks = navItems.map((key,index)=>{
        return( 
            <ul id={index}>
                <li className="ext-links-title" onClick={isMobile?(e, id)=>clickHandle(e, index):null}>
                    {Object.keys(key)}
                    <span id={isDropped==index?"minus":"plus"}>{isMobile?(isDropped==index?"-":"+"):null}</span>
                </li>
                {Object.values(key).map(arr=>{return arr.map(val=>{return <li className={"ext-links link-"+index}>{val}</li>})})}
            </ul>
        )
    })

    return(
        <div id="footer">
            <div className="footer-box">
                <div className="footer-links">
                    <div className="footer-info">
                        <h2>Stay up to date on the latest Polestar news.</h2>
                        <p>Our newsletters are a concentrated blast of all the latest from Polestar: news, events, product information, and more.</p>
                        <button>Subscribe <span style={{color:"orange"}}>&rarr;</span></button>
                    </div>
                    {navLinks}
                </div>
                <div className="footer-lic">
                    <p>Polestar © 2020 All rights reserved</p>
                </div>
            </div>
        </div>
    )
} 

export default Footer