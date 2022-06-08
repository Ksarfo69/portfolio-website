import styles from '../styles/Resume.module.css'

const Certifications = () => {
  return (
    <div className={styles.center}>
        <h2 className={styles.heading2}>
            Certifications
        </h2>
        <ul className={styles.certlist}>
            <li>
            Scientific Computing with Python - FreeCodeCamp
            </li>
            <li>
            JavaScript Algorithms and Data Structures - FreeCodeCamp
            </li>
            <li>
            Responsive Web Design - FreeCodeCamp
            </li>
          </ul>
        </div>
  )
}

export default Certifications