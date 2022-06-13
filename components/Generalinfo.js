import styles from "../styles/Resume.module.css";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import DvrIcon from '@mui/icons-material/Dvr';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Generalinfo = () => {
  return (
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
            <div className={styles.iconholder}><HomeIcon/><div className={styles.iconspacer}>Kumasi, Ghana</div></div>
            <div className={styles.iconholder}><DvrIcon/><div className={styles.iconspacer}>www.portfolio.com</div></div>
            <div className={styles.iconholder}><LinkedInIcon/><div className={styles.iconspacer}>linkedin/kwame-sarfo/988484</div></div>
            <div className={styles.iconholder}><GitHubIcon/><div className={styles.iconspacer}>github/Ksarfo69</div></div>
          </div>
        </div>  
      </div>
  )
}

export default Generalinfo