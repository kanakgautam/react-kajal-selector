import React from 'react'
import './SavedItems.css'
function SavedItems(props) {
    return (
        <div className='list-item-wrapper'>
            <li className='list-item'>
            <div>Kajal</div>
            <div>{props.value}</div>
            <div><img src={props.src} className='icon-image'/></div>
            </li>
        </div>

    )

}

export default SavedItems
