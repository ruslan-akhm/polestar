import React, { useState, useEffect, useRef, useContext } from 'react';
import { Context } from '../context/Context'
import leftCarFront from '../img/card/ps2-full.webp'
import leftCarFrontJPG from '../img/card/ps2-full-jpg.jpg'
import rightCarFront from '../img/card/ps1-full.webp'
import rightCarFrontJPG from '../img/card/ps1-full-jpg.jpg'
import topCarSide from '../img/card/ps2-half.webp'
import topCarSideJPG from '../img/card/ps2-half-jpg.jpg'
import bottomCarSide from '../img/card/ps1-half.webp'
import bottomCarSideJPG from '../img/card/ps1-half-jpg.jpg'
import '../styles/Card.css';

function Card(props) {

    const {isMobile, setIsMobile} = useContext(Context);
    let isLeftCard = useRef(true);
    const cards = useRef();
    const slideRight = useRef();
    const slideLeft = useRef();
    const pictureRight = useRef();
    const pictureLeft = useRef();

    // useEffect(()=>{
    //     setIsMobile(props.props)
    // },[props.props])

    function handleClick(e){
        let id = e.target.id;
        cards.current.style.animation="none";
        if(id=="right"||id=="sl-right"){//apply styles when right car ot slide bar clicked
            if(isLeftCard.current){
                cards.current.style.animation="slideLeft .5s ease"
                cards.current.style.marginLeft="-50%";
                slideRight.current.className="active-slide";
                slideLeft.current.className="slide";
                pictureLeft.current.className="";
                pictureRight.current.className="pic-active";
                isLeftCard.current=false;
            }
            return
        }
        if(id=="left"||id=="sl-left"){//left car pic or slide bar clicked
            if(!isLeftCard.current){
                cards.current.style.animation="slideRight .5s ease"
                cards.current.style.marginLeft="0%";
                slideRight.current.className="slide";
                slideLeft.current.className="active-slide";
                pictureRight.current.className="";
                pictureLeft.current.className="pic-active";
                isLeftCard.current=true;
            }
            return
        }
    }

    return (
        <div id="cards-box">
            <div id="cards" ref={cards}>
                <div className="card">
                    <div className="text-box">
                        <p>
                            Polestar 2
                            <hr />
                            A fully electric, 5-door fastback.
                        </p>
                        <button>Discover <span style={{color:"orange"}}>&#x3e;</span></button>
                    </div>
                    <div className="pic-box">
                        <picture>
                            <source srcSet={isMobile?topCarSide:leftCarFront} type="image/webp" />
                            <img src={isMobile?topCarSideJPG:leftCarFrontJPG} 
                                 alt="car image"  
                                 id="left" 
                                 className="pic-active" 
                                 onClick={(e)=>handleClick(e)}
                                 ref={pictureLeft} />
                        </picture>
                    </div>
                </div>
                <div className="card">
                    <div className="text-box">
                        <p>
                            Polestar 1
                            <hr />
                            An electric perfomance hybrid, made without compromise.
                        </p>
                        <button>Discover <span style={{color:"yellow"}}>&#x3e;</span></button>
                    </div>
                    <div className="pic-box">
                        <picture>
                            <source srcSet={isMobile?bottomCarSide:rightCarFront} type="image/webp" />
                            <img src={isMobile?bottomCarSideJPG:rightCarFrontJPG} 
                                 alt="car image" 
                                 id="right" 
                                 onClick={(e)=>handleClick(e)}
                                 ref={pictureRight} />
                        </picture>
                    </div>
                </div>
            </div>
            <div className="slider-box">
                <div id="sl-left" 
                     className="active-slide" 
                     onClick={(e)=>handleClick(e)}
                     ref={slideLeft}></div>
                <div id="sl-right" 
                     className="slide" 
                     onClick={(e)=>handleClick(e)}
                     ref={slideRight}></div>
            </div>
        </div>
    );
}

export default Card;
