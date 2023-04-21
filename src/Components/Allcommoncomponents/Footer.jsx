import React from 'react';
import { NavLink } from "react-router-dom";
import {FaFacebook,FaInstagramSquare, FaTwitter} from "react-icons/fa";
import logo from '../img/Logo.png';

export default function Footer() {
  
    return (
        <footer className="my-footer-color text-black">
          <div className="container py-5">
            <div className="row">
              <div className="col-md-4 mb-4 mb-md-0">
                <NavLink to="/" className="navbar-brand d-flex align-items-center text-white mb-3">
                  <img src={logo} alt="Logo" style={{ width: '100px' }} />
                  <h1 className="text-black m-0 ms-2">Hkeepers</h1>
                </NavLink>
                <p className="text-black-50">
                  Hkeepers is a job search platform that connects employers and job seekers in the hospitality industry.
                </p>
              </div>
              <div className="col-md-4 mb-4 mb-md-0">
                <h2 className="h5 mb-3">Quick Links</h2>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <NavLink to="/header" className="text-dark d-block">Home</NavLink>
                  </li>
                  <li className="mb-2">
                    <NavLink to="/about" className="text-dark d-block">About</NavLink>
                  </li>
                  <li className="mb-2">
                    <NavLink to="/exploreByCategory" className="text-dark d-block">Category</NavLink>
                  </li>
                  <li className="mb-2">
                    <NavLink to="/" className="text-dark d-block">Pages</NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 mb-4 mb-md-0">
                <h2 className="h5 mb-3">Contact Us</h2>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <i className="bi bi-geo-alt-fill text-primary"></i>
                    <span className="ms-2">Vijay Nagar, Indore</span>
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-envelope-fill text-primary"></i>
                    <span className="ms-2">housekeepers999@gmail.com</span>
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-phone-fill text-primary"></i>
                    <span className="ms-2">+91 627333408</span>
                  </li>
                  <li>
                    <i className="bi bi-facebook"><FaFacebook/></i>
                    <i className="bi bi-instagram ms-5"><FaInstagramSquare/></i>
                    <i className="bi bi-twitter ms-5"><FaTwitter/></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="blue-button py-3">
            <div className="container text-center">
              <p className="text-white mb-0">© 2023 Hkeepers. All rights reserved.</p>
            </div>
          </div>
        </footer>
      );
    }
