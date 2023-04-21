import React, { useState, useEffect } from 'react';
import { getJobPosts } from '../services/User_service';
import { faMapMarkerAlt, faMoneyBillAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from "react-router-dom";

function JobPostList({ userId }) {
  const [jobPosts, setJobPosts] = useState([]);
  
  const [selectedJobPost, setSelectedJobPost] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('full-time');

  useEffect(() => {
    const fetchJobPosts = async () => {
      try {
        const response = await getJobPosts();
        setJobPosts(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchJobPosts();
  }, []);

  const handleCategorySelect = (category) => {
    if (category === 'FullTime') {
      setSelectedCategory('full-time');
    } else if (category === 'PartTime') {
      setSelectedCategory('part-time');
    } else if (category === 'Customized') {
      setSelectedCategory('customized');
    } else {
      setSelectedCategory('all');
    }
  };
  const handleViewDetails = (jobPost) => {
    const updatedJobPost = {
      ...jobPost,
      showDetails: true
    };
    setSelectedJobPost(updatedJobPost);
  };

  const filteredJobPosts = selectedCategory === 'all' 
  ? jobPosts 
  : jobPosts.filter((jobPost) => jobPost.category === selectedCategory);

  if (!jobPosts || !jobPosts.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="job-listing-container">
      <h1>Job Listings</h1>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }} className="categories-container">
      <button style={{ padding: '10px' }} className={`category-button ${selectedCategory === 'all' ? 'selected' : ''}`} onClick={() => handleCategorySelect('All')}>
  All
</button>
<button style={{ padding: '10px' }} className={`category-button ${selectedCategory === 'full-time' ? 'selected' : ''}`} onClick={() => handleCategorySelect('FullTime')}>
  Full Time
</button>
<button style={{ padding: '10px' }} className={`category-button ${selectedCategory === 'part-time' ? 'selected' : ''}`} onClick={() => handleCategorySelect('PartTime')}>
  Part Time
</button>
<button style={{ padding: '10px' }} className={`category-button ${selectedCategory === 'customized' ? 'selected' : ''}`} onClick={() => handleCategorySelect('Customized')}>
  Customized
</button>

      </div>
      {selectedJobPost ? (
  <div className="job-post-details">
    <h2>{selectedJobPost.title}</h2>
    <p>{selectedJobPost.description}</p>
    <p>Posted by {selectedJobPost.user ? selectedJobPost.user.name : 'Unknown'}</p>
    {selectedJobPost.showDetails && (
      <>
        <p>Location: {selectedJobPost.location}</p>
        <p>Salary: {selectedJobPost.salary}</p>
        <p>Requirements: {selectedJobPost.requirements}</p>
      </>
    )}
    <button onClick={() => setSelectedJobPost(null)}>Close</button>
  </div>
      ) : (
        <ul className="job-post-list">
          {filteredJobPosts.map((jobPost) => (
           <li key={jobPost._id} className="job-post-card">
           <div className="icon-container">
            
           <FontAwesomeIcon icon={faMoneyBillAlt} style={{ color: '#B46060', marginRight: '10px' }} />
             <span>{jobPost.location}</span>
           </div>
           <h2>{jobPost.title}</h2>
           <p>{jobPost.description}</p>
           <div className="icon-container">
           <FontAwesomeIcon icon={faMoneyBillAlt} style={{ color: '#1F8A70', marginRight: '10px' }} />
             <span>{jobPost.salary}</span>
           </div>
           <div className="icon-container">
           <FontAwesomeIcon icon={faClock} style={{ color: '#567189', marginRight: '10px' }} />
          
             <span>{jobPost.type}</span>
           </div>
           <div className="button-container">
             <button className="view-details-button" onClick={() => handleViewDetails(jobPost)}>
               View Details
             </button>
             <NavLink to="/apply" className="apply-now-button">Apply Now</NavLink>
           </div>
         </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default JobPostList;
