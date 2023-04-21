import React from 'react';
import { NavLink } from "react-router-dom";

import logo from '../img/Logo1.png';
export default function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg bg-light navbar-light shadow sticky-top p-0">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5">
        <img src={logo} alt="Logo" style={{ width: '50px' }} />
          <h1 className="m-0 text-dark">Hkeepers</h1>
          
        </NavLink> 
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0 text-dark">
            <NavLink to="/header" className="nav-item nav-link" activeclassname="active-link">Home</NavLink>
            <NavLink to="/about" className="nav-item nav-link" activeclassname="active-link">About</NavLink>
            <div className="nav-item dropdown">
              <NavLink to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Category</NavLink>
              <div className="dropdown-menu rounded-0 m-0">
                <NavLink to="/exploreByCategory" className="dropdown-item">Job Category</NavLink>
                <NavLink to="/jobpostlist" className="dropdown-item">Job-listing</NavLink>
               
              </div>
            </div>
            <div className="nav-item dropdown">
              <NavLink to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</NavLink>
              <div className="dropdown-menu rounded-0 m-0">
                <NavLink to="/search" className="dropdown-item">Search</NavLink>
                <NavLink to="/housekeeperlist" className="dropdown-item">HousekeeperList</NavLink>
                <NavLink to="/testimonials" className="dropdown-item">Testimonial</NavLink>
                
              </div>
            </div>
            <NavLink to="/contact" className="nav-item nav-link ">Contact</NavLink>
          </div>
          <a href="/signup" className="blue-button nav-item nav-link job-post rounded-0 py-4 px-lg-5 d-none d-lg-block" activeclassname="active-link">Post A Job<i className="fa fa-arrow-right ms-3"></i></a>
        </div>
      </div>
    </nav>
  );
}
