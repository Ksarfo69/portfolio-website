import styles from "../styles/Resume.module.css"
import React from "react"

const Summary = () => {
    return (
     <div className={styles.row} data-testid="container">
        <div className={styles.wrapper}>
          <div className={styles.left} data-testid="heading">
            <h2 className={styles.heading}>
              Summary
            </h2>
            <p className={styles.bodytext} data-testid="info">
              Kwame recently started his journey in the tech industry as a junior developer. He is a self-motivated learner with strong organisation, time management and communication skills. He&apos;s able to work independently and collaboratively in a team with great attention to detail.
            </p>
          </div>
          <div className={styles.right}>
            <h2 className={styles.heading2} data-testid="heading1">
              Key Skills
            </h2>
            <div className={styles.buttoncontainer} data-testid="skills"> 
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
    )
}

export default Summary