import Navbar from "../components/Navbar"
import styles from "../styles/Resume.module.css"
import Education from "../components/Education"
import Certifications from "../components/Certifications"
import Experience from "../components/Experience"
import Generalinfo from "../components/Generalinfo"
import Summary from "../components/Summary"
import Interests from "../components/Interests"
import Footer from "../components/Footer"
import React from 'react'



const Resume = () => {
  return (
    <div className={styles.container} data-testid="resumecontainer">
      <div data-testid="navbar"><Navbar /></div>
      <div className={styles.mainwrapper}>
        <div className={styles.title} data-testid="title">
          Resume
        </div>
        <div data-testid="generalinfo"><Generalinfo /></div>
        <div data-testid="summary"><Summary/> </div>
        <div data-testid="interests"><Interests /></div>
        <div data-testid="education"><Education /></div>
        <div data-testid="experience"><Experience /></div>
        <div data-testid="certifications"><Certifications /></div>
      </div>
      <div data-testid="footer"><Footer /></div>
    </div>    
  )
}

export default Resume