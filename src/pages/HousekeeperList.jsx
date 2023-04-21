import React, { useState, useEffect } from 'react';
import { getHousekeepers } from '../services/User_service';

const HousekeeperList = () => {
  const [housekeepers, setHousekeepers] = useState([]);

  useEffect(() => {
    getHousekeepers()
      .then((data) => {
        setHousekeepers(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [expandedHousekeeperId, setExpandedHousekeeperId] = useState(null);

  const handleCardClick = (id) => {
    if (id === expandedHousekeeperId) {
      setExpandedHousekeeperId(null);
    } else {
      setExpandedHousekeeperId(id);
    }
  };

  const renderHousekeeperCard = (housekeeper) => {
    const isExpanded = housekeeper.id === expandedHousekeeperId;

    return (
      <li key={housekeeper.id}>
        <div className="card" onClick={() => handleCardClick(housekeeper.id)}>
          <h3>{housekeeper.name}</h3>
          <p>Phone: {housekeeper.phone}</p>
          <p>Location: {housekeeper.city}, {housekeeper.state}</p>
          <p>Hourly Rate: {housekeeper.hourlyRate}</p>
          <p>Weekday Availability: {housekeeper.weekdayAvailability ? 'Yes' : 'No'}</p>
          <p>Weekend Availability: {housekeeper.weekendAvailability ? 'Yes' : 'No'}</p>
          <p>Category: {housekeeper.category}</p>
        </div>
        {isExpanded && (
          <div className="expanded-info">
            <p>{housekeeper.description}</p>
            <p>Experience: {housekeeper.experience} years</p>
            <button onClick={() => handleCardClick(housekeeper.id)}>View Less</button>
          </div>
        )}
      </li>
    );
  };

  return (
    <div>
      <h2>Housekeepers</h2>
      <ul>{housekeepers.map(renderHousekeeperCard)}</ul>
    </div>
  );
};

export default HousekeeperList;
