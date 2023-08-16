import React from 'react'
import Topbar from '@/components/topbar/Topbar'
import Navbar from '@/components/navbar/navbar'
import Welcome from '@/components/welcome/Welcome'
import Product from '@/components/product/Products'
import Services from '@/components/services/Services'
import Contactus from '@/components/contactus/Contactus'
import Aboutus from '@/components/aboutus/Aboutus'
import Mainbusinessareas from '@/components/mainbusinessareas/Mainbusinessareas'
import Footer from '@/components/footer/footer'
import HomeProducts from '@/components/product/HomeProducts'

export default function Home() {
  return (
    <>
        <Topbar/>
        <Navbar/>
        <Welcome/>
        <HomeProducts/>
        <Services/>
        <Contactus/>
        <Aboutus/>
        <Mainbusinessareas/>
        <Footer/>
    </>
  )
}