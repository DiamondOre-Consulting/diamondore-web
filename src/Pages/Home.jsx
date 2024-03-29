import React from 'react'
import Nav from '../Components/Nav'
import Hero from '../Components/Hero'
import HomeAbout from '../Components/HomeAbout'
import Clients from '../Components/Clients'
import Stats from '../Components/Stats'
import Testimonials from '../Components/Testimonials'
import Footer from '../Components/Footer'
import ContactHome from '../Components/ContactHome'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MetaPixel from '../utils/meta/metapixel'

const Home = () => {
  return (
    <div>
        <MetaPixel />
        <Hero />
        <HomeAbout />
        <Clients />
        <Stats />
        <Testimonials />
        <ContactHome />
    </div>
  )
}

export default Home