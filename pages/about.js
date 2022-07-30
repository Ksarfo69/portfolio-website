import styles from '../styles/About.module.css'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import Footer from '../components/Footer'
import React from 'react'

const About = () => {
  return (
    <div className={styles.container} data-testid="aboutcontainer">
      <div data-testid="navbar"><Navbar/></div>
      <div className={styles.wrapper}>
        <div className={styles.left} data-testid="image1">
              <Image src="/Img/Aboutimg1.png" alt="" width={400} height={280} />
        </div>
        <div className={styles.center}>
          <h1 className={styles.h1text} data-testid="title">About</h1>
          <p className={styles.ptext} data-testid="info">
            <p>
              I&apos;m a self taught fullstack developer with experience in designing and building management systems as well as deploying and managing web applications.
            </p>
            <p>
              I&apos;m a self-motivated learner with strong organisation, time management & communication skills.
            </p>
            <p>
              I&apos;m able to work independently & collaboratively in a team with meticulous attention to detail.
            </p>
          </p>
        </div>
        <div className={styles.right} data-testid="image2">
          <Image src="/Img/Aboutimg2.png" alt="" width={350} height={280} />
        </div>
      </div>
      <div data-testid="footer"><Footer/></div>
    </div>
  )
}

export default About