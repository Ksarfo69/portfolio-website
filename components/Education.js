import styles from '../styles/Resume.module.css'
import React from 'react'

const Education = () => {
  return (
      <div className={styles.center} data-testid="container">
        <h2 className={styles.heading2} data-testid="heading">
            Education
        </h2>
        <ul className={styles.edulist} data-testid="list">
          <li>
           Backend engineering at AltSchool Africa - <em>Apr 2022 - Present</em>
          </li>
          <li>
           Quantity Surveying and Construction Economics at Kwame Nkrumah
           University of Science and Technology - <em>Sep 2017 - Nov 2021</em>
          </li>
        </ul>
      </div>
  )
}

export default Education