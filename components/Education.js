import styles from '../styles/Resume.module.css'

const Education = () => {
  return (
      <div className={styles.center}>
        <h2 className={styles.heading2}>
            Education
        </h2>
        <ul className={styles.edulist}>
          <li>
           Backend engineering at AltSchool Africa - Apr 2022 - Present
          </li>
          <li>
           Quantity Surveying and Construction Economics at Kwame Nkrumah
           University of Science and Technology - Sep 2017 - Nov 2021
          </li>
        </ul>
      </div>
  )
}

export default Education