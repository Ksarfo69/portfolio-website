import styles from '../styles/Resume.module.css'
import React from 'react'

const Experience = () => {
  return (
     <div className={styles.center} data-testid="container">
        <h2 className={styles.heading2} data-testid="heading">
            Experience
        </h2>
        <ul className={styles.explist} data-testid="list">
          <li>
            Fullstack developer in Training at ALX Africa - <em>May 2022 - Present</em>
            <div className={styles.experienceinfo}>
              <p>- Shell scripting with bash.</p>
              <p>- Low-level programming in C.</p>
            </div>
          </li>
          <br/>
          <li>
            Fullstack developer at FourEyesGh - <em>Nov 2021 - Jan 2022</em>
            <div className={styles.experienceinfo}>
              <p>- Wrote high-quality code using React for the frontend sub-system and NodeJS(ExpressJS) for the backend sub-system.</p>
              <p>- Integrated payments using Paystack APIs</p>
              <p>- Implemented authentication using bcrypt and JWT</p>
            </div>
          </li>
        </ul>
      </div>
  )
}

export default Experience