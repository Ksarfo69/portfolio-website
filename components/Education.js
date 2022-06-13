import styles from '../styles/Resume.module.css'

const Education = () => {
  return (
      <div className={styles.center}>
        <h2 className={styles.heading2}>
            Education
        </h2>
        <ul className={styles.edulist}>
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