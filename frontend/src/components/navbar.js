import React, {useState,useEffect} from 'react';
import { Link} from 'react-router-dom';
import {Button} from './Button';
import './navbar.css';


function navbar() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [click,setClick] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [button,setButton] = useState(true);

    const showButton =()=>{
        if(window.innerWidth<=960){
            setButton(false);
        }else{
            setButton(true);
        }
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
showButton();
    },[]);

    window.addEventListener('resize',showButton);


    function handleClick() {
        setClick(!click);
    }

    const closeMobileMenu =()=>{
        setClick(false);
    }
    return (
        <div>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                    Travel <i className="fab fa-typo3"></i>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click? 'nav-menu active':'nav-menu'}>
                <li className="nav-item">
                    <Link to='/' className="nav-links" onClick={closeMobileMenu}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link to='/services' className="nav-links" onClick={closeMobileMenu}>Services</Link>
                </li>
                <li className="nav-item">
                    <Link to='/bookings' className="nav-links" onClick={closeMobileMenu}>Bookings</Link>
                </li>
                <li className="nav-item">
                    <Link to='/payment' className="nav-links" onClick={closeMobileMenu}>Payment</Link>
                </li>
                <li className="nav-item">
                    <Link to='/' className="nav-links-mobile" onClick={closeMobileMenu}>Sign up</Link>
                </li>

                </ul>
                {button &&<Button buttonStyle='btn--outline' addr='accountinfo'>ACCOUNT</Button>}
                
            
            </div>
        </nav>
        
        </div>
    );
}

export default navbar;
