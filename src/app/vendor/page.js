import React from 'react'
import styles from './Vendor.module.css'
import Footer from '@/components/footer/footer'
import Topbar from '@/components/topbar/Topbar'
import Navbar from '@/components/navbar/navbar'
import Image from 'next/image'

export default function Vendor() {
  return (
    <>
        <Topbar />
      <Navbar />
      <section>
        <div className={styles.title}>
          <p>OUR VENDORS</p>
        </div>
        <div className={styles.img}>
            <Image src={'/vendors.jpg'} width={1920} height={5010}/>
        </div>
        </section>
        <Footer/>
    </>
  )
}