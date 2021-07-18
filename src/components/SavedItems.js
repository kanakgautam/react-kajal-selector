import React from 'react'
import './SavedItems.css'
function SavedItems(props) {
    return (
        <div>
            <li className='list-item'>
            <div>Kajal</div>
            <div>{props.value}</div>
            <div><img src={props.src} className='icon-image'/></div>
            </li>
        </div>

    )

}

export default SavedItems
