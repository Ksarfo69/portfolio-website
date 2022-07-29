import styles from "../styles/Resume.module.css"
import React from "react"

const Interests = () => {
  return (
    <div className={styles.row} data-testid="container">
      <div className={styles.wrapper}>
            <div className={styles.left}>
                <h2 className={styles.heading} data-testid="heading">
                    Interests
                </h2>
                <ul className={styles.list} data-testid="list">
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
                <h2 className={styles.heading2} data-testid="heading2">
                    Software
                </h2>
                <div className={styles.buttoncontainer} data-testid="softwares">
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
    </div>
  )
}

export default Interests