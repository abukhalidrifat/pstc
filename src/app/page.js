import React from 'react'
import Topbar from '@/components/topbar/Topbar'
import Navbar from '@/components/navbar/navbar'
import Welcome from '@/components/welcome/Welcome'
import Product from '@/components/product/Product'
import Services from '@/components/services/Services'
import Contactus from '@/components/contactus/Contactus'
import Aboutus from '@/components/aboutus/Aboutus'
import Mainbusinessareas from '@/components/mainbusinessareas/Mainbusinessareas'
import Footer from '@/components/footer/footer'

export default function Home() {
  return (
    <>
        <Topbar/>
        <Navbar/>
        <Welcome/>
        <Product/>
        <Services/>
        <Contactus/>
        <Aboutus/>
        <Mainbusinessareas/>
        <Footer/>
    </>
  )
}