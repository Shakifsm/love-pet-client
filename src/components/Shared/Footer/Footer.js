import React from 'react';
import logo from "../../../images/logo.png"
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer>
            <div className="row w-100 footer p-5">
                <div className="col-md-3 pt-5">
                    <img src={logo} alt="" />
                    <br/>
                    <br/>
                    <p>Aoluptas sit aspernatur aut odit aut fugit, sed quias consequuntur magni dolores eos qui ratione volust.</p>
                    <p>Follow us on:</p>
                    <div className="icons">
                        <FontAwesomeIcon className="social-icons" icon={faFacebook} />
                        <FontAwesomeIcon className="social-icons" icon={faTwitter} />
                        <FontAwesomeIcon className="social-icons" icon={faYoutube} />
                        <FontAwesomeIcon className="social-icons" icon={faLinkedin} />
                    </div>
                </div>
                <div className="col-md-3 working pt-5">
                    <h5 className="title pb-3">Working Hours</h5>
                    <p>Sat & Sunday : <span style={{ marginLeft: '25px' }}>Closed</span></p>
                    <hr className="hr" />
                    <p>Monday : <span style={{ marginLeft: '25px' }}>8:00 AM – 6:00 PM</span></p>
                    <hr className="hr" />
                    <p>Tuesday : <span style={{ marginLeft: '25px' }}> 8:00 AM – 6:00 PM</span></p>
                    <hr className="hr" />
                    <p>Wednesday : <span style={{ marginLeft: '25px' }}>9:00 AM – 5:00 PM</span></p>
                    <hr className="hr" />
                    <p>Thursday : <span style={{ marginLeft: '25px' }}> 8:00 AM – 6:00 PM</span></p>
                    <hr className="hr" />
                    <p>Friday : <span style={{ marginLeft: '25px' }}>8:00 AM – 6:00 PM</span></p>
                    <hr className="hr" />
                </div>
                <div className="col-md-3 pt-5">
                    <h5 className="title pb-3">INFO</h5>
                    <p>Why Us</p>
                    <p>Company Fact Sheet</p>
                    <p>History</p>
                    <p>Management</p>
                    <p>Global Presence</p>
                    <p>Others</p>
                </div>
                <div className="col-md-3 pt-5 subs">
                    <h5 className="title pb-3">NEWS LETTER</h5>
                    <p>Subscribe to receive inspiration, ideas, and news in your inbox.</p>
                    <input className="input" type="text" placeholder="Your email" />
                    <hr className="input-hr" />
                    <br />
                    <br />
                    <button className="subscribe-btn">SUBSCRIBE</button>
                </div>
            </div>
            <div className="footer-bottom row w-100 p-3">
                <div className="col-md-8">
                    <p>Love Pet by Haintheme © 2016. All Rights Reserved.</p>
                </div>
                <div className="col-md-4 text-right">
                    <a href="">FAQS </a>
                    <a href="">SITEMAP </a>
                    <a href="">COMMUNITY</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;