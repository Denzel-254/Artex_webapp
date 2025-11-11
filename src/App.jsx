import "aos/dist/aos.css";
import './App.css'
import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import Stats from './components/sections/Stats'
import SectionWrapper from './components/common/Sectionwrapper'
import Expertise from './components/sections/Expertise'
import NewMerchandise from './components/sections/NewMerchandise'
import About from './components/sections/About'
import Testimonial from './components/sections/Testimonials'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'
import Login from './components/sections/Login'
import Signup from './components/sections/Signup'
import Home from './components/sections/Home'
import Products from './components/common/Product'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React, { useEffect } from "react";
import AOS from "aos";


function App() {


  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 120,
      easing: "ease-in-out",
      delay: 100,
      startEvent: 'DOMContentLoaded',
    });
  }, []);


  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Hero />
            <SectionWrapper className=" absolute hidden top-160 left-0 right-0 mx-auto w-11/12 md:block md:w-3/4 md:absolute md:top-125 md:left-0 md:right-0 md:mx-auto ">
              <Stats />
            </SectionWrapper>

            <SectionWrapper className="mt-8 bg-gray-50">
              <Expertise />
            </SectionWrapper>

            <SectionWrapper className="bg-gray-50">
              <NewMerchandise />
            </SectionWrapper>

            <SectionWrapper className="bg-gray-50">
              <About />
            </SectionWrapper>

            <SectionWrapper className="bg-gray-50">
              <Products />
            </SectionWrapper>

            <SectionWrapper className="bg-gray-50">
              <Testimonial />
            </SectionWrapper>

            <SectionWrapper className="bg-blue-950">
              <Contact />
            </SectionWrapper>

            <SectionWrapper className="bg-gray-500">
              <Footer />
            </SectionWrapper>

          </>
        } />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App





