import Navbar from "../components/Navbar"
import styles from "../styles/Resume.module.css"
import Education from "../components/Education"
import Certifications from "../components/Certifications"
import Experience from "../components/Experience"
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import DvrIcon from '@mui/icons-material/Dvr';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Resume = () => {
  return (
    <div className={styles.container}>
      <Navbar/>
      <div className={styles.mainwrapper}>
      <div className={styles.row}>
        <div className={styles.wrapper}>
        <div className={styles.left}>
          <h1 className={styles.left1title}>
            Kwame Sarfo
            </h1>
          <p className={styles.left1p}>
            Fullstack developer
          </p>
          </div>
        <div className={styles.right}>
          <div className={styles.iconholder}><EmailIcon/><div className={styles.iconspacer}>ksarfo69@gmail.com</div></div>
          <div className={styles.iconholder}><PhoneIcon/><div className={styles.iconspacer}>+233 249 771 237</div></div>
          <div className={styles.iconholder}><HomeIcon/><div className={styles.iconspacer}>Kumasi, Ghanaa</div></div>
          <div className={styles.iconholder}><DvrIcon/><div className={styles.iconspacer}>www.portfolio.com</div></div>
          <div className={styles.iconholder}><LinkedInIcon/><div className={styles.iconspacer}>linkedin/kwame-sarfo/988484</div></div>
          <div className={styles.iconholder}><GitHubIcon/><div className={styles.iconspacer}>github/Ksarfo69</div></div>
  
          </div>
        </div>  
      </div>

      <div className={styles.row}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <h2 className={styles.heading}>
              Summary
            </h2>
            <p className={styles.bodytext}>
            Elly has recently started her journey in the tech industry as a junior developer. Self-motivated learner with strong organisation, time management and communication skills. Able to work independently and collaboratively in a team with a meticulous attention to detail.
            </p>
          </div>
          <div className={styles.right}>
            <h2 className={styles.heading2}>
              Key Skills
            </h2>
            <div className={styles.buttoncontainer}>
            <button className={styles.skillbutton}>
              HTML           
            </button>
            <button className={styles.skillbutton}>
              CSS
            </button>
            <button className={styles.skillbutton}>
              JavaScript
            </button>
            <button className={styles.skillbutton}>
              Styled-components
            </button>
            <button className={styles.skillbutton}>
              React
            </button>
            <button className={styles.skillbutton}>
              Next.js
            </button>
            <button className={styles.skillbutton}>
              PostgreSQL
            </button>
            <button className={styles.skillbutton}>
              MySQL
            </button>
            <button className={styles.skillbutton}>
              MongoDB
            </button>
            <button className={styles.skillbutton}>
              Git
            </button>
            <button className={styles.skillbutton}>
              Github
            </button>
            </div>
          </div>
        </div>
      </div>


      <div className={styles.row}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <h2 className={styles.heading}>
            Interests
          </h2>
          <ul className={styles.list}>
            <li>
            Developing general development skills
            </li>
            <li>
           Formula 1 Racing
            </li>
            <li>
           Project Cars
            </li>
          </ul>
          </div>
        <div className={styles.right}>
          <h2 className={styles.heading2}>
            Software
          </h2>
          <div className={styles.buttoncontainer}>
          <button className={styles.skillbutton}>
            Insomnia           
          </button>
          <button className={styles.skillbutton}>
            PgAdmin
          </button>
          <button className={styles.skillbutton}>
            MySQL Workbench
          </button>
          <button className={styles.skillbutton}>
            Visual Studio Code
          </button>
          <button className={styles.skillbutton}>
            PyCharm
          </button>
          </div>
        </div>
        </div>

        <Education/>
        <Experience/>
        <Certifications/>

      </div>
      </div>
      </div>
  )
}

export default Resume