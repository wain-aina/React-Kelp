import React from "react";
import v2 from '../../assets/images/v2.png';
import '../../assets/css/Footer.css';

const Footer = () => {
  return (
    <div id="footer">

        <footer className="footer-section">
            <div className="container">
                <div className="footer-cta pt-5 pb-5">
                    <div className="row">
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                                <i className="fas fa-map-marker-alt"></i>
                                <div className="cta-text">
                                    <h4>Our Location</h4>
                                    <span>The Moon, Earth's Orbit, Solar System</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                                <i className="fas fa-phone"></i>
                                <div className="cta-text">
                                    <h4>Call These Digits</h4>
                                    <span>0123 456789</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                                <i className="far fa-envelope-open"></i>
                                <div className="cta-text">
                                    <h4>Drop Us An Email</h4>
                                    <span>1@2.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-content pt-5 pb-5">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 mb-50">
                            <div className="footer-widget">
                                <div className="footer-logo">
                                    <a href="index.html"><img src={v2} className="img-fluid" alt="logo"/></a>
                                </div>
                                <div className="footer-social-icon">
                                    <span>Follow us</span>
                                    <a href="#"><i className="fa-brands fa-x-twitter fa-xl twitter-bg"></i></a>
                                    <a href="#"><i className="fa-brands fa-instagram fa-xl ig-bg"></i></a>
                                    <a href="#"><i className="fa-brands fa-tiktok fa-xl tiktok-bg"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Discover</h3>
                                </div>
                                <ul>
                                    <li><a href="#">About Kelp</a></li>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Terms of Service</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Trust & Safety</a></li>
                                    <li><a href="#">Content Guidelines</a></li>
                                    <li><a href="#">Review Guidelines</a></li>
                                    <li><a href="#">Accessibility Statement</a></li>
                                    <li><a href="#">Support</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Kelp For Business</a></li>
                                    <li><a href="#">Developers</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Subscribe</h3>
                                </div>
                                <div className="footer-text mb-25">
                                    <p>Don’t miss to subscribe to our news feed, kindly fill the form below.</p>
                                </div>
                                <div className="subscribe-form">
                                    <form action="#">
                                        <input type="text" placeholder="Email Address"/>
                                        <button><i className="fab fa-telegram-plane"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                            <div className="copyright-text">
                                <p>Copyright &copy;2024 - <script>document.write(new Date().getFullYear());</script>, All Rights Reserved <a href="https://practicalsecret.netlify.app">Kelp</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    </div>
  );
};

export default Footer;
