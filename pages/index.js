import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import Menu from '../components/Menu'
import About from './aboutPageForIndex'
import Projects from './projectsPageForIndex'
import Footer from '../components/Footer'
import React from 'react'

export default function Home() {
  return (
    <div className={styles.container} data-testid="homepagecontainer">
      <Head>
        <title>Kwame Sarfo Portfolio</title>
        <meta name="description" content="Personal portfolio of Kwame Sarfo" />
        <link rel="icon" href="/Me.jpg" />
      </Head>
      <Navbar data-testid="navbar"/>
      <div className={styles.introductionContainer} data-testid="introduction">
        <div className={styles.introWrapper}>
          <div className={styles.left}>
              <h1 className={styles.name}>Hi! I am Kwame Sarfo</h1>
              <p className={styles.info}><em>I design and build web applications</em></p>
          </div>
          <div className={styles.right}>
              <Image src="/Img/Laptop.png" alt="" width={1366} height={1000} />
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <Link href="/projects">
            <button className={styles.button}>
              Explore
            </button>
          </Link>
        </div>
      </div>
      <div className={styles.about}><About/></div>
      <div className={styles.projects}><Projects/></div>
      <Footer/>
    </div>
  )
}
