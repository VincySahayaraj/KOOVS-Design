import React, { useState } from "react";
import './footer.css';
import facebook from '../../assets/images/Facebook.png';
import Instagram from '../../assets/images/Instagram.png';
import Tumblr from '../../assets/images/Tumblr.png';
import Youtube from '../../assets/images/Youtube.png';
import payment from '../../assets/images/payment.png';
import { Col, Row } from 'react-bootstrap';
function Footer() {



    const [open, setOpen] = useState();
    return (

        // <footer className="footer-section">
        //      <div className="footer-content">
        //             <div className="row py-lg-5 py-4">
        //                 <div className="col-xl-3 col-lg-4 col-12">
        //                     <div className="footer-widget">
        //                         <div className="footer-widget-heading">
        //                             <p>Account</p>
        //                         </div>
        //                         <ul>
        //                             <li><a href="#">Orders and Returns</a></li>
        //                             <li><a href="#">My Information </a></li>
        //                             <li><a href="#">Wishlist </a></li>
        //                             <li><a href="#">Sign In</a></li>
        //                             <li><a href="#">Register</a></li>
        //                         </ul>
        //                     </div>
        //                 </div>
        //                 <div className="col-xl-3 col-lg-4 col-12">
        //                     <div className="footer-widget">
        //                         <div className="footer-widget-heading">
        //                             <p>Online support</p>
        //                         </div>
        //                         <ul>
        //                             <li><a href="#">Contact </a></li>
        //                             <li><a href="#">Size Guide </a></li>
        //                             <li><a href="#">FAQs </a></li>
        //                             <li><a href="#">Shipping and Return </a></li>
        //                             <li><a href="#">Gift Card </a></li>
        //                             <li><a href="#">Privacy Policy  </a></li>
        //                             <li><a href="#">Terms and Conditions </a></li>
        //                             <li><a href="#">Cookie Settings </a></li>
        //                         </ul>
        //                     </div>
        //                 </div>
        //                 <div className="col-xl-3 col-lg-4 col-12">
        //                     <div className="footer-widget">
        //                         <div className="footer-widget-heading">
        //                             <p>KOOVS</p>
        //                         </div>
        //                         <ul>
        //                             <li><a href="#">About</a></li>
        //                             <li><a href="#">Careers </a></li>
        //                             <li><a href="#">Sustainability </a></li>
        //                         </ul>
        //                     </div>
        //                 </div>

        //                 <div className="col-xl-3 col-lg-4 col-12 email-mobile">

        //                     <div className="footer-widget">
        //                         <div className="footer-widget-heading">
        //                             <u>CONNECT WITH KOOVS</u>
        //                         </div>
        //                         </div>
        //                         </div>

        //                 <div className="col-xl-3 col-lg-4 col-12 email">

        //                     <div className="footer-widget">
        //                         <div className="footer-widget-heading">
        //                             <p>Sign up for email updates and promotions</p>
        //                         </div>
        //                         <input type="text" className="form-control" placeholder="Enter Email" />
        //                         <div class="line-box">
        //                             <div className="line"></div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             <hr className="mt-0" />

        //             {/* copyrights section */}

        //                 <Row className="copyrights pb-4 pt-2">

        //                     <Col xl={4} md={12}  lg={{ order: 0 }}> <p className="mb-0">© Koovs.com 2022. All rights reserved.</p></Col>  
        //                     <Col xl={2} lg={2} md={2}>
        //                     <img src={facebook}></img>
        //                     <img src={Instagram}></img>
        //                     <img src={Tumblr}></img>
        //                     <img src={Youtube}></img>
        //                     </Col>

        //                 {/* All type payment buttons */}

        //                     <Col xl={6} lg={6} md={6} className='payment'><img src={payment}></img></Col>    

        //             </Row>
        //             </div>

        // </footer>



        <footer className="footer-section">
            <div className="container-fluid">
                <div className="footer-content">
                    <div className="row py-lg-5 pt-4">
                        <div className="col-xl-3 col-lg-4 col-12 pb-3">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <p className="account-footer" onClick={() => { setOpen(!open) }}>Account</p>
                                </div>
                                <ul className={`nested-list ${open && "open"}`}>
                                    <li><a href="#">Orders and Returns</a></li>
                                    <li><a href="#">My Information </a></li>
                                    <li><a href="#">Wishlist </a></li>
                                    <li><a href="#">Sign In</a></li>
                                    <li><a href="#">Register</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-12 pb-3">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <p>Online support</p>
                                </div>
                                <ul>
                                    <li><a href="#">Contact </a></li>
                                    <li><a href="#">Size Guide </a></li>
                                    <li><a href="#">FAQs </a></li>
                                    <li><a href="#">Shipping and Return </a></li>
                                    <li><a href="#">Gift Card </a></li>
                                    <li><a href="#">Privacy Policy  </a></li>
                                    <li><a href="#">Terms and Conditions </a></li>
                                    <li><a href="#">Cookie Settings </a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-12 pb-3">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <p>KOOVS</p>
                                </div>
                                <ul>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Careers </a></li>
                                    <li><a href="#">Sustainability </a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-12 pb-3">
                            <div className="footer-widget d-none d-lg-block">
                                <div className="footer-widget-heading">
                                    <p>Sign up for email updates and promotions</p>
                                </div>
                                <div className="form-floating">
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                    <label for="floatingPassword">Password</label>
                                </div>
                            </div>
                            <div className="footer-widget d-block d-lg-none">
                                <div className="footer-widget-heading d-flex justify-content-between align-items-center">
                                    <u className="mb-0">CONNECT WITH KOOVS</u>
                                    <div className="d-flex gap-3 justify-content-center">
                                        <img src={facebook} className="img-fluid" alt="Koovs fb image" />
                                        <img src={Instagram} className="img-fluid" alt="Koovs instagram image" />
                                        <img src={Tumblr} className="img-fluid" alt="Koovs twitter image" />
                                        <img src={Youtube} className="img-fluid" alt="Koovs youtube image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-0" />
                    <div className="row pb-2 pt-2 align-items-center">
                        <div className="col-xl-4 col-lg-4 col-md-12 order-1 order-lg-0">
                            <p className="mb-0 mb-content">© Koovs.com 2022. All rights reserved.</p>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 order-lg-1">
                            <div className="d-none d-lg-flex gap-3 justify-content-center">
                                <img src={facebook} className="img-fluid" alt="Koovs fb image" />
                                <img src={Instagram} className="img-fluid" alt="Koovs instagram image" />
                                <img src={Tumblr} className="img-fluid" alt="Koovs twitter image" />
                                <img src={Youtube} className="img-fluid" alt="Koovs youtube image" />
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 order-0 order-lg-2">
                            <img src={payment} className="img-fluid" alt="Koovs cards image" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;

