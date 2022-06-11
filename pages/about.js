import styles from '../styles/About.module.css'
import Navbar from '../components/Navbar'
import Image from 'next/image'

const About = () => {
  return (
    <div className={styles.container}>
      <Navbar/>
      <div className={styles.wrapper}>
        <div className={styles.left}>
              <Image src="/Img/Aboutimg1.png" alt="" width={400} height={280} />
        </div>
        <div className={styles.center}>
          <h1 className={styles.h1text}>About</h1>
          <p className={styles.ptext}>
            <p>
              I'm a self taught fullstack developer with experience in designing and building management systems as well as deploying and managing web applications.
            </p>
            <p>
              I'm a self-motivated learner with strong organisation, time management & communication skills.
            </p>
            <p>
              I'm able to work independently & collaboratively in a team with meticulous attention to detail.
            </p>
          </p>
        </div>
        <div className={styles.right}>
          <Image src="/Img/Aboutimg2.png" alt="" width={350} height={280} />
        </div>
      </div>
    </div>
  )
}

export default About