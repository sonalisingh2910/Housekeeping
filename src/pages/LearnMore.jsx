import React from 'react';
import { NavLink } from "react-router-dom";
function LearnMore() {
  return (
<div class="learn-more-container">
  <h1 class="learn-more-header">Learn More About Our Housekeeping Services</h1>
  <p class="learn-more-text">At our website, we are dedicated to providing high-quality housekeeping services to our clients. Our team of experienced professionals is committed to making your home or office sparkle.</p>
  <p class="learn-more-text">We offer a range of services, including:</p>
  <ul class="learn-more-list">
    <li class="learn-more-list-item">Regular housekeeping</li>
    <li class="learn-more-list-item">Deep cleaning</li>
    <li class="learn-more-list-item">Move-in/move-out cleaning</li>
    <li class="learn-more-list-item">Domestic cleaning</li>
    <li class="learn-more-list-item">Laundry services</li>
  </ul>
  <p class="learn-more-text">Our services are customizable to meet your specific needs and schedule. We use only the best cleaning products and equipment to ensure that your space is left spotless.</p>
  <p class="learn-more-text">Contact us today to <NavLink to="/contact" className="learn-more-link">learn more</NavLink> about our services and to schedule a cleaning appointment.</p>
</div>
  );
}

export default LearnMore;
