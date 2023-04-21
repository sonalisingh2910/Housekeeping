
import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import About from './About';
import Contact from './Contact';
import ExploreByCategory from './ExploreByCategory';
import Search from './Search';
import JobPostList from '../../pages/JobPostList';


const items = [
  {
    src: 'img/m1.jpg',
    altText: 'Slide 1',
    caption: 'Find the Perfect Housekeeping Job You Deserve!'
  },
  {
    src: 'img/m1.jpg',
    altText: 'Slide 2',
    caption: 'Find The Best Housekeeping Job That Fits You!'
  }
];

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
       
       <img src={item.src} alt={item.altText} className="img-fluid" style={{ width: '100%' }} />
           <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
       
        </CarouselItem>
      );
    });

    return (
      <>
      <div className="header-carousel position-relative ">
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: "rgba(43, 57, 64, .5)" }}>
          <div className="container">
            <div className="row justify-content-start">
              <div className="col-md-6 col-lg-5">
              <h1 class="display-3 text-white animated slideInDown mb-4">Find your perfect keeper, someone who truly deserves you.</h1>
              <p class="fs-5 fw-medium text-white mb-4 pb-2">Unlock a world of cleanliness with us and take the first step towards your dream job today!</p>
              
              <NavLink to= "/register" className="search-button  py-md-3 px-md-5 animated slideInRight">Search A Job</NavLink>
              
              </div>
            </div>
          </div>
        </div>
      </div>
      <Search/>
      <ExploreByCategory/>
   
      <JobPostList/>
      <Contact/>
    <About/>
  
      </>
    );
  }
}

export default Header;