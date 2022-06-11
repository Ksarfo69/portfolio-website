import styles from '../styles/Resume.module.css'

const Experience = () => {
  return (
     <div className={styles.center}>
        <h2 className={styles.heading2}>
            Experience
        </h2>
        <ul className={styles.explist}>
          <li>
            Fullstack developer in Training at ALX Africa - May 2022 - Present
            <div className={styles.experienceinfo}>
              <p>- Shell scripting with bash.</p>
              <p>- Low-level programming in C.</p>
            </div>
          </li>
          <br/>
          <li>
            Fullstack developer at FourEyesGh - Nov 2021 - Jan 2022
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