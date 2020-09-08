import React from 'react';
import '../styles/Menu.css';

export default function(){
    return(
        <ul id="links">
            <li>About</li>
            <li>Legal</li>
            <li>Support</li>
            <li>Media</li>
            <a href="https://www.polestar.com/" target="_blank"><li>Polestar.com</li></a>
        </ul>
    )
}