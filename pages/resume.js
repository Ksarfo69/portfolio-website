import Navbar from "../components/Navbar"
import styles from "../styles/Resume.module.css"
import Education from "../components/Education"
import Certifications from "../components/Certifications"
import Experience from "../components/Experience"
import Generalinfo from "../components/Generalinfo"
import Summary from "../components/Summary"
import Interests from "../components/Interests"



const Resume = () => {
  return (
    <div className={styles.container}>
      <Navbar/>
      <div className={styles.mainwrapper}>
        <Generalinfo/>
        <Summary/>
        <Interests/>
        <Education/>
        <Experience/>
        <Certifications/>
      </div>
    </div>    
  )
}

export default Resume