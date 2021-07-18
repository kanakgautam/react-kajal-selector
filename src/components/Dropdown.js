import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MenuItems from './MenuItems'
import './Dropdown.css'

function Dropdown(props) {
    
    const handleClick = (item) => {
        props.addItem(item);
        props.handleClick1();
    };

    return (
        <>
            <ul className='dropdown-menu'>
                {MenuItems.map((item, index) => {
                    return (
                        <li className={item.cName} onClick={ () => {
                            handleClick(item);
                        }}>
                        <div>
                        <img className="icon-image" src={item.src} alt ="icon"/>
                        </div>
                        <div>
                        {item.title}
                        </div>
                        </li>
                    )
                })}
            </ul>


        </>
    )
}

export default Dropdown
