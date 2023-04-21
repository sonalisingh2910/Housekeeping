import React, { useState } from 'react';
import { addApply } from '../services/User_service';

function Apply() {
  const [name, setName] = useState('');
  const [idProofNumber, setIdProofNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleIdProofNumberChange = (event) => {
    setIdProofNumber(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const applyForm = { name, idProofNumber, phoneNumber };
    addApply(applyForm)
      .then((data) => {
        console.log('Form submitted:', data);
        setName('');
        setIdProofNumber('');
        setPhoneNumber('');
        // TODO: show success message to user
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
        // TODO: show error message to user
      });
  };

  return (
    <div className="apply-container">
      <h1>Apply Now</h1>
      <form onSubmit={handleSubmit} className="apply-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} />
        </div>
        <div className="form-group">
          <label htmlFor="idProofNumber">ID Proof Number:</label>
          <input type="text" id="idProofNumber" value={idProofNumber} onChange={handleIdProofNumberChange} />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="text" id="phoneNumber" value={phoneNumber} onChange={handlePhoneNumberChange} />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default Apply;
