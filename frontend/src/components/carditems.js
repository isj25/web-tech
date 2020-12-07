import React from 'react'
import {Link} from 'react-router-dom';

function carditems(props) {
    return (
        <div>
        <li className='cards_item'>
            <Link className='cards_item_link' to= {props.path}>
                <figure className='cards_wrap' data-category={props.label}>
                    <img src={props.src} className='cards_image' alt='info'>

                    </img>
                </figure>
                <div className='cards_info'>
                    <h5 className='cards_info_text'>{props.text} </h5>
                </div>
            </Link>
        </li>
            
        </div>
    )
}

export default carditems;
