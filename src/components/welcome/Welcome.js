import React from 'react'
import styles from './Welcome.module.css'
import Image from 'next/image'
import solar from '@/../public/solar-pannel.jpg'

export default function Welcome() {
  return (
    <>
        <section className={styles.section}>
            <div className={styles.leftContainer}>
                <p className={styles.heading}>WELCOME TO</p>
                <p className={styles.paragraph}>Power Solution</p>
                <p className={styles.paragraph}>Trading Company</p>
            </div>
            <div className={styles.rightContainer}>
              <Image src={solar}/>
            </div>
        </section>
    </>
  )
}