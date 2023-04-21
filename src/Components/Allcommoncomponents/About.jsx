import React from 'react'
import { NavLink } from 'react-router-dom';
import LearnMore from '../../pages/LearnMore';

export default function About() {
  return (
    <div className="about-section container-fluid py-5">
    <div className="container">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
          <div className="about-images row g-0 rounded overflow-hidden">
            <div className="col-6 text-start">
              <img className="img-fluid w-100" src="img/about-1.jpg" alt="about 1" />
            </div>
            <div className="col-6 text-start">
              <img className="img-fluid" src="img/about-2.jpg" style={{ width: '85%', marginTop: '15%' }}alt="about 2" />
            </div>
            <div className="col-6 text-end">
              <img className="img-fluid" src="img/about-3.jpeg" style={{ width: '85%'}}alt="about 3" />
            </div>
            <div className="col-6 text-end">
              <img className="img-fluid w-100" src="img/about-4.jpg" alt="about 4" />
            </div>
          </div>
        </div>
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
          <h1 className="mb-4">We Help You Find the Perfect Housekepper </h1>
          <p className="lead mb-4">Home experts and solution to all your home needs.</p>
          <ul className="check-list">
            <li><i className="fa fa-check me-3"></i>Create the home you love.</li>
            <li><i className="fa fa-check me-3"></i>Your clean home is our business.</li>
            <li><i className="fa fa-check me-3"></i>We believe your weekends weren't made for houseworks</li>
          </ul>
          <NavLink className="blue-button navbar-nav nav-link.job-post btn-lg py-3 px-5 mt-3" to="/learnmore">
          Learn More...
         </NavLink>
        </div>
      </div>
    </div>
  </div>
  )
}
