import React, { useState, useEffect } from 'react'
import Axios from 'axios'



function BottomMenu() {
    return (
        <div className="bottom-menu">
            <ul className="bottom-menu__lists">
                <li className="menu__in__icon">
                    <svg id="ico_24_ui_menu_hamburger" data-name="ico / 24 / ui / menu_hamburger" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <rect id="Bounding_box" data-name="Bounding box" width="24" height="24" fill="rgba(255,255,255,0)" />
                        <path id="Icon_color" data-name="Icon color" d="M17.5,14H.5a.5.5,0,0,1-.5-.5v-1A.5.5,0,0,1,.5,12h17a.5.5,0,0,1,.5.5v1A.5.5,0,0,1,17.5,14Zm0-6H.5A.5.5,0,0,1,0,7.5v-1A.5.5,0,0,1,.5,6h17a.5.5,0,0,1,.5.5v1A.5.5,0,0,1,17.5,8Zm0-6H.5A.5.5,0,0,1,0,1.5V.5A.5.5,0,0,1,.5,0h17a.5.5,0,0,1,.5.5v1A.5.5,0,0,1,17.5,2Z" transform="translate(3 5)" />
                    </svg>
                    <span>CATEGORY</span>
                </li>
                <li>
                    NEW
                </li>
                <li>
                    CLOTHES
                </li>
                <li>
                    ACCESSORIES
                </li>
                <li>
                    SHOES
                </li>
                <li>
                    INSPIRATION
                </li>
            </ul>
            <div className="search-box">
                <input className="search-input" />
                <svg className="search-btn" id="Search_icon" data-name="Search icon" xmlns="http://www.w3.org/2000/svg" width="18.001" height="18" viewBox="0 0 18.001 18">
                    <path id="Search_icon-2" data-name="Search_icon" d="M16.775,18a.516.516,0,0,1-.36-.145l-4.21-4.22a7.538,7.538,0,0,1-4.6,1.582,7.609,7.609,0,1,1,7.609-7.609,7.537,7.537,0,0,1-1.582,4.6l4.22,4.21a.518.518,0,0,1,0,.72l-.72.72A.518.518,0,0,1,16.775,18ZM7.609,2.029a5.58,5.58,0,1,0,5.58,5.58A5.586,5.586,0,0,0,7.609,2.029Z" />
                </svg>
            </div>
        </div>
    )
}

export default BottomMenu
