import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from "react-scroll-to-top";
// import CookieBanner from '../components/CookieBanner';
// import { posthog } from 'posthog-js';

const HomeLayout = () => {
  return (
    <React.Fragment>
          {/* {
            posthog.has_opted_out_capturing()||
            posthog.has_opted_in_capturing()
            ? null
            :<CookieBanner/>
          } */}
      <ScrollToTop className='flex items-center justify-center font-bold' color='#000000' width='20' height='20' smooth='true' style={{borderRadius: 50, backgroundColor: 'lightgreen', fontWeight: 400}}/>
        <Navbar/>
        <Outlet/>
        <Footer/>
        
    </React.Fragment>
  )
}

export default HomeLayout
