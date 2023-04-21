import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Allcommoncomponents/Navbar';
import { NavLink } from "react-router-dom";

import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from './Components/Allcommoncomponents/Footer';
import Header from './Components/Allcommoncomponents/Header';
import About from './Components/Allcommoncomponents/About';
import Contact from './Components/Allcommoncomponents/Contact';
import ExploreByCategory from './Components/Allcommoncomponents/ExploreByCategory';
import VacancyList from './Components/Allcommoncomponents/VacancyList';
import Search from './Components/Allcommoncomponents/Search';
import RegisterForm from './pages/RegisterForm';
import Login from './pages/Login';
import SignIn from './pages/SignIn';
import SignupForm from './pages/SignupForm';
import JobPostForm from './pages/JobPostingForm';
import JobPostList from './pages/JobPostList';
import LearnMore from './pages/LearnMore';
import HousekeeperList from './pages/HousekeeperList';
import SearchResults from './Components/Allcommoncomponents/SearchResults';

import Testimonial from './pages/Testimonial';
import Apply from './pages/Apply';








const SearchButton = () => {
  return (
    <NavLink
      to="/search"
      className="search-button  py-md-3 px-md-5 animated slideInRight"
    >
      Search A Job
    </NavLink>
  );
};




function App() {
  return (
  <>
   <BrowserRouter>
     <Navbar/>

     


                  <Routes>
                      
                  <Route path="/header" element={<Header/>} />
                  <Route path="/about" element={<About/>} />
                  <Route path="/contact" element={<Contact/>} />
                  <Route path="/exploreByCategory" element={<ExploreByCategory/>} />
                  <Route path="/vacancy" element={<VacancyList/>} />
                  <Route path="/search" element={<Search/>} />
                  <Route path="/register" element={<RegisterForm />} />
                  <Route path="/login" element={<Login/>} />
                  <Route path="/sign" element={<SignIn/>} />
                  <Route path="/signup" element={<SignupForm/>} />
                  <Route path="/jobpost" element={<JobPostForm/>} />
                  <Route path="/jobpostlist"element={<JobPostList/>}/>
                  <Route path="/learnmore"element={<LearnMore/>}/>
                  <Route path="/housekeeperlist"element={<HousekeeperList/>}/>
                  <Route path="/testimonials"element={<Testimonial/>}/>
                  <Route path="/apply"element={<Apply title="Apply" />}/>

          
                       

      
                  </Routes>
      <Footer/>
   </BrowserRouter>
  </>
  );
}

export default App;
