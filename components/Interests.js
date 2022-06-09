import styles from "../styles/Resume.module.css"

const Interests = () => {
  return (
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
    </div>
  )
}

export default Interests