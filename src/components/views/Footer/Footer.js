import React from 'react'
import LeftText from './Sections/LeftText'
import RightText from './Sections/RightText'

import './index.css'


function Footer() {
    return (

        <div className="base__layout footer__layout">
            <div className="base__container footer__container">
                <LeftText />
                <RightText />
            </div>
        </div >
    )
}

export default Footer
