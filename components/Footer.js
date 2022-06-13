
import Link from 'next/link'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.links}>
            <div className={styles.link}>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Ksarfo69">Github</a>
            </div>
            <div className={styles.link}>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kwame-sarfo-91484933">LinkedIn</a>
            </div>
        </div>
        <p className={styles.footertext}>Created by Kwame Sarfo</p>
    </div>
  )
}

export default Footer