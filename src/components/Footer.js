import React from "react";
import {
  FaChevronRight,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* ================== Footer Two Start ==================*/}
      <footer className='footer-area footer-area-2 bg-gray mt-0 pt-4'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='widget widget_about'>
                <div className='thumb'>
                  <img src='assets/img/logo.png' alt='img' />
                </div>
                <div className='details'>
                  <p>
                    Brainmatics E-Recruitment
                  </p>
                  <p className='mt-3'>
                    <FaPhoneAlt /> (021) 837 933 83
                  </p>
                  <p className='mt-2'>
                    <FaEnvelope /> info@brainmatics.com
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 ps-xl-5'>
              <div className='widget widget_nav_menu'>
                <h4 className='widget-title'>Media Sosial</h4>
                <ul className='social-media'>
                    <li>
                      <a href='#'>
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <FaYoutube />
                      </a>
                    </li>
                  </ul>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 ps-xl-5'>
              <div className='widget widget_nav_menu'>
                <h4 className='widget-title'>Partner</h4>
                <ul className='social-media'>
                    <li>
                      <a href='#'>
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <FaYoutube />
                      </a>
                    </li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='footer-bottom'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 align-self-center'>
                <p>© Yoursitename 2023 | All Rights Reserved</p>
              </div>
              <div className='col-md-6 text-lg-end'>
                <a href='#'>Trams &amp; Condition</a>
                <a href='#'>Privacy Policy</a>
                <a href='#'>Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* ================== Footer Two  end ==================*/}
    </>
  );
};

export default Footer;
