import React, { useState, useEffect } from 'react';
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { addJobPost } from '../services/User_service';


function JobPostForm({ userId }) {
    const [formData, setFormData] = useState({
      title: '',
      description: '',
      requirements: '',
      location: '',
      salary: '',
      category: ''
    });
  
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const response = await fetch(`/users/${userId}`, { credentials: 'include' });
      const data = await response.json();
      setUser(data); // set the user object in the state
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCategoryChange = (e) => {
    setFormData({ ...formData, category: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const jobPostData = {
      title: formData.title,
      description: formData.description,
      requirements: formData.requirements,
      location: formData.location,
      salary: formData.salary,
      category: formData.category,
      user: user // Pass the entire user object to the job post data
    };

 
    addJobPost(jobPostData)
      .then((response) => {
        console.log(response);
        // Do something with the response data
        window.location.href = '/jobpostlist';
      })
      .catch((error) => {
        console.error(error);
        // Handle any errors that occurred during the request
      });

    
    setFormData({
      title: '',
      description: '',
      requirements: '',
      location: '',
      salary: ''
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem' }}>
        <label htmlFor='title' style={{ marginBottom: '.5rem' }}>
          Job Title
        </label>
        <MDBInput
          id='title'
          name='title'
          value={formData.title}
          onChange={handleChange}
          type='text'
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem' }}>
        <label htmlFor='description' style={{ marginBottom: '.5rem' }}>
          Job Description
        </label>
        <MDBInput
          id='description'
          name='description'
          value={formData.description}
          onChange={handleChange}
          type='textarea'
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem' }}>
        <label htmlFor='requirements' style={{ marginBottom: '.5rem' }}>
          Job Requirements
        </label>
        <MDBInput
          id='requirements'
          name='requirements'
          value={formData.requirements}
          onChange={handleChange}
          type='textarea'
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem' }}>
        <label htmlFor='location' style={{ marginBottom: '.5rem' }}>
          Job Location
        </label>
        <MDBInput
          id='location'
          name='location'
          value={formData.location}
          onChange={handleChange}
          type='text'
        />
      </div>
  

      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem' }}>
        <label htmlFor='salary' style={{ marginBottom: '.5rem' }}>
          Salary
        </label>
        <MDBInput
          id='salary'
          name='salary'
          value={formData.salary}
          onChange={handleChange}
          type='number'
        />
      </div>


      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem' }}>
        <label htmlFor='category' style={{ marginBottom: '.5rem' }}>
          Category
        </label>
        <select id='category' name='category' value={formData.category} onChange={handleCategoryChange}>
          <option value=''>-- Select Category --</option>
          <option value='full-time'>Full Time</option>
          <option value='part-time'>Part Time</option>
          <option value='customized'>Customized</option>
        </select>
      </div>
      <MDBBtn type='submit'>Post Job</MDBBtn>
    </form>
  );
}

export default JobPostForm;
