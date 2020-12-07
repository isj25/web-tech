import React from 'react'
import { Button } from './Button'
import {Link} from 'react-router-dom';

function footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>Join the adventure newsletter to receive our best vacation deals</p>
                <p className='footer-subscription-text'>You can unsubscribe at any time</p>
                <div className='input-areas'>
                    <form>
                        <input type='email' name='email' placeholder='Your Email'
                        className='footer-input'></input>
                        <Button buttonStyle='btn--outline' addr='subscribe'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='#'>How It Works</Link>
                        <Link to='#'>Test</Link>
                        <Link to='#'>Careers</Link>
                        <Link to='#'>Investors</Link>
                        <Link to='#'>Terms of Service</Link>
                    </div>
                
                
                    <div className='footer-link-items'>
                        <h2>Contact</h2>
                        <Link to='#'>Support</Link>
                        <Link to='#'>Destinations</Link>
                        <Link to='#'>Sponsorships</Link>
                        <Link to='#'>Investors</Link>
                        <Link to='#'>Terms of Service</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='#'>Submit Video</Link>
                        <Link to='#'>Ambassadors</Link>
                        <Link to='#'>Agency</Link>
                        <Link to='#'>Influencer</Link>
                        <Link to='#'>Terms of Service</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Media</h2>
                        <Link to='#'>Instagram</Link>
                        <Link to='#'>Youtube</Link>
                        <Link to='#'>twitter</Link>
                       
                        <Link to='#'>Facebook</Link>
                    </div>

                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link className='social-logo'>
                            Travel <i className='fab fa-typo3' />
            
                        </Link>
                    </div>
                    <small className='website-rights'>Travel © 2020</small>
                    <div className='social-icons'>
                        <Link className='social-icon-link facebook' to='#' target='_blank'>
                            <i className='fab fa-facebook-f'></i>
                        </Link>
                        <Link className='social-icon-link twiiter' to='#' target='_blank'>
                            <i className='fab fa-twitter'></i>
                        </Link>
                        <Link className='social-icon-link instagram' to='#' target='_blank'>
                            <i className='fab fa-instagram'></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default footer
