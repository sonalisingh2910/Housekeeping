import React, { useState } from 'react';
import { getdata } from '../../services/User_service';
import HousekeeperList from '../../pages/HousekeeperList';
import SearchResults from './SearchResults'; // import the search results component

const cityOptions = [
  { value: 'indore', label: 'Indore' },
  { value: 'bhopal', label: 'Bhopal' },
  { value: 'sagar', label: 'Sagar' },
  { value: 'pune', label: 'Pune' },
  { value: 'betul', label: 'Betul' },
];

function Search() {
  const [category, setCategory] = useState('');
  const [city, setCity] = useState('');
  const [housekeepers, setHousekeepers] = useState([]);
  const [showResults, setShowResults] = useState(false); // state to control the display of search results


  
  const handleSearch = async () => {
    try {
      const data = await getdata(category, city);
      setHousekeepers(data);
      setShowResults(true);
     
       // set the state to true to display the search results
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="search-container container-fluid mb-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4 mb-3">
            <select className="form-select border-0" id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">Select a category</option>
              <option value="Male Keeper">Male Keeper</option>
              <option value="Female Keeper">Female Keeper</option>
              <option value="Domestic Keeper">Domestic Keeper</option>
              <option value="Personal Keeper">Personal Keeper</option>
              <option value="Other  Keeper">Other Keeper</option>
              <option value="Pet Keeper">Pet Keeper</option>
            </select>
          </div>
          <div className="col-md-4 mb-3">
            <select id="city" className="form-select" value={city} onChange={(e) => setCity(e.target.value)}>
              <option value="">Select a Location</option>
              {cityOptions.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-3 mb-7 search-button-container">
            <button className="search-button border-0 w-100" onClick={handleSearch}>Search</button>
          </div>
        </div>
      </div>
      {showResults && <SearchResults category={category} city={city} housekeepers={housekeepers}  />}
    
    
    </div>
  );
}

export default Search;