import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuItems from './MenuItems'
import './Dropdown.css'

function Dropdown() {
    const [click, setClick] = useState(false);
    const [items, setItems] = useState([]);

    const handleClick = (text) => {

        setItems(items => [...items, text]);

        setClick(!click)
        console.log(text);
        console.log(items);
    };

    return (
        <>
            <ul className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {MenuItems.map((item, index) => {
                    return (
                        <li className={item.cName} onClick={() => {
                            handleClick(item.title);
                        }} >{item.title}</li>
                    )
                })}
            </ul>


        </>
    )
}

export default Dropdown
