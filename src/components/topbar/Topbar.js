import Image from 'next/image'
import React from 'react'
import logo from '@/../public/logo.png'
import styles from './Topbar.module.css'

export default function Topbar() {
  return (
    <>
        <div className={styles.conatiner}>
            <Image src={logo}/>
            <p>Power Solution Trading Company</p>
        </div>
    </>
  )
}
