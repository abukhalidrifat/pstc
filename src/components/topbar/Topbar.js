import Image from 'next/image'
import React from 'react'
import logo from '@/../public/logo.png'
import logo2 from '@/../public/logo2.jpeg'
import logo3 from '@/../public/logo3.jpeg'
import logo4 from '@/../public/logo4.jpeg'
import styles from './Topbar.module.css'

export default function Topbar() {
  return (
    <>
        <div className={styles.conatiner}>
            <Image src={logo} className={styles.mainlogo}/>
            <p>Power Solution Trading Company</p>
            <div className={styles.logoDiv}>
            <Image src={logo2} className={styles.logo} style={{ marginLeft:'15px' }}/>
            <Image src={logo3} className={styles.logo}/>
            <Image src={logo4} className={styles.logo} />
            </div>
        </div>
    </>
  )
}
