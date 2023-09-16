import React from 'react';
import Navbar from '../components/Navbar';
import Home from '../components/pages/HomePage/Home';
import Footer from '../components/pages/Footer/Footer';
import GrievanceForm from './pages/form/GrievanceForm';
import PrivacyPolicy from './pages/Legal/PrivacyPolicy';
import Terms from './pages/Legal/Terms';
import Copyright from './pages/Legal/Copyright';
import {Routes, Route } from 'react-router-dom';

function MainPageRouter() {
  return (
    <>
             <nav>
                 <Navbar/>
            </nav>
            <Routes>
                <Route index element = {<Home/>}/>
                <Route path='/home'element={<Home/>}/>
                 <Route path='/form' element={<GrievanceForm/>}/> 
                <Route path='/privacy-policy' element = {<PrivacyPolicy/>}/>
                 <Route path='terms-and-conditions' element = {<Terms/>}/>
                 <Route path='/copyright-notice' element = {<Copyright/>}/>
           </Routes>
             <footer>
                 <Footer/>
             </footer>
    </>
  )
}

export default MainPageRouter;