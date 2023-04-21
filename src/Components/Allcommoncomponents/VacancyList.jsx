import React, { useState, useEffect } from "react";


function VacancyList() {
  const vacancies = [
    {
      id: 1,
      companyLogo: "img/com-logo-1.jpg",
      companyName: "ABC Company",
      title: "CLENER",
      location: "New York, USA",
      type: "PART TIME",
      salary: "4500",
      deadline: "01 MARCH, 2023",
    },
    {
      id: 2,
      companyLogo: "img/com-logo-2.jpg",
      companyName: "XYZ Company",
      title: "HOUSE KEEPING",
      location: "INDORE, INDIA",
      type: "Part Time",
      salary: "2000- 3000",
      deadline: "15 Apr, 2023",
    },
  ];

  return (
    <div className="vacancy-list">
      <h1 className="title">Job_Listing</h1>
      <div className="vacancy-cards">
        {vacancies.map((vacancy) => (
          <div key={vacancy.id} className="vacancy-card">
            <div className="card-image">
              <img src={vacancy.companyLogo} alt={vacancy.companyName} />
            </div>
            <div className="card-info">
              <h3>{vacancy.title}</h3>
              <p>{vacancy.companyName}</p>
              <p>{vacancy.location}</p>
              <p>{vacancy.type}</p>
              <p>{vacancy.salary}</p>
              <p>{vacancy.deadline}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VacancyList;
