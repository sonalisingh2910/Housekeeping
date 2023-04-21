import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';

function SearchResults({ category, city, housekeepers }) {
  const [selectedHousekeeper, setSelectedHousekeeper] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const handleCardClick = (housekeeper) => {
    setSelectedHousekeeper(housekeeper);
    setShowDetails(true);
  };

  const handleViewDetailsClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="search-result-container container-fluid mb-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4 mb-3">
            <h4>Search Results:</h4>
            <p>Category: {category}</p>
            <p>City: {city}</p>
          </div>
        </div>
        <div className="row">
          {housekeepers.map((housekeeper) => (
            <div className="col-md-3" key={housekeeper.id}>
              <div className="card mb-4">
              
      <div className="card-img-top">
       <FontAwesomeIcon icon={faUserTie} size="2x"  style={{ color: '#A75D5D;' }} />
       </div>
                <div className="card-body">
                  <h5 className="card-title" style={{color: 'black'}}>{housekeeper.name}</h5>
                  <p className="card-text" style={{color: '#A75D5D'}}>{housekeeper.description}</p>
                  <button className="btn btn-primary" onClick={() => handleCardClick(housekeeper)}>View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {selectedHousekeeper && showDetails && (
          <div className="row justify-content-center">
            <div className="col-md-4 mb-3">
              <h4>Selected Housekeeper:</h4>
              <div className="card-img-top"><FaHeart /></div>
              <h5>{selectedHousekeeper.name}</h5>
              <p>{selectedHousekeeper.description}</p>
              <p>Phone: {selectedHousekeeper.phone}</p>
              <p>Address: {selectedHousekeeper.address}</p>
              <p>Price: {selectedHousekeeper.hourlyRate}</p>
              <p>Weekday Availability: {selectedHousekeeper.weekdayAvailability ? 'Yes' : 'No'}</p>
              <p>Weekend Availability: {selectedHousekeeper.weekendAvailability ? 'Yes' : 'No'}</p>
              <button className="btn btn-primary" onClick={handleViewDetailsClick}>Hide Details</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchResults;
