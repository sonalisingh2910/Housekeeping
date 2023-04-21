import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faMale, faFemale, faTransgenderAlt, faPaw, faCalendar } from '@fortawesome/free-solid-svg-icons';

function ExploreByCategory() {
  const categories = [
    { icon: faUserTie, title: 'Domestic Keepers'},
    { icon: faUserTie, title: 'Personal Keepers' },
    { icon: faMale, title: 'Male Keepers',  },
    { icon: faFemale, title: 'Female Keepers' },
    { icon: faTransgenderAlt, title: 'Other Keepers' },
    { icon: faPaw, title: 'Pet Keepers',  },
   
  ];

  const categoryCards = categories.map((category) => (
    <div className="col-sm-6 col-md-4" key={category.title}>
    <div className="category-box" onClick={() => {
     const url = `/housekeeperlist`;
     console.log('Navigating to URL:', url);
    window.location.href = url;
   } }>
        <div className="category-icon">
          <FontAwesomeIcon icon={category.icon} />
        </div>
        <h2 className="category-title">{category.title}</h2>
        {/* <p className="category-vacancy">{category.vacancy} vacancies</p> */}
      </div>
    </div>
  ));

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
          Explore By Category
        </h1>
        <div className="row">
          {categoryCards}
        </div>
      </div>
    </div>
  );
}

export default ExploreByCategory;