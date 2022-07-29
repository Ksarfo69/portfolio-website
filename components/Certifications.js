import styles from '../styles/Resume.module.css'
import React from 'react'

const Certifications = () => {
  return (
      <div className={styles.center} data-testid="container">
        <h2 className={styles.heading2} data-testid="heading">
            Certifications
        </h2>
        <ul className={styles.certlist} data-testid="list">
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