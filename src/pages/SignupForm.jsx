import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { NavLink } from "react-router-dom";
import { faUser, faEnvelope, faPhone, faHome, faListAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signup} from '../services/User_service';

function SignupForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password:'',
    phone: '',
    address: ''
 
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const userData = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      phone: formData.phone,
      address: formData.address
    };
  
    // Call the signup API endpoint and handle the response
    signup(userData)
      .then((response) => {
        console.log(response);
        // Do something with the response data
      })
      .catch((error) => {
        console.error(error);
        // Handle any errors that occurred during the request
      });
  
      setFormData({
        name: '',
        email: '',
        password: '',
        phone: '',
        address: ''
      });
    }; 

  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)'}}>
    <div className='mask gradient-custom-3'></div>
    <MDBCard className='m-5' style={{maxWidth: '600px'}}>
      <MDBCardBody className='px-5'>
        <h2 className="text-uppercase text-center mb-5">Create an account</h2>
        <label htmlFor='name'>
          <FontAwesomeIcon icon={faUser} className='me-2' />
          Your Name
        </label>
        <MDBInput wrapperClass='mb-4' size='lg' id='name' name='name' type='text' placeholder='Enter your name' value={formData.name} onChange={handleChange}/>
        <label htmlFor='email'>
          <FontAwesomeIcon icon={faEnvelope} className='me-2' />
          Your Email
        </label>
        <MDBInput wrapperClass='mb-4' size='lg' id='email' name='email' type='email' placeholder='Enter your email' value={formData.email} onChange={handleChange}/>
        <label htmlFor='password'>
          <FontAwesomeIcon icon={faListAlt} className='me-2' />
          Password
        </label>
        <MDBInput wrapperClass='mb-4' size='lg' id='password' name='password' type='password' placeholder='Enter your password'value={formData.password} onChange={handleChange}/>
        <label htmlFor='phone'>
          <FontAwesomeIcon icon={faPhone} className='me-2' />
          Phone
        </label>
        <MDBInput wrapperClass='mb-4' size='lg' id='phone' name='phone' type='text'placeholder='Enter your phone number'value={formData.phone} onChange={handleChange}/>
        <label htmlFor='address'>
          <FontAwesomeIcon icon={faHome} className='me-2' />
          Address
        </label>
        <MDBInput wrapperClass='mb-4' size='lg' id='address' name='address' type='text'placeholder='Enter your address 'value={formData.address} onChange={handleChange}/>
        
        <div className='d-flex flex-row justify-content-center mb-4'>
          <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree to all statements in Terms of service' checked={formData.agree} onChange={handleChange} />
        </div>
        <MDBBtn className=' search-button mb-4 w-100 gradient-custom-4' size='lg'style={{ backgroundColor: '#567189' }} onClick={handleSubmit}>Register</MDBBtn>
        <NavLink to="/sign" className=" lg link-secondary">Already have an account? Sign in here.</NavLink>
      </MDBCardBody>
    </MDBCard>
  </MDBContainer>
);
}


export default SignupForm;