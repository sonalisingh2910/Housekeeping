import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTag, faCalendarAlt,faUser, faPhone, faMapMarkerAlt, faMoneyBillAlt,  faUserGraduate, faFileAlt, faFemale, faTransgenderAlt, faPaw, faLock } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
import { Register } from '../services/User_service';



const cityOptions = [
  { value: 'indore', label: 'Indore' },
  { value: 'bhopal', label: 'Bhopal' },
  { value: 'sagar', label: 'Sagar' },
  { value: 'pune', label: 'Pune' },
  { value: 'betul', label: 'Betul' },
];
const states = [
  { value: '', label: 'Select a state' },
  { value: 'MP', label: 'madhya pradesh' },
  { value: 'Mr', label: 'Maharashtra' },
 
];
const RegisterForm = () => {
  const [Name, setName] = useState('');
  
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [experience, setExperience] = useState('');
  const [description, setDescription] = useState('');
  const [hourlyRate, setHourlyRate] = useState('');
  const [weekendAvailability, setWeekendAvailability] = useState(false);
  const [weekdayAvailability, setWeekdayAvailability] = useState(false);
  const [category, setCategory] = useState('');



  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: Name,
      phone: phone,
      city: city,
      state: state,
      hourlyRate: hourlyRate,
      weekendAvailability: weekendAvailability,
      weekdayAvailability: weekdayAvailability,
      category: category,
      description: description, // added description field
      experience: experience // added experience field
    };
    Register(data)
      .then((response) => {
        console.log(response);
        // Do something with the response data
      setName('');
      setPhone('');
      setCity('');
      setState('');
      setHourlyRate('');
      setWeekendAvailability(false);
      setWeekdayAvailability(false);
      setCategory('');
      setDescription('');
      setExperience(''); // clear the added fields
      })
      .catch((error) => {
        console.error(error);
        // Handle any errors that occurred during the request
      });
  };

  return (
    <div className="small-form " >
   
    <h2 style={{ textAlign: 'center' }}>Registration</h2>
      <form  onSubmit={handleSubmit}>
      <label htmlFor="firstName">
          <FontAwesomeIcon icon={faUser} />
          Name:
        </label>
        <input type="text" id="Name" value={Name} onChange={(e) => setName(e.target.value)} />

      
        <label htmlFor="phone">
          <FontAwesomeIcon icon={faPhone} />
          Phone Number:
        </label>
        <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />

      
          <label htmlFor="city">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          City:
        </label>
        
        <select id="city" value={city} onChange={(e) => setCity(e.target.value)}>
          <option value="">Select a city</option>
          {cityOptions.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <label htmlFor="experience">
  <FontAwesomeIcon icon={faUserGraduate} />
  Experience (in years):
</label>
<input type="text" id="experience" value={experience} onChange={(e) => setExperience(e.target.value)} />




                  <label htmlFor="state">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            State/Province:
          </label>
          <select id="state" value={state} onChange={(e) => setState(e.target.value)}>
            {states.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>         

        <label htmlFor="hourlyRate">
          <FontAwesomeIcon icon={faMoneyBillAlt} />
          Hourly Rate:
        </label>
        <input type="text" id="hourlyRate" value={hourlyRate} onChange={(e) => setHourlyRate(e.target.value)} />


          <label htmlFor="weekendAvailability">
               <FontAwesomeIcon icon={faCalendarAlt} />
             Available on Weekends:
           </label>
           <input
             type="checkbox"
             id="weekendAvailability"
             checked={weekendAvailability}
             onChange={() => setWeekendAvailability(!weekendAvailability)}
            />


         <label htmlFor="weekdayAvailability">
         <FontAwesomeIcon icon={faCalendarAlt} />
          Available on Weekdays:</label>
        <input type="checkbox"
         id="weekdayAvailability" 
         checked={weekdayAvailability}
          onChange={() => setWeekdayAvailability(!weekdayAvailability)} />

           <label htmlFor="category">
             <FontAwesomeIcon icon={faTag} />
             Category:
           </label>
           <select 
             id="category"
             value={category}
             onChange={(e) => setCategory(e.target.value)}
             >
             <option  value="">Select a category</option>
           
             <option value="Male Keeper">Male Keeper</option>
             <option value="Female Keeper">Female Keeper</option>
             <option value="Domestic Keeper">Domestic Keeper</option>
             <option value="Personal Keeper">Personal Keeper</option>
             <option value="Trans Keeper">Other Keeper</option>
             <option value="Pet Keeper">Pet Keeper</option>
           </select>
           <label htmlFor="description">
  <FontAwesomeIcon icon={faFileAlt} />
  Description:
</label>
<textarea 
  id="description" 
  value={description} 
  onChange={(e) => setDescription(e.target.value)}
  style={{
    width: '100%',
    height: '100px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    marginBottom: '20px'
  }}
></textarea>

       <NavLink to="/login" className="res-button text-center">Register</NavLink>

        <p className="text-center">
           Already have an account? 
           <NavLink to="/login" className="mx-auto d-inline-block">
             Login
           </NavLink>
         </p>         
      </form>

  
    </div>
  );
};

export default RegisterForm;
