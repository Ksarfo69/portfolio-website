import styles from "../styles/Resume.module.css"

const Summary = () => {
    return (
     <div className={styles.row}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <h2 className={styles.heading}>
              Summary
            </h2>
            <p className={styles.bodytext}>
              Kwame recently started his journey in the tech industry as a junior developer. He is a self-motivated learner with strong organisation, time management and communication skills. He's able to work independently and collaboratively in a team with great attention to detail.
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
    )
}

export default Summary